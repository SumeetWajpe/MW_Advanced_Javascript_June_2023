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
  newCourseCard.style.width = "15rem";

  let newCourseCardImage = document.createElement("img");
  newCourseCardImage.src = course.imageUrl;

  newCourseCardImage.className = "card-img-top";
  newCourseCard.appendChild(newCourseCardImage);

  let newCourseCardBody = document.createElement("div");
  newCourseCardBody.className = "card-body";

  let courseTitle = document.createElement("h5");
  courseTitle.className = "card-title my-1";
  courseTitle.innerText = course.title;

  let coursePrice = document.createElement("p");
  coursePrice.innerText = "₹." + course.price;
  coursePrice.className = "card-text m-0";

  let courseRating = document.createElement("p");
  courseRating.innerHTML = `<i class="fa-solid fa-star" style="color:orange"></i>`;
  courseRating.className = "card-text m-0";

  let courseLikesBtn = document.createElement("button");
  courseLikesBtn.innerHTML = `<i class="fa-regular fa-thumbs-up"></i> ${course.likes}`;
  courseLikesBtn.className = "btn btn-primary";

  newCourseCardBody.appendChild(courseTitle);
  newCourseCardBody.appendChild(coursePrice);
  newCourseCardBody.appendChild(courseRating);
  newCourseCardBody.appendChild(courseLikesBtn);

  newCourseCard.appendChild(newCourseCardBody);
  listofcourses.appendChild(newCourseCard);
}

window.addEventListener("DOMContentLoaded", fetchCourses);
