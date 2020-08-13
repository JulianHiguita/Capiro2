import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UsuarioModel } from "../../models/usuario.model";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
// import Swal from "sweetalert2";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  recordarme = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem("email")) {
      this.usuario.email = localStorage.getItem("email");
      this.recordarme = true;
    }
  }

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    // Swal.fire({
    //   allowOutsideClick: false,
    // type: 'info,'
    //   text: "Espere por favor...",
    // });
    // Swal.loading();

    // Swal.fire({
    //   allowOutsideClick: false,
    //   title: "Error!",
    //   text: "Do you want to continue",
    //   icon: "error",
    //   confirmButtonText: "Cool",
    // });

    this.auth.login(this.usuario).subscribe(
      (resp) => {
        console.log(resp);
        if (this.recordarme) {
          localStorage.setItem("email", this.usuario.email);
        }
        this.router.navigateByUrl("/cap/home");
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
}
