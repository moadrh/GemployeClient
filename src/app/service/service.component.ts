import { Component, OnInit, Injectable } from '@angular/core';
import { ServiceService } from './service.service';
import { Observable } from 'rxjs';
import { Service } from '../shared/service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})

@Injectable()
export class ServiceComponent implements OnInit {

  selectedService : Service;
  services : Service[];
  constructor(private serviceService :ServiceService) { }

  ngOnInit() {
    this.initService();
    this.getService();
  }

  getService() {
    this.serviceService.getServicesList().subscribe(
      data => {this.services = data},
    );
  }

  addService() {
    this.serviceService.createService(this.selectedService).subscribe(
      res => {
        this.initService();
        this.getService();
      }
    );
  }

  deleteService(id : number){
    this.serviceService.deleteService(id).subscribe(
      res => {
        this.initService();
        this.getService();
      }
    );
  }

  updateServiceForm() {
    
  }


  initService(){
    this.selectedService = new Service();
  }
  

}
