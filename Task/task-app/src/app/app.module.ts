import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { TaskComponent } from './task/task.component';
import { IndividualTaskCardComponent } from './individual-task-card/individual-task-card.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SingleTaskComponent } from './single-task/single-task.component';



@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    TaskComponent,
    IndividualTaskCardComponent,
    SingleTaskComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
function bootstrapApplication(PhotoAppComponent: any) {
  throw new Error('Function not implemented.');
}

function provideAnimations() {
  throw new Error('Function not implemented.');
}

function provideHttpClient() {
  throw new Error('Function not implemented.');
}

function importProvidersFrom(MatNativeDateModule: any) {
  throw new Error('Function not implemented.');
}

