import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

export interface Transaction {
  codigo: string;
  variedad: string;
  disponibleIni: number;
  transitoIni: number;
  totalIni: number;
}

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css'],
})
export class RedComponent implements OnInit {
  displayedColumns: string[] = [
    'codigo',
    'variedad',
    'disponibleIni',
    'transitoIni',
    'totalIni',
  ];
  transactions: Transaction[] = [
    {
      codigo: 'VAYL',
      variedad: 'VALESKA',
      disponibleIni: 2500,
      transitoIni: 500,
      totalIni: 3000,
    },
    {
      codigo: 'BNWN',
      variedad: 'BONITA',
      disponibleIni: 30000,
      transitoIni: 5000,
      totalIni: 35000,
    },
    {
      codigo: 'SNTY',
      variedad: 'SANTINI',
      disponibleIni: 6200,
      transitoIni: 500,
      totalIni: 6700,
    },
    {
      codigo: 'VELO',
      variedad: 'VERINI',
      disponibleIni: 20000,
      transitoIni: 500,
      totalIni: 20500,
    },
    {
      codigo: 'PENI',
      variedad: 'PEKANI',
      disponibleIni: 8000,
      transitoIni: 3000,
      totalIni: 11000,
    },
    {
      codigo: 'TOL',
      variedad: 'TALELO',
      disponibleIni: 12000,
      transitoIni: 500,
      totalIni: 12500,
    },
    {
      codigo: 'ZAR',
      variedad: 'ZARITE',
      disponibleIni: 22000,
      transitoIni: 1000,
      totalIni: 23000,
    },
  ];

  // conteo: Conteo[] = [
  //   {
  //     codigo: 'VAYL',
  //     variedad: 'VALESKA',
  //     disponibleIni: 2500,
  //     transitoIni: 500,
  //     totalIni: 3000,
  //   },
  //   {
  //     codigo: 'BNWN',
  //     variedad: 'BONITA',
  //     disponibleIni: 30000,
  //     transitoIni: 5000,
  //     totalIni: 35000,
  //   },
  //   {
  //     codigo: 'SNTY',
  //     variedad: 'SANTINI',
  //     disponibleIni: 6200,
  //     transitoIni: 500,
  //     totalIni: 6700,
  //   },
  // ];

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
