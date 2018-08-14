import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  @Input()
  album: any;

	@Output()
	emitEvent = new EventEmitter();

	@Output()
	emitArtist = new EventEmitter();

	@Input()
	language = {
		album: '',
		track: '',
		artist: ''
	}

  constructor() { }

  ngOnInit() {
  }

	onLangAlbumChange(newVal: string) {
		this.language.album = newVal;
		this.emitEvent.next(this.language);
	}

	onLangTrackChange(newVal: string) {
		this.language.track = newVal;
		this.emitEvent.next(this.language);
	}

	onLangArtistChange(newVal: string) {
		this.language.artist = newVal;
		this.emitEvent.next(this.language);
	}

	onArtistNameChange(newVal) {
		this.emitArtist.next(newVal);
	}

	getArtistName(artist) {
		return artist.names[this.language.artist];
	}

}
