/*
  A classe ElementRef é utilizada para fazer referência a um elemento, qualquer tag HTML
*/
import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  // O seletor da diretiva deve ser colocado entre colchetes - ([fundoAmarelo])
  // * Para limitar onde esta diretiva deve ser aplicada, é possível informar a tag no seletor
  //da diretiva, por exemplo...para aplicar esta diretiva
  //somente a parágrados, declaramos o seguinte selector: 'p[fundoAmarelo]'
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective implements OnInit {

  // para receber o elemento do DOM onde esta diretiva está aplicada, fazemos a 
  //injeção de dependência de um ElementRef.
  // conforme já foi dito, o elemento HTML recebido é o elemento onde a diretiva está aplicada
  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2) {
    console.log('elemento HTML', this._elementRef);
    // ** Vale ressaltar que o próprio time do Angular desaconselha a utilização deste modo, que é utilizando diretamente a classe ElementRef
    //pois torna a aplicação suscetível a ataques XSS, portanto o código está comentado.
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

  public ngOnInit(): void {
    // Essa é a forma correta de aplicar o style ao elemento que é referenciado por esta diretiva
    this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
  }
}
