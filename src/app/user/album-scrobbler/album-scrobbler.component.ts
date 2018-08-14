import { Component, OnInit } from '@angular/core';
import { LastfmService } from '../../core/services/lastfm.service';

@Component({
  selector: 'app-album-scrobbler',
  templateUrl: './album-scrobbler.component.html',
  styleUrls: ['./album-scrobbler.component.css']
})
export class AlbumScrobblerComponent implements OnInit {
  album: any;
  artist: any;

	language = {
		album: '',
		track: '',
		artist: ''
	}

  constructor(
  	private lastfm: LastfmService
  ) { }

  ngOnInit() {
  }

	onLangTitleChange(newVal: string) {
		this.language.album = newVal;
	}

	onLangTrackChange(newVal: string) {
		this.language.track = newVal;
	}

	onLangArtistChange(newVal: string) {
		this.language.artist = newVal;
	}

  findAlbum(album: any) {
  	this.album = album;
		this.language.album = album.langTitle[0];
		this.language.track = album.langTrack[0];
		this.language.artist = album.langArtist[0];
  }

  languageChange(language: any) {
  	this.language = language;
  }

  artistChange(artist) {
    this.artist = artist;
  }

  scrobble(tracks) {
  	this.lastfm.scrobble(tracks)
  	.subscribe((data: any) => {
  		console.log(data);
  	});
  }
}
