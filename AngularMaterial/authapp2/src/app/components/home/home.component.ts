import { Component, OnInit } from '@angular/core';

export interface Datos {
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  datos: Datos[] = [
    {
      titulo: 'VAYL',
      descripcion: 'VALESKA',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
