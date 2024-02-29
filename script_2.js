let answer = prompt("De quel nombre veux-tu calculer la factorielle ?");
let number = answer;
for(let i = 1; i < (number - 1) ; i++){
  console.log(i)
  answer = answer * (number-i)
  console.log(answer);
}
console.log(`Le resultat est : ${answer}`);