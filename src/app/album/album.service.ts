import { Headers, RequestOptions, Http } from '@angular/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()

export class AlbumService {

    baseUrl :string = "http://www.theaudiodb.com/api/v1/json/1/";

    headers = new Headers({

    })

    options = new RequestOptions({
        headers : this.headers
    })
    
    constructor(private http : Http){

    }

    getAlbumsByArtist(artistName : string) : Observable<any>{
        return this.http.get(this.baseUrl + "searchalbum.php?s="+artistName)
        .map(this.extractData)
        .catch(this.handleError)
    }

    getAlbumDetails(albumid : string) : Observable<any>{
        return this.http.get(this.baseUrl + "track.php?m="+albumid)
        .map(this.extractData)
        .catch(this.handleError)
    }

    private extractData(res: Response | any) {
        let body = res.json();
        return body || { };
    }

    private handleError (error: Response | any) {    
        let errMsg: any;    
        let message : string
        if (error.json()) message = error.json().message;
        else message = "Server error";   
        errMsg = {status : error.status, message : message };
        return Observable.throw(errMsg);   
    }
}
