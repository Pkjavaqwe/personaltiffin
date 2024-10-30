import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Organization } from '../../models/organizations';

@Component({
  selector: 'app-organizationcard',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './organizationcard.component.html',
  styleUrl: './organizationcard.component.css'
})
export class OrganizationcardComponent {

@Input()
organization!:Organization
/*organization!:{org_name : string;
  org_location : [{
    loc: string;
    address: string;
    loc_contact: number;
    loc_email: string;
    admin_id: string;                                
}]; 
  org_created_at : Date;
  org_updated_at : Date;
  isActive: boolean;};
*/
}
