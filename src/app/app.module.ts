import { CdkAccordionModule } from '@angular/cdk/accordion';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { DisqusModule } from "ngx-disqus";
import { MarkdownModule } from 'ngx-markdown';
import { AppComponent } from './app.component';
import { ArticleNavComponent } from './components/article-nav/article-nav.component';
import { ArticleViewComponent } from './components/article-view/article-view.component';
import { HomeComponent } from './components/home/home.component';
import { ListFolderComponent } from './components/list-folder/list-folder.component';
import { ListTagsComponent } from './components/list-tags/list-tags.component';
import { MainComponent } from './components/main/main.component';
import { NavListComponent } from './components/nav-list/nav-list.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { Main2Component } from './components/main2/main2.component';
import { NavBar2Component } from './components/nav-bar2/nav-bar2.component';
import { TitleBar2Component } from './components/title-bar2/title-bar2.component';
import { ExtraBar2Component } from './components/extra-bar2/extra-bar2.component';
import { ArticleView2Component } from './components/article-view2/article-view2.component';
import { ArticleCard2Component } from './components/article-card2/article-card2.component';
import { ArticleIndex2Component } from './components/article-index2/article-index2.component';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    matcher: ArticleViewComponent.routeMatcher,
    component: ArticleViewComponent,
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TitleBarComponent,
    NavListComponent,
    ArticleViewComponent,
    HomeComponent,
    ArticleNavComponent,
    ListTagsComponent,
    ListFolderComponent,
    Main2Component,
    NavBar2Component,
    TitleBar2Component,
    ExtraBar2Component,
    ArticleView2Component,
    ArticleCard2Component,
    ArticleIndex2Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    DisqusModule.forRoot('adalbero-kb'),

    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatTabsModule,

    CdkAccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
