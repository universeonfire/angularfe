import  { Injectable } from "@angular/core";
import  { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable, throwError } from 'rxjs';
import { map, catchError, timeout } from 'rxjs/operators';
import  { Document } from "./document";


@Injectable()

export class DocumentService{
	private documentsUrl = "http://localhost:3000/freelance_documents";

	constructor (
		private http: Http
	){}

	getDocuments(): Observable<Document[]> {
		return this.http.get(this.documentsUrl)
						.pipe(map((response: Response) => <Document[]>response.json()));

	}

	private handleError (error: Response | any) {
		let errMsg: string;
		if(error instanceof Response){
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}’ `;  
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		console.error(errMsg);
		return Observable.throw(errMsg);
	}
}
