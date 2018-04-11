const express = require("express");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000 ;

var courses = [
    {id:1,Name : "Course1"},
    {id:2,Name : "Course2"},
    {id:3,Name : "Course3"}
    
];

app.get("/api/courses", (req,res) => {
res.send(courses);
});

app.get("/api/courses/:id", (req,res) => {

    var course = courses.find(c => c.id == req.params.id);
    if(!course){
        res.status(404).send(" 404 The Requested Course Was Not Found");
    }
    res.send(course);
    });

    app.post("/api/courses", (req,res) => {

        var course = {};
        course.name = req.body.name;
        course.id = courses.length + 1  ;

        if(!course.id){
            res.status(405).send(" Bad Request");
            return;
        }
        courses.push(course);
        res.send(course);
        });

app.listen(PORT, () => console.log(`Server Started and Listening to POrt ${PORT} ... \n`));