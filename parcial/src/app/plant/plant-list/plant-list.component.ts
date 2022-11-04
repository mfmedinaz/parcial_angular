import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css'],
})
export class PlantListComponent implements OnInit {
  plants: Array<Plant> = [];
  numberInt: number = 0;
  numberExt: number = 0;

  constructor(private plantService: PlantService) {}

  getPlants(): void {
    this.plantService.getPlants().subscribe((plants) => {
      this.plants = plants;
      this.countType();
    });
  }

  countType(): void {
    let numberIntF = 0;
    let numberExtF = 0;
    this.plants.forEach(function (value) {
      if (value.tipo === 'Interior') {
        numberIntF++;
      } else if (value.tipo === 'Exterior') {
        numberExtF++;
      }
    });

    this.numberInt = numberIntF;
    this.numberExt = numberExtF;
  }

  ngOnInit() {
    this.getPlants();
  }
}
