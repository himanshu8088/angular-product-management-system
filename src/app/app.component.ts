import { Component } from '@angular/core';

// selector: the property that reprsent the "CUSTOM-HTML-TAG", using
// whihc the component will be referred in html markup of index.html
// ot HTML Template of other component like User/Custom control
// templateUrl:(external HTML file) the HTML that will be rendered in browser when the
// the component is bootstrap
// template: Inline HTML
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
   name: string;
   header: string;
   url: string;
   constructor(){
      this.name = 'Mahesh';
      this.header = 'The Component with Binding DEMOS';
      this.url = "https://www.webnethelper.com";
   }

   display(evt): void {
     // return the value attribute of the element
     // on which the event binding has done
     alert(evt.target.value);
     this.header = 'The Click Event';
   }
}
