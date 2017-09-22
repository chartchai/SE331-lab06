import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {StudentsComponent} from './students/list/students.component';
import {StudentsAddComponent} from './students/add/students.add.component';
import {StudentsViewComponent} from './students/view/students.view.component';
import {FormsModule} from '@angular/forms';
import {StudentsDataService} from './service/students-data.service';
import {HttpModule} from '@angular/http';
import {MenuComponent} from './menu/menu.component';
import {FileNotFoundComponent} from './filenotfound/file-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {StudentRoutingModule} from './students/student-routing.module';
import {StudentsDataDBService} from './service/students-data-db.service';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {StudentsDataServerService} from './service/students-data-server.service';


@NgModule({
  declarations: [AppComponent,
    StudentsComponent,
    StudentsAddComponent,
    StudentsViewComponent,
    MenuComponent, FileNotFoundComponent],
  imports: [BrowserModule, FormsModule, HttpModule,
    StudentRoutingModule, AppRoutingModule],
  bootstrap: [AppComponent],
  providers: [{provide: StudentsDataService, useClass: StudentsDataServerService},
    {provide: LocationStrategy, useClass: HashLocationStrategy}],
})
export class AppModule {
}
