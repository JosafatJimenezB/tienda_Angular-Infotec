import { Component, OnInit } from '@angular/core';
import { TiendaServiceService } from '../tienda-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

  articulos: any;

  constructor(private tiendaService: TiendaServiceService) { }

  ngOnInit() {
    this.articulos = this.tiendaService.articulos();
  }

  hayRegistros(){
    return this.articulos.length;
  }

  borrar(codigo:number){
    return this.tiendaService.borrar(codigo);
  }

  agregar(){
    if(this.articulos.codigo == 0){
      alert("Debe ingresar un codigo de articulo distinto a cero");
      return;
    }

    for(let i = 0; i < this.articulos.length; i++){
      if(this.articulos[i].codigo == this.articulos.codigo){
        alert("El codigo de articulo ya existe");
        return;
      }
    }

    this.articulos.push({codigo:this.articulos.codigo,
                         descripcion:this.articulos.descripcion,
                         precio:this.articulos.precio,
                         imagen: this.articulos.imagen});

    this.articulos.codigo = 0;
    this.articulos.descripcion = "";
    this.articulos.precio = 0;
    this.articulos.imagen = "";

  }




  seleccionar(art: { codigo: number; descripcion: string; precio: number; imagen: string;}){
    this.articulos.codigo = art.codigo;
    this.articulos.descripcion = art.descripcion;
    this.articulos.precio = art.precio;
    this.articulos.imagen = art.imagen;
  }


  modificar(){
    for(let i = 0; i < this.articulos.length; i++){
      if(this.articulos[i].codigo == this.articulos.codigo){
        this.articulos[i].descripcion = this.articulos.descripcion;
        this.articulos[i].precio = this.articulos.precio;
        this.articulos[i].imagen = this.articulos.imagen;
        return;
      }
    }
    alert("No existe el articulo");
  }

}
