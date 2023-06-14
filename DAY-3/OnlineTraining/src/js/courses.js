async function fetchCourses() {
  try {
    let courses = null;
    let res = await fetch("http://localhost:3000/courses");
    if (res.ok) {
      courses = await res.json();
      DisplayCourses(courses);
    }
  } catch (error) {
    console.log(error);
  }
}

function DisplayCourses(courses) {
  let listofcourses = document.getElementById("listofcourses");
  for (const course of courses) {
    let newCourse = document.createElement("li");
    newCourse.innerText = course.title;
    listofcourses.appendChild(newCourse);
  }
}

window.addEventListener("DOMContentLoaded", fetchCourses);
