import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { TextComponent } from './text.component';
import { RESTAPIText } from './rest-api-text.service';
import { SearchComponent } from './search.component';
import { PageNotFoundComponent } from './pagenotfound.component';

const appRoutes: Routes = [
  { path: 'text/:id', component: TextComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'search',
    component: SearchComponent,
    data: { title: 'Search Corpus' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'searching',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TextComponent,
    SearchComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [RESTAPIText],
  bootstrap: [AppComponent]
})
export class AppModule { }
