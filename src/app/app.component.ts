import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  art = {
    codigo: 0,
    descripcion: "",
    precio: 0,
    imagen: ""
  }

  articulos = [
    { codigo: 1, descripcion: "papas", precio: 10.55, imagen: "https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750081000268L.jpg"},
    { codigo: 2, descripcion: "manzanas", precio: 12.10, imagen: "https://biotrendies.com/wp-content/uploads/2015/06/manzana.jpg" },
    { codigo: 3, descripcion: "melon", precio: 52.30, imagen: "https://www.gob.mx/cms/uploads/image/file/403046/mel_n_1.jpg" },
    { codigo: 4, descripcion: "cebollas", precio: 17, imagen: "https://t1.uc.ltmcdn.com/es/posts/7/7/3/como_sembrar_cebollas_20377_orig.jpg" },
    { codigo: 5, descripcion: "calabaza", precio: 20, imagen: "https://chedrauimx.vtexassets.com/arquivos/ids/9773249/2512599_00.jpg?v=638060317903070000" },
  ];

  hayRegistros(){
    return this.articulos.length;
  }

  borrar(codigo:number){
    for(let i = 0; i < this.articulos.length; i++){
      if(this.articulos[i].codigo == codigo){
        this.articulos.splice(i,1);
        return;
      }
    }
  }

  agregar(){
    if(this.art.codigo == 0){
      alert("Debe ingresar un codigo de articulo distinto a cero");
      return;
    }

    for(let i = 0; i < this.articulos.length; i++){
      if(this.articulos[i].codigo == this.art.codigo){
        alert("El codigo de articulo ya existe");
        return;
      }
    }

    this.articulos.push({codigo:this.art.codigo,
                         descripcion:this.art.descripcion,
                         precio:this.art.precio,
                         imagen: this.art.imagen});

    this.art.codigo = 0;
    this.art.descripcion = "";
    this.art.precio = 0;
    this.art.imagen = "";

  }




  seleccionar(art: { codigo: number; descripcion: string; precio: number; imagen: string;}){
    this.art.codigo = art.codigo;
    this.art.descripcion = art.descripcion;
    this.art.precio = art.precio;
    this.art.imagen = art.imagen;
  }


  modificar(){
    for(let i = 0; i < this.articulos.length; i++){
      if(this.articulos[i].codigo == this.art.codigo){
        this.articulos[i].descripcion = this.art.descripcion;
        this.articulos[i].precio = this.art.precio;
        this.articulos[i].imagen = this.art.imagen;
        return;
      }
    }
    alert("No existe el articulo");
  }

}
