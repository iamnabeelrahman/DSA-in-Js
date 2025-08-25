// Data Structures and Algorithms - Searching Algorithms
// Linear Search Algorithm
const subjects = ["Math", "Science", "History", "Art", "Physical Education"];
const grades = ["A", "B", "C", "D", "F"];


// Data to find a specific subject
const findSujects = (allSubjects, subjectName) => {
  for (i = 0; i < allSubjects.length; i++) {
    if (allSubjects[i] === subjectName) {
      return console.log("Subject found:", allSubjects[i], "at index ", i);
    }
  }

};

findSujects(subjects, "History")

