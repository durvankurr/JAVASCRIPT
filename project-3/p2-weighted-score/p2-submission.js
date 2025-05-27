//Write solution code
// Function to calculate the total weighted score
function calculateTotalWeightedScore(
    assignmentScore,
    projectScore,
    quizScore,
    midTermScore,
    finalExamScore
  ) {
    // Step 1: Initialize variables for weightage
    const assignmentWeight = 10;
    const projectWeight = 35;
    const quizWeight = 10;
    const midTermWeight = 15;
    const finalExamWeight = 30;
  
    // Step 2: Calculate the weighted score for each assessment
    const assignmentWeightedScore = (assignmentWeight / 100) * assignmentScore;
    const projectWeightedScore = (projectWeight / 100) * projectScore;
    const quizWeightedScore = (quizWeight / 100) * quizScore;
    const midTermWeightedScore = (midTermWeight / 100) * midTermScore;
    const finalExamWeightedScore = (finalExamWeight / 100) * finalExamScore;
  
    // Step 3: Calculate the total weighted score
    const overallWeightedScore =
      assignmentWeightedScore +
      projectWeightedScore +
      quizWeightedScore +
      midTermWeightedScore +
      finalExamWeightedScore;
  
    // Step 4: Display individual weighted scores and total weighted score
    console.log(`Assignment Weighted Score: ${assignmentWeightedScore.toFixed(2)}`);
    console.log(`Project Weighted Score: ${projectWeightedScore.toFixed(2)}`);
    console.log(`Quiz Weighted Score: ${quizWeightedScore.toFixed(2)}`);
    console.log(`Mid Term Weighted Score: ${midTermWeightedScore.toFixed(2)}`);
    console.log(`Final Exam Weighted Score: ${finalExamWeightedScore.toFixed(2)}`);
    console.log(`Total Weighted Score: ${overallWeightedScore.toFixed(2)}`);
  }
  
  // Initialize the marks for each assessment
  const assignmentScore = 97;
  const projectScore = 82;
  const quizScore = 60;
  const midTermScore = 75;
  const finalExamScore = 80;
  
  // Call the function with the initialized marks
  calculateTotalWeightedScore(
    assignmentScore,
    projectScore,
    quizScore,
    midTermScore,
    finalExamScore
  );
  