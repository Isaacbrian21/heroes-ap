import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  ToolbarComponent
]


@NgModule({
  declarations: [COMPONENTS
  ],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule
  ],
  exports: [MaterialModule, COMPONENTS]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has a already been loaded. Import this module in the AppModule')
    }
  }
}
