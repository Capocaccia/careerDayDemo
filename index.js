const student = {
  birthday: "7-12-27",
  clubs: "Art, Robotics, Chess",
  hobbies: "Aviation, Hunting, Scuba",
  email: "123dogscharacter@yahoo.com",
  location: "Ontario, CA",
  gpa: "5.7",
};

Object.keys(student).forEach(
  (key) => (document.querySelector(`#${key}`).textContent = student[key])
);
