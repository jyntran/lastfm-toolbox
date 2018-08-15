import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Album, Disc, Track } from '../../../models';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit, OnChanges {
  @Input()
  album: any;
  @Input()
  artist: any;

  @Input()
  languages: any;
  @Input()
	language = {
		album: '',
		track: '',
		artist: ''
	}

  @Output()
  emitScrobble = new EventEmitter();

  objectKeys = Object.keys;

  constructor() { }

  ngOnInit() {
  }

	getAlbumName() {
		return this.album.name[this.language.album];
	}

	getTrackName(track: Track) {
		return track.name[this.language.track];
	}

	getInitialArtistName(artist) {
		return artist.names[Object.keys(artist.names)[0]];
	}

	getArtistName(artist) {
		return artist.names[this.language.artist];
	}

	setArtistName(track, newVal) {
		track.artist = newVal;
		track.artist.name = newVal.names[track.artist.lang];
	}

	overrideArtistName(track, newVal) {
		track.artist.name = newVal;
	}

	setArtistLang(track, newVal) {
		track.artist.lang = newVal;
		track.artist.name = track.artist.names[newVal];
	}

	ngOnChanges(changes: SimpleChanges) {
		if (this.album && changes.artist) {
			this.album.discs.forEach((disc) => {
				disc.tracks.forEach((track) => {
					track.artist = changes.artist.currentValue;
				})
			});
		}
	}

	formTrack(track: Track) {
		return {
			name: this.getTrackName(track),
			artist: track.artist.name,
			album: this.getAlbumName(),
			number: track.number
		};
	}

	scrobbleTrack(track: Track) {
  	this.emitScrobble.next([this.formTrack(track)]);
	}

	scrobbleDisc(disc: Disc) {
		var tracks = [];
		disc.tracks.forEach((track) => {
			tracks.push(this.formTrack(track));
		});
  	this.emitScrobble.next(tracks);
	}

	scrobbleAlbum() {
		var tracks = [];
		this.album.discs.forEach((disc) => {
			disc.tracks.forEach((track) => {
				tracks.push(this.formTrack(track));
			})
		});
	  	this.emitScrobble.next(tracks);
	}
}
