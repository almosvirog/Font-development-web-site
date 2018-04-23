import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BookComponent } from './book/book.component';
import { AboutComponent } from './about/about.component';
import { MaterialModule } from './/material.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PageViewComponent } from './page-view/page-view.component';
import { BookContentComponent } from './book-content/book-content.component';
import { DataProviderService } from './data-provider.service';
import { HtmlIncluderComponent } from './html-includer/html-includer.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AboutComponent,
    PageViewComponent, 
    BookContentComponent,
    HtmlIncluderComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    DataProviderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
