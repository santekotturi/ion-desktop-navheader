import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { NavHeaderComponent } from './nav-header/nav-header';

@NgModule({
	declarations: [NavHeaderComponent],
	imports: [
		IonicModule.forRoot(NavHeaderComponent)
	],
	exports: [NavHeaderComponent]
})
export class ComponentsModule { }
