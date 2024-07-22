import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component2Component } from './component2/component2.component';
import { Feature1ModuleModule } from '../feature1-module/feature1-module.module';



@NgModule({
  declarations: [
    Component2Component,
  ],
  imports: [
    CommonModule,
    Feature1ModuleModule  // here imported a module and now we can use all the components of that module in this module which are exported
  ],
  exports:[
    Component2Component
  ]
})
export class Feature2ModuleModule { }
