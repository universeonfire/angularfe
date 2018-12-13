import  { Injectable } from "@angular/core";
import  { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable, throwError } from 'rxjs';
import { map, catchError, timeout } from 'rxjs/operators';
import  { Proposal } from "./proposal";


@Injectable()

export class ProposalService{
	private proposalsUrl = "http://localhost:3001/proposals";

	constructor (
		private http: Http
	){}
	/* proposal list sayfası için oluşturulan fonksiyon */
	getProposals(): Observable<Proposal[]> {
		return this.http.get(this.proposalsUrl)
						.pipe(map((response: Response) => <Proposal[]>response.json()));

	}
    /* proposal show sayfası için oluştturulan fonksiyon */
	getProposal(id:number){
		return this.http.get(this.proposalsUrl + "/" + id + ".json");
	}
	/* proposal oluşturma */
	createProposal(proposal){
		let headers = new Headers({'Content-Type':'application/json'});
		let options = new RequestOptions({headers: headers});
		return this.http.post(this.proposalsUrl, JSON.stringify(proposal), {headers: headers})
						.pipe(map((res: Response) => res.json()));
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