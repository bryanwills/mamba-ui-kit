import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';

import {CarouselShowcaseComponent} from './carousel-showcase.component';
import {Carousel1Component} from './carousel1/carousel1.component';

const routes: Routes = [
	{
		path: '',
		component: CarouselShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [CarouselShowcaseComponent, Carousel1Component],
})
export class CarouselModule {}
