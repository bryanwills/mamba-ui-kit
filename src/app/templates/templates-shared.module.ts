import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TemplateFullscreenModalComponent} from './shared/template-fullscreen-modal/template-fullscreen-modal.component';
import {TemplateShowCodeComponent} from './shared/template-show-code/template-show-code.component';

@NgModule({
	imports: [CommonModule],
	declarations: [TemplateFullscreenModalComponent, TemplateShowCodeComponent],
	exports: [TemplateFullscreenModalComponent, TemplateShowCodeComponent],
})
export class TemplatesSharedModule {}
