import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Album, Disc, Track } from '../../../models';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input()
  album: any;
  @Input()
	language = {
		album: '',
		track: '',
		artist: ''
	}

	@Output()
	emitScrobble = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

	getAlbumName() {
		return this.album.name[this.language.album];
	}

	getTrackName(track: Track) {
		return track.name[this.language.track];
	}

	getArtistName(track: Track) {
		return track.artist[this.language.artist];
	}

	formTrack(track: Track) {
		return {
			name: this.getTrackName(track),
			artist: this.getArtistName(track),
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
