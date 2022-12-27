import { Component, OnInit } from '@angular/core';
import { TiendaServiceService } from '../tienda-service.service';

@Component({
  selector: 'app-view-store',
  templateUrl: './view-store.component.html',
  styleUrls: ['./view-store.component.css']
})
export class ViewStoreComponent implements OnInit{

  articulos: any;

  constructor(private tiendaService: TiendaServiceService) { }

  ngOnInit() {
    this.articulos = this.tiendaService.articulos();
  }

}
