import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { DemoService } from './demo.service';



@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DemoComponent 
  ],
  providers: [DemoService]

})
export class DemoModule { }
