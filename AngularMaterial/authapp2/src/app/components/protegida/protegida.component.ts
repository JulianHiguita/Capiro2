import {
  Component,
  OnInit,
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
} from '@angular/core';
import { AuthService } from '../../services/auth.service';

export interface Transaction {
  codigo: string;
  variedad: string;
  disponibleIni: number;
  transitoIni: number;
  totalIni: number;
  numCon: number;

  // ingresos: number;
  // reingresos: number;
  // saldos: number;
  // totalAju: number;
  // disponibleFin: number;
  // transitoFin: number;
  // totalFin: number;
}

export interface Conteos {
  codigo: string;
  variedad: string;
  disponibleCon: number;
  transitoCon: number;
  sincronizadosCon: number;
  despachadosCon: number;
  totalCon: number;
}

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styleUrls: ['./protegida.component.css'],
})
export class ProtegidaComponent implements OnInit {
  displayedColumns: string[] = [
    'codigo',
    'variedad',
    'disponibleIni',
    'transitoIni',
    'totalIni',
    'numCon',
  ];
  transactions: Transaction[] = [
    {
      codigo: 'VAYL',
      variedad: 'VALESKA',
      disponibleIni: 2500,
      transitoIni: 500,
      totalIni: 3000,
      numCon: 2,
    },
    {
      codigo: 'BNWN',
      variedad: 'BONITA',
      disponibleIni: 30000,
      transitoIni: 5000,
      totalIni: 35000,
      numCon: 1,
    },
    {
      codigo: 'SNTY',
      variedad: 'SANTINI',
      disponibleIni: 6200,
      transitoIni: 500,
      totalIni: 6700,
      numCon: 2,
    },
    {
      codigo: 'VELO',
      variedad: 'VERINI',
      disponibleIni: 20000,
      transitoIni: 500,
      totalIni: 20500,
      numCon: 2,
    },
    {
      codigo: 'PENI',
      variedad: 'PEKANI',
      disponibleIni: 8000,
      transitoIni: 3000,
      totalIni: 11000,
      numCon: 1,
    },
    {
      codigo: 'TOL',
      variedad: 'TALELO',
      disponibleIni: 12000,
      transitoIni: 500,
      totalIni: 12500,
      numCon: 2,
    },
    {
      codigo: 'ZAR',
      variedad: 'ZARITE',
      disponibleIni: 22000,
      transitoIni: 1000,
      totalIni: 23000,
      numCon: 1,
    },
  ];

  conteo: Conteos[] = [
    {
      codigo: 'VAYL',
      variedad: 'VALESKA',
      disponibleCon: 2500,
      transitoCon: 500,
      sincronizadosCon: 3000,
      despachadosCon: 3000,
      totalCon: 3000,
    },
    {
      codigo: 'BNWN',
      variedad: 'BONITA',
      disponibleCon: 2500,
      transitoCon: 500,
      sincronizadosCon: 3000,
      despachadosCon: 3000,
      totalCon: 3000,
    },
    {
      codigo: 'SNTY',
      variedad: 'SANTINI',
      disponibleCon: 2500,
      transitoCon: 500,
      sincronizadosCon: 3000,
      despachadosCon: 3000,
      totalCon: 3000,
    },
    {
      codigo: 'VAEZ',
      variedad: 'VAEZNI',
      disponibleCon: 2500,
      transitoCon: 5000,
      sincronizadosCon: 3000,
      despachadosCon: 3000,
      totalCon: 13500,
    },
    {
      codigo: 'LATO',
      variedad: 'LATODE',
      disponibleCon: 2500,
      transitoCon: 8000,
      sincronizadosCon: 3000,
      despachadosCon: 3000,
      totalCon: 16500,
    },
    {
      codigo: 'PETI',
      variedad: 'PETINL',
      disponibleCon: 2500,
      transitoCon: 500,
      sincronizadosCon: 6000,
      despachadosCon: 3000,
      totalCon: 12000,
    },
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions
      .map((t) => t.totalIni)
      .reduce((acc, value) => acc + value, 0);
  }

  getTotalDis() {
    return this.transactions
      .map((t) => t.disponibleIni)
      .reduce((acc, value) => acc + value, 0);
  }

  getTotalTran() {
    return this.transactions
      .map((t) => t.transitoIni)
      .reduce((acc, value) => acc + value, 0);
  }
  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.userProfile$.subscribe((perfil) => {});
  }
}
