import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProposalListComponent } from './proposal/proposal-list.component';
import { ProposalNewContent } from './proposal/proposal-new.component';
import { ProposalShowComponent } from './proposal/proposal-show.component';

const routes: Routes = [
	{path:'', redirectTo: '/home', pathMatch: 'full'},
	{path:'home',component: HomepageComponent},
	{path:'documents',component: DocumentsComponent},
	{path:'proposals',component: ProposalListComponent},
	{path:'proposals/new',component: ProposalNewContent},
	{path:'proposal/:id',component: ProposalShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
