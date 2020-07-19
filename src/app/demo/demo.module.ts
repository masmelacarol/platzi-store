import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DemoComponent } from './components/demo/demo.component';
import { DemoRoutingModule } from './demo.routing.module';

@NgModule({
  declarations: [DemoComponent],
  imports: [CommonModule, DemoRoutingModule, FormsModule],
})
export class DemoModule {}
