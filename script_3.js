let answer = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étage veux-tu ?");
for(i=1;i<=answer;i++){
  
  console.log(" ".repeat(answer-i) + "#".repeat(i));
}