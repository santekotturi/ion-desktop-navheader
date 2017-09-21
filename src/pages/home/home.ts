import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public app: App) {

  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    console.log('Root nav -> ', this.app.getRootNavs()[0].id)
    console.log('Root id -> ', this.app.getRootNavById('n4'))
    // this.appCtrl.getRootNav().push(page.component)
    // console.log('Active -> ', this.navCtrl.getActive().component.name)
    // if(this.navCtrl.getActive().component.name === page.title ) {
    //   console.log('not going anywhere')
    // } else this.app.getRootNav().push(page.component);
    
  }

}
