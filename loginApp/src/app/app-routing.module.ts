import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { RegistroComponent } from "./pages/registro/registro.component";
import { LoginComponent } from "./pages/login/login.component";
import { AuthGuard } from "./guards/auth.guard";
import { ReportePreliminarComponent } from "./reporte-preliminar/ReportePreliminarComponent";
import { ConteoConsolidadosComponent } from "./pages/conteo-consolidados/conteo-consolidados.component";
import { RedComponent } from "./pages/red/red.component";
import { CapComponent } from "./pages/cap/cap.component";

const routes: Routes = [
  { path: "registro", component: RegistroComponent },
  { path: "login", component: LoginComponent },
  { path: "reporte-preliminar", component: ReportePreliminarComponent },

  {
    path: "cap",
    component: CapComponent,
    children: [
      { path: "conteo-consolidados", component: ConteoConsolidadosComponent },
      { path: "red", component: RedComponent },
      { path: "home", component: HomeComponent },
    ],
  },
  { path: "**", redirectTo: "login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
