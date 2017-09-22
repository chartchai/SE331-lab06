import {Component} from '@angular/core';
import {Student} from '../student';
import {Router} from "@angular/router";
import {StudentsDataService} from "../../service/students-data.service";

@Component({
 selector: 'students-add',
 templateUrl: 'app/students/add/students.add.component.html',
 styleUrls:['app/students/add/students.add.component.css']
})
export class StudentsAddComponent {
	student: any= {};
  constructor (private studentDataService:StudentsDataService, private router: Router){};

  ngOnInit(){
    this.student = new Student();
  }

	upQuantity(student:Student){
		student.penAmount++;
	}

	downQuantity(student:Student){
		if (student.penAmount >0)
			student.penAmount--;
	}

	addStudent(student:Student){
	  console.log(student)
    this.studentDataService.addStudent(student);
	  alert("Add complete");
    this.router.navigate(['/list']);
  }

  onFileChange(event,student:any){
    var filename= event.target.files[0].name;
    console.log(filename);
    student.image=filename;
  }
}
