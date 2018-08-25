import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Album, Disc, Track } from '../../../models';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit, OnChanges {
  @Input()
  private album: any;
  @Input()
	language = {
		album: '',
		track: '',
		artist: ''
	}

	@Output()
	emitScrobble = new EventEmitter();

	currentAlbum: any = {};
	albumFormGroup: FormGroup;

	constructor(private fb: FormBuilder) {
		this.albumFormGroup = this.fb.group({});
	}

  ngOnInit() {
  }

  ngOnChanges(changes) {
  	if (changes.album) {
	  	this.album = changes.album.currentValue;
	  	this.currentAlbum = this.album;
			this.updateForm();
		}
	}

	updateForm() {
		this.albumFormGroup.addControl(
			'AlbumName', new FormControl('')
		);
		this.albumFormGroup.addControl(
			'AlbumArtistName', new FormControl('')
		);
		if (this.album) {
			this.album.discs.forEach((disc, i) => {
				disc.tracks.forEach((track, j) => {
					this.albumFormGroup.addControl(
						'Disc' + i + 'TrackName' + j, new FormControl('')
					);
					this.albumFormGroup.addControl(
						'Disc' + i + 'ArtistName' + j, new FormControl('')
					);
				});
			});
		}
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
		let t = {
			name: this.getTrackName(track),
			artist: this.getArtistName(track),
			album: this.getAlbumName(),
			number: track.number
		};
		let albumOverride = this.albumFormGroup.controls['AlbumName'].value;
		if (albumOverride && albumOverride != '') {
			t.album = albumOverride;
		}
		let discNum = track.disc-1;
		let trackNum = track.number-1;
		let trackOverride = this.albumFormGroup.controls['Disc'+discNum+'TrackName'+trackNum].value;
		if (trackOverride && trackOverride != '') {
			t.name = trackOverride;
		}
		let artistOverride = this.albumFormGroup.controls['Disc'+discNum+'ArtistName'+trackNum].value;
		if (artistOverride && artistOverride != '') {
			t.artist = artistOverride;
		}
		let albumArtistOverride = this.albumFormGroup.controls['AlbumArtistName'].value;
		if (albumArtistOverride && albumArtistOverride != '') {
			t.artist = albumArtistOverride;
		}
		return t;
	}

	scrobbleTrack(track: Track) {
		//console.log('track', this.formTrack(track));
  	this.emitScrobble.next([this.formTrack(track)]);
	}

	scrobbleDisc(disc: Disc) {
		var tracks = [];
		disc.tracks.forEach((track) => {
			tracks.push(this.formTrack(track));
		});
		//console.log('tracks', tracks);
  	this.emitScrobble.next(tracks);
	}

	scrobbleAlbum() {
		var tracks = [];
		this.album.discs.forEach((disc) => {
			disc.tracks.forEach((track) => {
				tracks.push(this.formTrack(track));
			});
		});
		//console.log('tracks', tracks);
  	this.emitScrobble.next(tracks);
	}
}
