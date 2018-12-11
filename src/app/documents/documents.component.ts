import { Component, OnInit } from '@angular/core';
import { Observable, throwError, timer } from 'rxjs';
import { map, catchError, timeInterval } from 'rxjs/operators';
import { Document } from './document';
import { DocumentService } from './document.service';


@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html',
	styleUrls: ['./documents.component.scss'],
	providers: [DocumentService],
})

export class DocumentsComponent implements OnInit{
	pageTitle: string = "Document Dashboard";
	documents: Document[];
	errorMessage: string;
	mode = "Observable";

	constructor(
		private documentService: DocumentService
	){}

	ngOnInit(){

		let timerx = timer(0,5000);
		timerx.subscribe(() => this.getDocuments());
	}


	getDocuments(){
		this.documentService.getDocuments()
			.subscribe(
				documents => this.documents = documents,
				error => this.errorMessage = <any>error
			);
	}		
}