function AddNewCourse(e) {
  let courseToBeadded = {
    id: parseInt(document.querySelector("#txtCourseId").value),
    title: document.querySelector("#txtCourseTitle").value,
    price: parseInt(document.querySelector("#txtCoursePrice").value),
    rating: parseInt(document.querySelector("#txtCourseRating").value),
    likes: parseInt(document.querySelector("#txtCourseLikes").value),
    imageUrl: document.querySelector("#txtCourseImageUrl").value,
  };
  fetch("http://localhost:3000/courses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(courseToBeadded),
  })
    .then(res => res.json())
    .then(newcourse => {
      // alert(`${newcourse.title} added successfully !`);
      // window.location.href =
      //   "http://127.0.0.1:5500/DAY-3/OnlineTraining/src/html/Courses.html";
      let successMsg = document.querySelector(".success-msg");
      successMsg.style.display = "block";
    });
  e.preventDefault();
}
