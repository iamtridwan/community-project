import { Component, OnInit } from '@angular/core';
import { Learner } from 'src/app/models/learner';
import { CoursesSevicesService } from 'src/app/core/courses-sevices.service';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'cp-learners',
  templateUrl: './learners.component.html',
  styleUrls: ['./learners.component.scss'],
})
export class LearnersComponent implements OnInit {
  formValid = false;

  userSetting: Learner = {
    name: '',
    email: '',
    url: '',
  };
  constructor(private router: Router, private courseService: CoursesSevicesService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.formValid = !this.formValid;
      this.courseService.addLearner(this.userSetting)
      this.router.navigate(['/welcome']);
    }
  }
}
