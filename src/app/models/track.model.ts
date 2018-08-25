export class Track {
  name: Object;
  artist: Object;
  album: Object;
  number: number;
  disc: number;

  constructor(trackInfo:any) {
    this.name = trackInfo.name;
    this.artist = trackInfo.artist;
    this.album = trackInfo.album;
    this.number = trackInfo.number;
    this.disc = trackInfo.disc;
  }
}