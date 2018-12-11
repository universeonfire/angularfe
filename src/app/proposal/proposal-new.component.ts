import {Component} from '@angular/core';
import {Proposal} from './proposal';


@Component({
	moduleId: module.id,
	selector: "proposal/new",
	templateUrl: "proposal-new.component.html",
	styleUrls: ['./proposal.component.scss']
})

export class ProposalNewContent {
	proposal = new Proposal;
	 
}