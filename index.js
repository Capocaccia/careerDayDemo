const student = {
  birthday: "March 27th 1989",
  clubs: "Chess, Dog Club, Wrestling",
  hobbies: "Soccer, Basketball, Skateoarding, Minecraft",
  email: "jamalhamlin@gmail.edu",
  location: "Ohio",
  gpa: "3.7",
};

Object.keys(student).forEach((key) => {
  document.querySelector(`#${key}`).textContent = student[key];
});
