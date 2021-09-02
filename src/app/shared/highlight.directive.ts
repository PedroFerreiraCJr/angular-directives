import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

  // associa uma variável da diretiva a um atributo do elemento HTML.
  @HostBinding('style.backgroundColor')
  backgroundColor: string = '';

  @Input()
  defaultColor: string = 'white';

  // O Angular é esperto o suficiente para saber que mesmo quando uma Input Property tem o mesmo nome exposto
  //através do valor do decorator @Input, a diretiva do Angular deve receber o valor para a Input Property
  //normalmente, assim como ser capaz de executar as ações normais da diretiva.
  @Input('highlight')
  highlightColor: string = 'yellow';

  constructor() { }

  @HostListener('mouseenter')
  public onMouseOver(): void {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    this.backgroundColor = this.defaultColor;
  }

  // Este é um evento de ciclo de vida da diretiva, assim como de qualquer Component do Angular.
  // Assim como os Components do Angular, as diretivas também possuem um ciclo de vida.
  public ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }
}
