const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

//Fonction pour savoir si un livre a été loué une fois
/*
function onceRentbook(books){
  for(let book in books) {
    // console.log(books[book])
    let rentingState = books[book].rented
    if(rentingState < 1){
      return false;
    }
  }
}

if(onceRentbook(books) === false){
  console.log("Il y a au moins un livre qui n'a jamais été emprunté");
}
else {
  console.log("Tous les livres ont été empruntés au moins une fois");
}
*/




//Le livre le plus enprunté
//Récupé le chiffre le plus élevé

// let rentingArray = [];
// for(let book in books) {
//   // console.log(books[book])
//   let rentingState = books[book].rented
//   console.log(rentingState)
//   rentingArray.push(rentingState)  
// }

// let themax = Math.max(...rentingArray)
// console.log("Le nombre d'emprunt max est : " + themax)
// //cherche le livre dont l'attribut rented est égale à la valeur max
// let popularBook = books.find(book => book.rented === themax);
// console.log(popularBook.title);




//Le livre le moins emprunté
//une autre méthode pour extraire les valeurs
// let rentingsArray = books.map(book => book.rented);
// console.log(rentingsArray);

// let themin = Math.min(...rentingsArray);
// console.log(themin);

// let unpopularBook = books.find(book => book.rented === themin);
// console.log("Le livre le moins emprunté est : " + unpopularBook.title)




//ID 873495
// let statement = books.find(book=>book.id === 873495);
// console.log(statement.title)



//Supprime le livre avec l'ID: 133712
// let toDeleteBookIndex = books.findIndex(book => book.id === 133712);
// console.log(toDeleteBookIndex);
// console.log(books);
//delete books[toDeleteBookIndex]; //Deconseillé car la valeur est passé à empty mais n'est pas supprimé du tableau
//2 méthodes possible :
//1.Supprime un élement
// books.splice(toDeleteBookIndex,1); //supprime et retourn la valeur supprimée
// console.log(books);

//2.Cette méthode filtre ne supprime pas, il fait une copie du tableau en excluant l'élément qu'on ne veut pas, bonus, elle trie le tableau dans l'ordre alphabétique
let toDeleteBook = books.find(book=>book.id === 133712);
console.log(toDeleteBook);
let newbooks = books.filter(book => book !== toDeleteBook);
console.log(newbooks);

//trie
//il existe plusieur méthode de trie
//1.une méthode de trie des élément non ASCII
sortedNewbooks = newbooks.sort((a,b) => a.title.localeCompare(b.title));
console.log(sortedNewbooks);

//2.trie par ordre alphabétique
// books.sort((a, b) => {
//   const nameA = a.title.toUpperCase(); // ignore upper and lowercase
//   const nameB = b.title.toUpperCase(); // ignore upper and lowercase
//   if (nameA < nameB) {
//     return -1;
//   }
//   if (nameA > nameB) {
//     return 1;
//   }

//   // names must be equal
//   return 0;
// });

// console.log(books);

