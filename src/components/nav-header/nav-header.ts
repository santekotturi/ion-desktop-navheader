import { App, NavController } from 'ionic-angular';
import { PagesProvider } from './../../providers/pages/pages';
import { Component, OnInit } from '@angular/core';

/**
 * Generated class for the NavHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'nav-header',
  templateUrl: 'nav-header.html'
})
export class NavHeaderComponent implements OnInit {

  currentTitle: string;
  pages: Array<{ title: string, component: any }>;

  constructor(
    public pagesProvider: PagesProvider,
    public app: App,
    public navCtrl: NavController
  ) {
    console.log('Hello NavHeaderComponent Component');
    this.pages = pagesProvider.getPages()
    console.log('Pages -> ', this.pages)

  }

  ngOnInit() {
    console.log('Current -> ', this.navCtrl.getActive())
    this.currentTitle = this.navCtrl.getActive().component.name
  }

  openPage(page) {
    console.log('request to open page -> ', page)
    console.log('Root nav -> ', this.app.getRootNavs()[0].id)
    console.log('Root id -> ', this.app.getRootNavById('n4'))
    
    // dont go anywhere if we click on the current page name
    if (this.navCtrl.getActive().component.name === page.component.name) {
      console.log('not going anywhere')
    } else this.app.getRootNav().push(page.component);

  }

}
