import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { MD5Service } from './md5.service';

import { Config } from '../../../assets/config';

declare function unescape(s:string): string;

@Injectable()
export class LastfmService {
  apiKey: string;
  apiSecret: string;
  authURL: string;
  apiURL: string;
  callbackURL: string;

  constructor(
  	private http: HttpClient,
    private md5Service: MD5Service,
  ) {
    this.apiKey = Config['apiKey'];
    this.apiSecret = Config['apiSecret'];
    this.authURL = Config['authURL'];
    this.apiURL = Config['apiURL'];
    this.callbackURL = Config['callbackURL'];
  }

  private encode(value: any) {
    return unescape(encodeURIComponent(value));
  }

  private getSignature(method: string, params: Object) {
    let signature = "";
    let keys = [];
    for (var key in params) {
      keys.push(key);
    }
    for (var i in keys.sort()) {
      key = keys[i];
      signature += this.encode(key) + this.encode(params[key]);
    }
    signature += this.apiSecret;
    return this.md5(signature);
  }

  private md5(str: string) {
    return this.md5Service.createHash(str);
  }

  private sendRequest(method: string, params: any, options?: any) {
    if (options) {
      if (options.isSigned) {
        params['api_sig'] = this.getSignature(method, params);
      }
      if (options.isJSON) {
        params['format'] = 'json';
      }
    }
    if (method === 'GET') {
      let keys = Object.keys(params);
      let urlParams = [];
      keys.forEach((key) => {
        urlParams.push(key + '=' + params[key]);
      })
      return this.http.get(this.apiURL + '?' + urlParams.join('&'));
    } else if (method === 'POST') {
      let httpParams = new HttpParams({fromObject: params});
      return this.http.post(this.apiURL, httpParams);
    }
  }

  requestAuth() {
  	window.location.replace(
      this.authURL
      + "?api_key=" + this.apiKey
      + "&cb=" + this.callbackURL
    );
  }

  fetchSession(token: string) {
  	let method = 'auth.getSession';
  	let params = {
      'api_key': this.apiKey,
      'method': method,
      'token': token
    };
    return this.sendRequest('GET', params, {
      isSigned: true,
      isJSON: true
    });
  }

  getUserInfo(user?: string) {
    let method = 'user.getInfo';
    let params = {
      'api_key': this.apiKey,
      'method': method
    };
    if (user) {
      params['user'] = user;
    }
    return this.sendRequest('GET', params, {
      isSigned: false,
      isJSON: true
    });
  }

  scrobbleTrack(track: any) {
    return this.scrobble([track]);
  }

  scrobble(tracks: Array<any>) {
    let method = 'track.scrobble';
    let params = {
      'api_key': this.apiKey,
      'method': method,
      'sk': localStorage.getItem('lastfm_toolbox_key')
    };
    tracks.forEach((track, i) => {
      let timestamp = Math.floor(Date.now()/1000) + i;
      params['album['+i+']'] = track.album;
      params['artist['+i+']'] = track.artist;
      params['timestamp['+i+']'] = timestamp;
      params['track['+i+']'] = track.name;
    });
    return this.sendRequest('POST', params, {
      isSigned: true,
      isJSON: true
    });
  }
}