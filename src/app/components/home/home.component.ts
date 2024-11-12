import { Component, OnInit } from '@angular/core';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  public departamentos !: Array<Departamento>

  constructor(private _service:ServiceDepartamentos){}

  ngOnInit(): void {
    this.loadDepartamentos();
  }

  loadDepartamentos():void{
    this._service.getDepartamentos().subscribe(response =>{
      this.departamentos = response;
    })
  }

  borrarDepartamento(id:number):void{
    this._service.deleteDepartamento(id.toString()).subscribe(response =>{
      this.loadDepartamentos();
    })
  }
}
