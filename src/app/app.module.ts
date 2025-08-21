import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { LayoutModule } from './layout/layout.module';
import { ConsigneeComponent } from './pages/consignee/consignee.component';


@NgModule({
  declarations: [
    AppComponent,
    ConsigneeComponent,
   
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule,
    HttpClientModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
