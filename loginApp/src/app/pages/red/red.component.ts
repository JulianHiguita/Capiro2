import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "red",
  templateUrl: "./red.component.html",
  styleUrls: ["./red.component.css"],
})
export class RedComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  salir() {
    this.auth.logout();
    this.router.navigateByUrl("/login");
  }
}
