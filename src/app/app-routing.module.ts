import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { SmileyComponent } from './smiley/smiley.component';
import { CommentComponent } from './comment/comment.component';
import { ThanksComponent } from './thanks/thanks.component';


const routes: Routes = [
  {path:'',component:StartComponent},
  {path:'smiley',component:SmileyComponent},
  {path:'smiley/comment',component:CommentComponent},
  {path:'thanks',component:ThanksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
