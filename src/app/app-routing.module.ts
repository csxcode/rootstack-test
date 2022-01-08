import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './modules/auth/auth.routing';
import { JobRoutingModule } from './modules/job/job.routing';
import { NotFoundComponent } from '@shared/pages/not-found/not-found.component'

const routes: Routes = [
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    JobRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
