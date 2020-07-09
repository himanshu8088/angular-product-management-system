// BrowserModule is used to load and render Angular Components and
// it dependencies in Browser
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductFormComponent} from './productformcomponent/app.productform.component';
import { ProductReactiveFormComponent } from './productreactiveformcomponent/app.productreactiveform.component';

@NgModule({
  declarations: [
    AppComponent, ProductFormComponent, ProductReactiveFormComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ProductReactiveFormComponent]
})
export class AppModule { }
