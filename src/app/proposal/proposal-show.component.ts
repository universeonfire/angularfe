import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Proposal } from './proposal';
/* OnInit , ActivatedRoute, Params importları kayıda ait id yi alıp adrese cevirmek için gerekli  */
@Component({
	moduleId: module.id,
	selector: 'proposal-show',
	templateUrl: 'proposal-show.component.html'

})
export class ProposalShowComponent implements OnInit {
	id: number;
	routeId: any;

	constructor(
		private route: ActivatedRoute
	){}
	/*  routeId gelen yol parametrelerini almak için id ise gelen parametrelerin içindeki id verisini saklamak için  */
	ngOnInit(): void{
		this.routeId = this.route.params.subscribe(
			params => {
				/* params ın basındaki + işareti gelen değeri sayı formatına çevirir */
				this.id = +params['id'];
			}
		)
	}
	 
}