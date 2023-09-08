import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.page.html',
  styleUrls: ['./crear-vehiculo.page.scss'],
})
export class CrearVehiculoPage implements OnInit {

  formularioCrearVehiculo:FormGroup;

  constructor(private fb:FormBuilder, private router:Router) { 
    this.formularioCrearVehiculo = this.fb.group(
      {
        modelo: [''],
        patente: [''],
        annio: ['']

      }
    )
  }

  ngOnInit() {
  }
  grabarVehiculo() {

    
    const vehiculo = {
      modelo: this.formularioCrearVehiculo.get('modelo')?.value,
      patente:this.formularioCrearVehiculo.get('patente')?.value,
      annio:this.formularioCrearVehiculo.get('annio')?.value
    }
    if(vehiculo.annio >= 1900){
      console.log(vehiculo)
      return
    }
    
    console.log(vehiculo)
  }
  volverlista(){
    this.router.navigate(['/listar-autos'])
  }
}
