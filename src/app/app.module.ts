import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContentsComponent } from './contents/contents.component';
import { ArticlesComponent } from './articles/articles.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { DownloadModalComponent } from './download-modal/download-modal.component';
import { HttpClientModule } from '@angular/common/http';

import { EileraContentComponent } from './component/eilera-content/eilera-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContentsComponent,
    ArticlesComponent,
    FaqComponent,
    FooterComponent,
    DownloadModalComponent,
    EileraContentComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
