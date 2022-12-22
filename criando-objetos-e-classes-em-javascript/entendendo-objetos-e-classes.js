
// Funções dentro de objetos: métodos
// propriedades dentro de objetos: atributos
const pearlJam = {
  name: 'Pearl Jam',
  albums: [
    {
      name: 'Ten',
      releaseYear: 1991,
      songs: [
        'Once',
        'Even Flow',
        'Alive',
        'Why Go',
        'Black',
        'Jeremy',
        'Oceans',
         'Porch',
        'Garden',
        'Deep',
        'Release',
      ],
    },
    {
      name: 'Vs.',
      releaseYear: 1993,
      songs: [
        'Go',
        'Animal',
        'Daughter',
        'Glorified G',
        'Dissident',
        'W.M.A',
        'Blood',
        'RearviewMirror',
        'Rats',
        'Elderly Woman Behind the Counter in a Small Town',
        'Leash',
        'Indifference'
      ],
    },
    // ...
  ],
  foundedYear: 1990,
  members: [
    {
      name: 'Eddie Vedder',
      roles: ['Vocalist', 'Guitarist'],
    }, 
    {
      name: 'Matt Cameron',
      role: 'Drummer',
    },
    // ...
  ],
  getInfo: function () {
    let message = `${this.name} foi fundada em ${this.foundedYear} e possui ${this.albums.length} `;
    let albums = this.albums.length > 1 ? 'albums.' : 'album.';
    message += albums;

    console.log(message);
  }
};

pearlJam.genre = 'Rock';
// console.log(pearlJam);

delete pearlJam.genre;
// console.log(pearlJam);

pearlJam.getInfo();


// Classes
class Band {
  name;
  foundedYear;
  albums = [];

  constructor(bandName, bandFoundedYear) {
    this.name = bandName;
    this.foundedYear = bandFoundedYear;
  }

  getBandInfos() {
    let message = `${this.name} foi fundada em ${this.foundedYear} e possui ${this.albums.length} `;
    let albums = this.albums.length > 1 ? 'albums.' : 'album.';
    message += albums;

    return message;
  }

  addAlbum(newAlbum) {
    this.albums.push(newAlbum);
  }
}


const soundGarden = new Band('SoundGarden', 1988);
soundGarden.addAlbum(
  { 
    name: 'Screaming Life/Fopp',
    releaseYear: 1990,
    songs: [
      'Hunted Down',
      'Entering',
      'Tears to Forget',
      // ...
    ],
  }
);

console.log(soundGarden.getBandInfos())