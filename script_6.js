let codonStr = "CCUCGCCGGUACUUCUCG";

//je transforme string en tableau
let codonArrayDraft = codonStr.split("");
console.log(codonArrayDraft);
//je découpe le tableau en plusieurs tableau de 3 lettres
codonArray = []
for(let i = 0; i < codonArrayDraft.length; i+=3){
  codonArray.push(codonArrayDraft.slice(i,i+3));
}
console.log(codonArray);

//je recupere un nouveau tableau avec 6 elements de 3 lettres
correctCordonArray = []
for(let element in codonArray){
  console.log(codonArray[element]);
  //fusion les elements dans chaque sous tableau
  subCordonArray = codonArray[element].join("");
  console.log(subCordonArray);
  correctCordonArray.push(subCordonArray)
}

//un nouveau tableau avec les acides aminés
let accides=[];
console.log(correctCordonArray);

for(let element in correctCordonArray){
  let codons = correctCordonArray[element]
  console.log(codons)
  if(codons === "UCU" || codons === "UCC" || codons === "UCA" || codons === "UCG" || codons === "AGU" || codons === "AGC"){
    accides.push("Sérine")
    console.log("Sérine");
  } else if(codons === "CCU" || codons === "CCC" || codons === "CCA" || codons === "CCG"){
    accides.push("Proline")
    console.log("Proline");
  } else if(codons === "UUA" || codons === "UUG"){
    accides.push("Leucine")
    console.log("Leucine");
  } else if(codons === "UUU" || codons === "UUC"){
    accides.push("Phénylalanine")
    console.log("Phénylalanine");
  } else if(codons === "CGU" || codons === "CGC" || codons === "CGA" || codons === "CGG" || codons === "AGA" || codons === "AGG"){
    accides.push("Arginine")
    console.log("Arginine");
  } else if(codons === "UAU" || codons === "UAC"){
    accides.push("Tyrosine")
    console.log("Tyrosine");
  }

}

console.log(accides);
//transformer le tableau en string
let proteine = accides.join("-");
console.log(proteine);



