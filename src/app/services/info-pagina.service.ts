import { HttpClient } from '@angular/common/http'; // con este servicio yo puedo realizar peticiones a cualquier servidor REST, externos, a cualquier lado
import { Injectable } from '@angular/core';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor(private http: HttpClient) { 
    // console.log('Servicio de infoPagina listo');

    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: infoPagina) => {
        
        this.cargada = true;
        this.info = resp;
      });
  }

  private cargarEquipo() {
    this.http.get('https://angular-html-af5f0-default-rtdb.firebaseio.com/equipo.json')
      .subscribe ( (resp: any[]) => {
        
        this.equipo = resp;
      })
  }

}
