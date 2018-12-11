import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html',
	styleUrls: ['./documents.component.scss']
})

export class DocumentsComponent {
	pageTitle: string = "Document Dashboard"
	documents: Document[] = [
		{
			title: "my first doc",
			description: "desc",
			file_url: "http://google.com",
			updated_at: "06/11/18",
			image_url: "https://lava.attendantdesign.com/wp-content/uploads/2018/04/4205600ld-4.jpg"
		},
		{
			title: "my second doc",
			description: "desc",
			file_url: "http://google.com",
			updated_at: "06/11/18",
			image_url: "https://lava.attendantdesign.com/wp-content/uploads/2018/04/4205600ld-4.jpg"
		},
		{
			title: "my third doc",
			description: "desc",
			file_url: "http://google.com",
			updated_at: "06/11/18",
			image_url: "https://lava.attendantdesign.com/wp-content/uploads/2018/04/4205600ld-4.jpg"
		},
	]
}