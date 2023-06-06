import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrameComponent } from './frame/frame.component';
import { MainCategoryComponent } from './main-category/main-category.component';
import { PluralizePipe } from './pluralize.pipe';

@NgModule({
  declarations: [AppComponent, FrameComponent, MainCategoryComponent, PluralizePipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
