import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SharedModule} from '@shared/shared.module';
import {TemplateModalService} from './shared/template-fullscreen-modal/template-modal.service';
import {Template1Component} from './template1/template1.component';
import {TemplatesSharedModule} from './templates-shared.module';
import {TemplatesComponent} from './templates.component';

const routes: Routes = [
	{
		path: '',
		component: TemplatesComponent,
		/* children: [
			{
				path: 'portfolio',
				loadChildren: () =>
					import('./portfolio/portfolio.module').then(m => m.PortfolioModule),
				data: {title: 'Portfolio', breadcrumb: 'Portfolio'},
			},
		], */
	},
	{
		path: '1',
		component: Template1Component,
	},

	/* {
		path: 'blog',
		loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),
	}, */
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule, TemplatesSharedModule],
	declarations: [TemplatesComponent, Template1Component],
	providers: [TemplateModalService],
})
export class TemplatesModule {}
