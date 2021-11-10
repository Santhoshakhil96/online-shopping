import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {MatCarouselModule} from '@ngmodule/material-carousel';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';



import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { BackComponent } from './back/back.component';
import { ReportComponent } from './report/report.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CountPipe } from './count.pipe';
import { BuynowComponent } from './buynow/buynow.component';



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    LoginComponent,
    HomeComponent,
    CartComponent,
    ProductComponent,
    AdminpageComponent,
    DialogBoxComponent,
    FeedbackComponent,
    BackComponent,
    ReportComponent,
    ToolbarComponent,
    CountPipe,
    BuynowComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatDividerModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCarouselModule.forRoot(),
    MatIconModule,
    MatBadgeModule,
    MatTableModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule

    
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
