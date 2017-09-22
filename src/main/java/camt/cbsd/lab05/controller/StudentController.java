package camt.cbsd.lab05.controller;

import camt.cbsd.lab05.entity.Student;
import camt.cbsd.lab05.service.StudentService;
import camt.cbsd.lab05.service.StudentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController("/student")
public class StudentController {
    StudentService studentService;
    @Autowired
    public void setStudentService(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    public ResponseEntity<?> getStudents() {

        List<Student> students = studentService.getStudents();
        return ResponseEntity.ok(students);
    }

}
