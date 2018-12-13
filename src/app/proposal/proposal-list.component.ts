import { Component,OnInit } from '@angular/core';
import { Observable, throwError, timer } from 'rxjs';
import { map, catchError, timeInterval } from 'rxjs/operators';
import { Proposal } from './proposal'; 
import { ProposalService } from './proposal.service';

@Component({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html',
	providers: [ProposalService],
})

export class ProposalListComponent implements OnInit {
	pageTitle: string = "Proposal Dashboard";
	proposals: Proposal[];
	errorMessage: string;
	mode = "Observable";

	constructor(
		private ProposalService: ProposalService
	){}

	ngOnInit(){

		let timerx = timer(0,5000);
		timerx.subscribe(() => this.getProposals());
	}


	getProposals(){
		this.ProposalService.getProposals()
			.subscribe(
				proposals => this.proposals = proposals,
				error => this.errorMessage = <any>error
			);
	}		

	
}

 
