console.log('***** Music Collection *****')

let collection = [];

function addToCollection(){
  let album = {title: title, artist: artist , yearPublished: yearPublished};
  collection.push(album);
  return album;
}; //end addToCollection function

//album = ['Violator','Depeche Mode', 1990']
//album = ('Siamese Dream', 'Smashing Pumpkins', '1993')
//album = ('Nevermind', 'Nirvana', '1991')
//album = ('Kid A', 'Radiohead', '2000')
//album = ('Koto', 'Clozee', '2015')
//album = ('Bury Me At Makeout Creek', 'Mitski', '2014')



console.log(addToCollection(title='Violator', artist='Depeche Mode', yearPublished=1990));
console.log(addToCollection(title='Siamese Dream', artist='Smashing Pumpkins', yearPublished=1993));
console.log(addToCollection(title='Nevermind', artist='Nirvana', yearPublished=1991 ));
console.log(addToCollection(title='Kid A', artist='Radiohead', yearPublished=2000));
console.log(addToCollection(title='Koto', artist='Clozee', yearPublished=2015));
console.log(addToCollection(title='Bury Me At Makeout Creek', artist='Mitski', yearPublished=2014));

function showCollection(collection){
  console.log(collection)
};

showCollection(collection);
console.log(collection.length);

showCollection(collection);

function showCollection(collection){
  for(let i = 0; i < collection.length; i++) {
console.log(collection[i].title +' ' + 'by ' + collection[i].artist + ' '+ 'published in ' + '' + collection[i].yearPublished);
  //console.log(collection.title + 'by' + collection.artist + 'published in' collection.yearPublished);
}
}
