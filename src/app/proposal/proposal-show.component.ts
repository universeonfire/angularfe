import { Component , OnInit , Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable, Subject } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { ProposalService } from './proposal.service';
import { Proposal } from './proposal';
/* OnInit , ActivatedRoute, Params importları kayıda ait id yi alıp adrese cevirmek için gerekli  */
@Component({
	moduleId: module.id,
	selector: 'proposal-show',
	templateUrl: 'proposal-show.component.html',
	providers: [ProposalService],

})
export class ProposalShowComponent implements OnInit {
	 
	constructor(
		private route: ActivatedRoute,
		private proposalService: ProposalService,
		private http: Http,
	){}
	@Input()
	proposal: Proposal;
	 
	ngOnInit(): void{
		let proposalRequest = this.route.params
			.pipe(flatMap((params: Params) => 
				this.proposalService.getProposal(+params['id'])));
			
		proposalRequest.subscribe(response => this.proposal = response.json());
	}
	 
}