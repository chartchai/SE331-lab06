import {Injectable} from '@angular/core';
import {Student} from '../students/student';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {Subscriber} from "rxjs/Subscriber";

@Injectable()
export class StudentsDataDBService {

  students:Student[] = [
    {
      "id": 1,
      "studentId":"SE-001",
      "name":"Prayuth",
      "surname":"The minister",
      "gpa":3.59,
      "image":"images/tu.jpg",
      "featured":false,
      "penAmount":15,
      "description":"The great man ever!!!!"
    },
    {
      "id": 2,
      "studentId":"SE-002",
      "name":"Jurgen",
      "surname":"Kloop",
      "gpa":2.15,
      "image":"images/Kloop.gif",
      "featured":true,
      "penAmount":2,
      "description":"The man for the Kop"
    },
    {
      "id": 3,
      "studentId":"SE-003",
      "name":"Mitsuha",
      "surname":"Miyamizu",
      "gpa":2.15,
      "image":"images/mitsuha.gif",
      "featured":true,
      "penAmount":0,
      "description" : "The most beloved one"
    }
  ];



  getStudentsData(){
    return new Observable<Student[]>((subscriber:Subscriber<Student[]>)=>subscriber.next(this.students));
  }

  getStudent(id:number){
    let student = this.students.find(student=> student.id === +id);
    return new Observable<Student>((subscriber:Subscriber<Student>)=>subscriber.next(student));
  }

  addStudent(student:Student){
    console.log(student);
    student.id = this.students.length+1;
    this.students.push(student);
    console.log(this.students);
  }
}
