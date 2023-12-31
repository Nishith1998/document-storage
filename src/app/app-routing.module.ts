import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './interceoptors/auth.guard';
import { UploadDocumentComponent } from './components/upload-document/upload-document.component';
import { DocumentDetailsComponent } from './components/document-details/document-details.component';
import { DocumentDetailsResolver } from './resolvers/document-details.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'upload-document', component: UploadDocumentComponent, canActivate: [AuthGuard] },
  { path: 'document-details/:id', component: DocumentDetailsComponent, canActivate: [AuthGuard], resolve: {documentDetails: DocumentDetailsResolver} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
