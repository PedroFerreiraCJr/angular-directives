
/**
 * A classe TemplateRef representa um o componente que é o template.
 * A classe ViewContainerRef representa o conteúdo que é passado para a tag template.
 */
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  @Input()
  public set ngElse(condition: boolean) {
    if (!condition) {
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    }
    else {
      this._viewContainerRef.clear();
    }
  }

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
  ) { }

}
