import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantComponent } from './plant.component';
import { PlantListComponent } from './plant-list/plant-list.component';

@NgModule({
  imports: [CommonModule],
  exports: [PlantListComponent],
  declarations: [PlantListComponent],
})
export class PlantModule {}
