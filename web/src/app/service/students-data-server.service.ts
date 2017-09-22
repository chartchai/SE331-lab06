import {Injectable} from '@angular/core';
import {Student} from '../students/student';
import {Http} from '@angular/http';
import {StudentsDataService} from './students-data.service';

@Injectable()
export class StudentsDataServerService {
  constructor(private http: Http) {

  }

  getStudentsData() {
    let studentArray: Student[];
    return this.http.get('http://localhost:8080/student')
      .map(res => res.json());
  }

  getStudent(id: number) {
    return null;
  }
}
