import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html'
})

export class DocumentsComponent {
	pageTitle: string = "Document Dashboard"
	documents: Document[] = [
		{
			title: "my first doc",
			description: "desc",
			file_url: "http://google.com",
			updated_at: "06/11/18",
			image_url: "http://google.com"
		},
		{
			title: "my second doc",
			description: "desc",
			file_url: "http://google.com",
			updated_at: "06/11/18",
			image_url: "http://google.com"
		},
		{
			title: "my third doc",
			description: "desc",
			file_url: "http://google.com",
			updated_at: "06/11/18",
			image_url: "http://google.com"
		},
	]
}