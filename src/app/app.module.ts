import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableStudentsComponent } from './ui/table-students/table-students.component';
import { HeaderComponent } from './div/header/header.component';
import { MainComponent } from './div/main/main.component';
import { InfoComponent } from './div/info/info.component';
import { AddformStudentsComponent } from './ui/addform-students/addform-students.component';
import { EditformStudentsComponent } from './ui/editform-students/editform-students.component';
import { FilterStudentsComponent } from './ui/filter-students/filter-students.component';
import { FilterPipe } from './shared/pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableStudentsComponent,
    HeaderComponent,
    MainComponent,
    InfoComponent,
    AddformStudentsComponent,
    EditformStudentsComponent,
    FilterStudentsComponent,
    FilterPipe,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // NgbModule,
    // BrowserAnimationsModule,
    // MatProgressSpinnerModule,
    ReactiveFormsModule,
    TextMaskModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
