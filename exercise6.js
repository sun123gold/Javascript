// Exercise 6: Grade Checker
let score = prompt("(0-100):");
if (score >= 70 && score <= 100) {
  alert("Excellent");
} else if (score >= 50 && score < 70) {
  alert("Good");
} else {
  alert("Needs Improvement");
}