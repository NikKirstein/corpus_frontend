import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './main/app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { TextComponent } from './text/text.component';
import { RestAPI } from './restAPI.service';
import { SearchComponent } from './search/search.component';
import { NotFoundComponent } from './404/notFound.component';
import { TagCloudModule } from 'angular-tag-cloud-module'

const appRoutes: Routes = [
  { path: 'text/:id', component: TextComponent },
  { path: 'home', component: HomeComponent },
  { path: 'repository', component: PageComponent },
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
    PageComponent,
    TextComponent,
    SearchComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    TagCloudModule
  ],
  providers: [RestAPI],
  bootstrap: [AppComponent]
})
export class AppModule { }
