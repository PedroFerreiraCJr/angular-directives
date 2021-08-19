import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.css']
})
export class DiretivaNgclassComponent implements OnInit {

  danger: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  public onChange(): void {
    this.danger = !this.danger;
  }
}
