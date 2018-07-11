import { Component, OnInit } from '@angular/core';
import { LastfmService } from '../../core/services/lastfm.service';
import { Regex } from '../../core/constants/regex';

@Component({
  selector: 'app-plaintext-scrobbler',
  templateUrl: './plaintext-scrobbler.component.html',
  styleUrls: ['./plaintext-scrobbler.component.css']
})
export class PlaintextScrobblerComponent implements OnInit {
  plaintextData: string = '';
  albumName: string = '';
  albumArtistName: string = '';
  tracks: Array<string>;
  
  constructor(
  	private lastfm: LastfmService
  ) { }

  ngOnInit() {
  }

  onAlbumNameChange(newVal: string) {
  	this.albumName = newVal;
  }

  onAlbumArtistNameChange(newVal: string) {
  	this.albumArtistName = newVal;
  }

  onTextareaChange(newVal: string) {
  	this.plaintextData = newVal;
  }

  parse() {
  	let data = this.plaintextData.trim().split(Regex.plaintext);
  	let trackList = [];
  	data.forEach((str) => {
  		if (str) {
  			trackList.push(str.replace('\n', ' ').trim());
  		}
  	});
  	let tracks = [];
  	trackList.forEach((t) => {
      if (t != null) {
    		let matched = t.match(Regex.plaintextTrack);
        if (matched == null) {
          tracks = undefined;
        } else {
      		let track = {
      			number: matched[1],
      			name: matched[2],
      			artist: this.albumArtistName,
      			album: this.albumName
      		};
      		tracks.push(track);
        }
      }
  	});
  	this.tracks = tracks;
  }

  scrobble() {
  	this.lastfm.scrobble(this.tracks)
  	.subscribe((data: any) => {
  		console.log(data);
  	});
  }

}