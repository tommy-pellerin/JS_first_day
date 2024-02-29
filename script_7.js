let userAnswer = prompt("Wesh saisi une phrase");

console.log(userAnswer)

if(userAnswer.includes("?")){
  console.log("Ouais Ouais...");    
} 
else if (userAnswer === userAnswer.toUpperCase() && userAnswer !== ""){
  console.log("Pwa, calme-toi...");
} 
else if(userAnswer.toLowerCase().includes("fornite")){ //toLowercase pour rendre le mot insensible au majuscule
  console.log("on s' fait une partie soum-soum ?");
} 
else if(userAnswer === "" || userAnswer === null || typeof userAnswer === "undefined"){
  console.log("t'es en PLS ?");
} 
else {
  console.log("balek.");
} 

