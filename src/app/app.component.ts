import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SuperAdminLoginComponent } from "./components/super-admin-login/super-admin-login.component";
import { OrganizationcardComponent } from "./components/organizationcard/organizationcard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SuperAdminLoginComponent, OrganizationcardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tiffin_Management_System';
}
