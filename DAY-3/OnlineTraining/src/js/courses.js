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
  for (const course of courses) {
    CreateNewCourseItem(course);
  }
}

function CreateNewCourseItem(course) {
  let listofcourses = document.getElementById("listofcourses");

  let newCourseCard = document.createElement("div");
  newCourseCard.className = "card";
  newCourseCard.style.width = "18rem";

  let newCourseCardImage = document.createElement("img");
  newCourseCardImage.src = course.imageUrl;

  newCourseCardImage.className = "card-img-top";
  newCourseCard.appendChild(newCourseCardImage);

  listofcourses.appendChild(newCourseCard);
}

window.addEventListener("DOMContentLoaded", fetchCourses);
