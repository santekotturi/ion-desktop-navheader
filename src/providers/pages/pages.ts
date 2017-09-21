import { LandingPage } from './../../pages/landing/landing';
import { HomePage } from './../../pages/home/home';
import { Injectable } from '@angular/core';

/*
  Generated class for the PagesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PagesProvider {

  pages: Array<{ title: string, component: any }>;

  constructor() {
    console.log('Hello PagesProvider Provider');

    this.pages = [
      {
        title: 'Landing', component: LandingPage
      },
      {
        title: 'Home', component: HomePage
      }
    ]
  }

  getPages() {
    return this.pages
  }

}
