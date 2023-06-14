function AddNewCourse() {
  let courseToBeadded = {
    id: 8,
    title: "AureliaJS",
    price: 6000,
    rating: 5,
    likes: 100,
    imageUrl:
      "https://www.valuecoders.com/blog/wp-content/uploads/2016/12/aurleiajs1.jpg",
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
      window.location.href =
        "http://127.0.0.1:5500/DAY-3/OnlineTraining/src/html/Courses.html";
    });
}
