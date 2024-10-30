import { Component } from '@angular/core';
import { Organization } from '../../models/organizations';
import { OrganizationserviceService } from '../../services/organizationservice.service';
import { OrganizationcardComponent } from "../organizationcard/organizationcard.component";

@Component({
  selector: 'app-superadmin',
  standalone: true,
  imports: [OrganizationcardComponent],
  templateUrl: './superadmin.component.html',
  styleUrl: './superadmin.component.css'
})
export class SuperadminComponent {

  organization:Organization={
    org_name: '',
    org_location: [ {
      loc: 'Head Office',
      address: '123 Main St, City, Country',
      loc_contact: 1234567890,
      loc_email: 'contact@example.com',
      admin_id: 'admin123'
    }],
    org_created_at: new Date(),
    org_updated_at: new Date(),
    isActive: false
  }
  organizationsArray:Organization[]=[]
  constructor(private organizationService:OrganizationserviceService){}
   ngOnInit():void{
      this.getAllOrganizations()
   }

   getAllOrganizations(){
    const organizationObservable = this.organizationService.getAllOrganizationsApi()
    organizationObservable.subscribe({
      next:(orgData)=>{
         this.organizationsArray=orgData
      },  
      error:(err)=>{console.log(err);
      }
    })
   }
}
