import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({
  selector: "[appTimes]",
})
export class TimesDirective {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input("appTimes") set render(iterations: number) {
    // delete all innerHtml of viewContainer
    this.viewContainer.clear();

    for (let i = 0; i < iterations; i++) {
      // add some inner html based on the template
      // pass the context object
      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: i,
      });
    }
  }
}
