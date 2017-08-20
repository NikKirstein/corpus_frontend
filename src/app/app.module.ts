import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { TextComponent } from './text.component';
import { RestAPI } from './restAPI.service';
import { SearchComponent } from './search.component';
import { NotFoundComponent } from './notFound.component';

const appRoutes: Routes = [
  { path: 'text/:id', component: TextComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'search/:string',
    component: SearchComponent,
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'searching',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TextComponent,
    SearchComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [RestAPI],
  bootstrap: [AppComponent]
})
export class AppModule { }
