import {Component} from '@angular/core';
import {Student} from '../student';
import {ActivatedRoute, Params} from "@angular/router";
import {StudentsDataService} from "../../service/students-data.service";
import 'rxjs/add/operator/switchMap';
@Component({
 selector: 'students-view',
 templateUrl: 'app/students/view/students.view.component.html',
 styleUrls:['app/students/view/students.view.component.css']
})
export class StudentsViewComponent {
  constructor(private route: ActivatedRoute, private studentDataService:StudentsDataService) {}
   student:Student;
   ngOnInit() {
      this.route.params
        .switchMap((params:Params) => this.studentDataService.getStudent(+params['id']))
        .subscribe((student:Student) => this.student = student);

  }
}
