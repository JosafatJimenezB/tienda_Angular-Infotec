import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TiendaServiceService {

  articulosList = [
    { codigo: 1, descripcion: "papas", precio: 10.55, imagen: "https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750081000268L.jpg"},
    { codigo: 2, descripcion: "manzanas", precio: 12.10, imagen: "https://biotrendies.com/wp-content/uploads/2015/06/manzana.jpg" },
    { codigo: 3, descripcion: "melon", precio: 52.30, imagen: "https://www.gob.mx/cms/uploads/image/file/403046/mel_n_1.jpg" },
    { codigo: 4, descripcion: "cebollas", precio: 17, imagen: "https://t1.uc.ltmcdn.com/es/posts/7/7/3/como_sembrar_cebollas_20377_orig.jpg" },
    { codigo: 5, descripcion: "calabaza", precio: 20, imagen: "https://chedrauimx.vtexassets.com/arquivos/ids/9773249/2512599_00.jpg?v=638060317903070000" },
  ]

  articulos(){
    return this.articulosList;
  }
}
