import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ConsigneeComponent } from './pages/consignee/consignee.component';
import { ConsigneeFormComponent } from './component/consignee-form/consignee-form.component';
import { ConsigneeFilterComponent } from './component/consignee-filter/consignee-filter.component';
import { ConsigneeDeleteComponent } from './component/consignee-delete/consignee-delete.component';
import { EmptyComponent } from './pages/empty/empty.component';
import { BillingPartyComponent } from './pages/billing-party/billing-party.component';
import { ThemeChangeComponent } from './component/theme-change/theme-change.component';



@NgModule({
  declarations: [
    AppComponent,
    ConsigneeComponent,
    ConsigneeFormComponent,
    ConsigneeFilterComponent,
    ConsigneeDeleteComponent,
    EmptyComponent,
    BillingPartyComponent,
    
   
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule,
    HttpClientModule,
    LayoutModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
