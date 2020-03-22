import { Directive, ElementRef, Input } from "@angular/core";

// this is an attribute directive
// used to modify a DOM element

@Directive({
  selector: "[appClass]",
})
export class ClassDirective {
  constructor(private element: ElementRef) {}

  // alias the input with same name as directive
  // instantiates the directive and acts as input
  // to the backgroundColor setter
  @Input("appClass") set setClassNames(classes: object) {
    for (const key in classes) {
      if (classes.hasOwnProperty(key)) {
        if (classes[key]) {
          this.element.nativeElement.classList.add(key);
        } else {
          this.element.nativeElement.classList.remove(key);
        }
      }
    }
  }
}

// communicate from parent to child

// parent comp template
// <app-card [title]=" 'I love this' "></app-card>

// child comp class
// import { Input } from "angluar"
// @Input() title: string;
