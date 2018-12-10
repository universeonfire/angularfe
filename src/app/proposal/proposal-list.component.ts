import { Component } from '@angular/core';
import { Proposal } from './proposal'; 

@Component({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent {
	proposalOne: Proposal = new Proposal(15,"abc comp","http://google.com","RoR",150,120,15,"http://google.com")
	proposalTwo: Proposal = new Proposal(99,"xyz comp","http://google.com","RoR",150,120,15,"http://google.com")
	proposalThree: Proposal = new Proposal(300,"jkl comp","http://google.com","RoR",150,120,15,"http://google.com")

	proposals: Proposal[] = [this.proposalOne, this.proposalTwo, this.proposalThree]
}
