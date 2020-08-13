import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { UsuarioModel } from "src/app/models/usuario.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  recordarme = false;
  usuario: UsuarioModel = new UsuarioModel();
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}
  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.auth.login(this.usuario).subscribe(
      (resp) => {
        console.log(resp);
        if (this.recordarme) {
          localStorage.setItem("email", this.usuario.email);
        }
        this.router.navigateByUrl("/home");
      },
      (err) => {
        console.log(err.error.error.message);
        // Swal.fire({
        // type: 'error,'
        //   text: "Espere por favor...",
        // });
      }
    );
  }

  salir() {
    this.auth.logout();
    this.router.navigateByUrl("/login");
  }
}
