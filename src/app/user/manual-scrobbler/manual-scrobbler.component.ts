import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual-scrobbler',
  templateUrl: './manual-scrobbler.component.html',
  styleUrls: ['./manual-scrobbler.component.css']
})
export class ManualScrobblerComponent implements OnInit {
  albumName: string = '';
  artistName: string = '';
  trackName: string = '';

  constructor() { }

  ngOnInit() {
  }

  onAlbumNameChange(newVal: string) {
  	this.albumName = newVal;
  }

  onArtistNameChange(newVal: string) {
  	this.artistName = newVal;
  }

  onTrackNameChange(newVal: string) {
  	this.trackName = newVal;
  }

  scrobble() {
  }
}
