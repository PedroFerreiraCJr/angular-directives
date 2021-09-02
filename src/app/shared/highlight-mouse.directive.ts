/*
  O objetivo do decorator @HostListener é servir de ouvinte de um evento em um
  elemento hospedeiro, no caso das diretivas, o elemento HTML onde a diretiva está aplicada.
*/
import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

/**
 * O objetivo dessa diretiva é demonstrar como escutar eventos nativos quando o mouse sobrepoe um elemento HTML.
 */
@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer2: Renderer2) { }

  // O parâmetro recebido é o nome do evento que deve ser escutado na tag decorada pela diretiva.
  // Neste caso, estamos aplicando um estilo ao elemento HTML referenciado por esta diretiva
  //quando o mouse estiver por cima do elemento HTML.
  @HostListener('mouseenter')
  public onMouseOver(): void {
    this._renderer2.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
  }

  // O parâmetro recebido é o nome do evento que deve ser escutado na tag decorada pela diretiva.
  // Neste caso, estamos removendo o estilo do elemento HTML referenciado por esta diretiva
  //quando o mouse estiver fora do elemento HTML.
  @HostListener('mouseleave')
  public onMouseLeave(): void {
    this._renderer2.removeStyle(this._elementRef.nativeElement, 'background-color');
  }
}
