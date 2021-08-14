console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished){
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };
  collection.push(album);
  return album;
}; //end addToCollection function

album = ((title='Violator'), (artist='Depeche Mode'), (yearPublished='1990'))
//album = ('Siamese Dream', 'Smashing Pumpkins', '1993')
//album = ('Nevermind', 'Nirvana', '1991')
//album = ('Kid A', 'Radiohead', '2000')
//album = ('Koto', 'Clozee', '2015')
//album = ('Bury Me At Makeout Creek', 'Mitski', '2014')

console.log(addToCollection(('Violator', 'Depeche Mode', '1990')));
