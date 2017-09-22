import {Component} from '@angular/core';
import {Student} from "../students/student";
import {StudentsDataService} from "../service/students-data.service";
import {Router} from "@angular/router";
@Component({
 selector: 'menu',
 templateUrl: 'app/menu/menu.component.html',
 styleUrls:['app/menu/menu.component.css']
})
export class MenuComponent {
  constructor(private studentDataService: StudentsDataService, private router: Router ) {
  }
  students:Student[];
  ngOnInit() {
    this.studentDataService.getStudentsData()
      .subscribe(students => this.students = students);
  }
  showDetail(student: Student){
    this.router.navigate(['/detail',student.id]);
  }
}
