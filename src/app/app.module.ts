import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Sec1Component } from './sections/sec1/sec1.component';
import { Sec2Component } from './sections/sec2/sec2.component';
import { Sec3Component } from './sections/sec3/sec3.component';
import { Sec4Component } from './sections/sec4/sec4.component';
import { Sec5Component } from './sections/sec5/sec5.component';
import { Sec6Component } from './sections/sec6/sec6.component';
@NgModule({
  declarations: [
    AppComponent,
    Sec1Component,
    Sec2Component,
    Sec3Component,
    Sec4Component,
    Sec5Component,
    Sec6Component,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
   
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
