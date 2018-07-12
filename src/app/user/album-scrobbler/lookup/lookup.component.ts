import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LookupService } from '../../../core/services/lookup.service';
import { Regex } from '../../../core/constants/regex';

import { Album, Disc, Track } from '../../../models';
const regex = Regex.domain;

const enum domains {
	ITUNES = 'itunes.apple.com',
	VGMDB = 'vgmdb.net'
};

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.css']
})
export class LookupComponent implements OnInit {
	url: string = '';

	@Input()
	album: any;

	@Output()
	emitAlbum = new EventEmitter();
  
  constructor(private lookup: LookupService) { }

  ngOnInit() {
  }

	onChange(newVal: string) {
		this.url = newVal;
	}

  onSubmit() {
  	this.findAlbum(this.url);
  }

	isITunes(domain: string) {
		return domain == domains.ITUNES;
	}

	isVGMDb(domain: string) {
		return domain == domains.VGMDB;
	}

	private findAlbum(url: string) {
		let domain = url.match(regex)[1];
		switch(domain) {
			case domains.ITUNES:
				this.lookup.findITunesAlbum(url)
					.subscribe((data: any) => {
						console.log(data);
		  			this.album = this.createITunesAlbum(data.results);
						this.emitAlbum.next(this.album);
		  		});
				break;
			case domains.VGMDB:
				this.lookup.findVGMDbAlbum(url)
					.subscribe((data: any) => {
						console.log(data);
		  			this.album = this.createVGMDBAlbum(data);
						this.emitAlbum.next(this.album);
		  		});
				break;
		}
	}

  private createITunesAlbum(albumData: any) {
  	let album = albumData.filter((obj) => {
			return obj.wrapperType == 'collection';
		})[0];
		let discs = this.createiTunesDiscs(albumData, album.country);
		let name = {};
		name[album.country] = album.collectionName;
		let lang = [album.country];
  	return new Album({
  		name: name,
  		artist: album.artistName,
  		discs: discs,
  		artwork: album.artworkUrl100,
  		langTitle: lang,
  		langTrack: lang,
  		langArtist: lang
  	});
  }

  private createVGMDBAlbum(albumData: any) {
		let artistName = this.getArtistName(albumData);
		let langArtist = Object.keys(artistName);
		let discs = this.createVGMDbDiscs(albumData, artistName);
		let langTitle = Object.keys(albumData.names);
		let langTrack = this.getTrackLanguages(albumData);
		let name = {};
		langTitle.forEach((lang) => {
			name[lang] = albumData.names[lang];
		});
	  	return new Album({
	  		name: name,
	  		artist: '-',
	  		discs: discs,
	  		artwork: albumData.picture_thumb,
	  		langTitle: langTitle,
	  		langTrack: langTrack,
	  		langArtist: langArtist
	  	});
  }

  private getTrackLanguages(albumData: any) {
  	let obj = albumData.discs[0].tracks[0].names;
  	return Object.keys(obj);
  }

  private createiTunesDiscs(albumData: any, lang: string) {
		let discs = [];
		let discCount = albumData.length > 1 ? albumData[1].discCount : 1;
		for (var i = 1; i <= discCount; i++) {
			let trackData = albumData.filter((obj) => {
				return obj.discNumber == i;
			});
			var tracks = [];
			trackData.forEach((t) => {
				let trackName = {};
				trackName[lang] = t.trackName;
				let artistName = {};
				artistName[lang] = t.artistName;
				let track = new Track({
					name: trackName,
					number: t.trackNumber,
					artist: artistName,
				});
				tracks.push(track);
			});
			let disc = new Disc({
				number: i,
				tracks: tracks
			});
			discs.push(disc);
		}
		return discs;
  }

  private createVGMDbDiscs(albumData: any, artist: Object) {
	let discs = [];
	let discCount = albumData.discs.length;
	albumData.discs.forEach((d, i) => {
		var tracks = [];
		d.tracks.forEach((t, i) => {
			let track = new Track({
				name: t.names,
				number: i+1,
				artist: artist,
			});
			tracks.push(track);
		})
		let disc = new Disc({
			number: i+1,
			tracks: tracks
		});
		discs.push(disc);
	})
	return discs;
  }

  private getArtistName(data: any) {
  	if ('performers' in data
  		&& data.performers.length > 0) {
  		return data.performers[0].names;
  	}
  	if ('composers' in data
  		&& data.composers.length > 0) {
  		return data.composers[0].names;
  	}
  	if ('arrangers' in data
  		&& data.arrangers.length > 0) {
  		return data.arrangers[0].names;
  	}
  	if ('lyricists' in data
  		&& data.lyricists.length > 0) {
  		return data.lyricists[0].names;
  	}
  	if ('publisher' in data) {
  		return data.publisher.names;
  	}
  	if ('organizations' in data
  		&& data.organizations.length > 0) {
  		return data.organizations[0].names;
  	}
  	if ('distributor' in data) {
  		return data.distributor.names;
  	}
  	return data.names; // if all else fails
  }
}
