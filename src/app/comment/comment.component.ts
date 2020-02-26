import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm, FormsModule } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router)
  {
    this.angForm=this.fb.group({});
  }
  postdata(angForm1)
  {
    this.dataService.feed(angForm1.value.comment,angForm1.value.email)
    .pipe(first())
    .subscribe(
      data => {
      this.router.navigate(['thanks']);
      },

      error => {
      });
  }
  ngOnInit() {
  }

}
