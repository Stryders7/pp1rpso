import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Vehiculos {
  modelo: string,
  patente : string,
  annio:number
}


@Component({
  selector: 'app-listar-autos',
  templateUrl: './listar-autos.page.html',
  styleUrls: ['./listar-autos.page.scss'],
})
export class ListarAutosPage implements OnInit {

  vehiculos : Vehiculos[] = [
    {
      modelo: 'Juan',
      patente: 'PIPI-12',
      annio: 2009
    },
    {
      modelo: 'Pedro',
      patente: 'CK-7381',
      annio: 1981
    },
    {
      modelo: 'Diego',
      patente: 'CVRF-56',
      annio: 2003
    },
  ]

  constructor(private router:Router) { }

  ngOnInit() {
  }

  crearVehiculo(){
    this.router.navigate(['/crear-vehiculo'])
  }

}
