import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ShowDogsComponent } from './components/show-dogs/show-dogs.component';
import { AboutComponent } from './components/about/about.component';
import { AppRoutingModule} from './app.routing.module'

@NgModule({
  declarations: [
    AppComponent,
    ShowDogsComponent,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
