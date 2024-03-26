import express from "express";
const app = express();

app.use(express.json());

let courseList = [
  {
    name: "MERN",
    duration: 90,
    tutorName: "Arun",
  },
  {
    name: "Python",
    duration: 75,
    tutorName: "Shraddha",
  },
  {
    name: "DSA",
    duration: 60,
    tutorName: "Anuj,",
  },
];

// Add course
app.post("/course/add", (req, res) => {
  const newCourse = req.body;
  courseList.push(newCourse);
  return res.status(200).send({ message: "course is added successfully." });
});

//get course list

app.get("/course/list", (req, res) => {
  return res.status(200).send(courseList);
});

// get course details
app.get("/course/details", (req, res) => {
  const courseName = req.body.name;
  console.log(courseName);
  const requiredCourse = courseList.find((item, index, self) => {
    if (item.name === courseName) {
      return item;
    }
  });
  if (!requiredCourse) {
    return res.status(404).send({ message: "course does not exist" });
  }
  return res
    .status(200)
    .send({ message: "success", courseDetails: requiredCourse });
});

// server and network port
const PORT = 8040;

app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});
