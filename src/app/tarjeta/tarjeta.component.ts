import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  public image:string="https://static.eldiario.es/clip/71d118ff-5ef2-449c-be8a-6c321304fa70_16-9-aspect-ratio_default_0.jpg";
  public titulo:string= "Linux";

  constructor() { }

  ngOnInit(): void {
  }

}
