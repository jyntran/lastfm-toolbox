import { Component, OnInit } from '@angular/core';
import { LastfmService } from '../../core/services/lastfm.service';

@Component({
  selector: 'app-manual-scrobbler',
  templateUrl: './manual-scrobbler.component.html',
  styleUrls: ['./manual-scrobbler.component.css']
})
export class ManualScrobblerComponent implements OnInit {
  albumName: string = '';
  artistName: string = '';
  trackName: string = '';

  constructor(
    private lastfm: LastfmService
  ) { }

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
    this.lastfm.scrobbleTrack({
      name: this.trackName,
      artist: this.artistName,
      album: this.albumName
    })
    .subscribe((data: any) => {
      console.log(data);
    });
  }
}
