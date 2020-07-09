Nrwl
ANgular Console
=====================================================================================
Create package.json using following command with default settings
npm init -y

TO install the Runtime dependencies
npm install --save <PACKAGE-NAME>

To install the dev./test time depedmnencies
npm install --save-dev <PACKAGE-NAME>
======================================================================================
Angular Decorators

- These are the objects used to define behavior for
  - Class
  - Property
  - Method
- Following Decorators
  - @NgModule
    - Applied on class to define the class as Angular Module aka Contianer
    - Properties of NgModule
      - imports: Of the type array, this is used to load standard and external Angular module in the current Application
      - declarations: Of the type array, this is used to declare references of all components, directives and pipes for the current application in the container provided by NgModule
      - providers: Of the type array, this is used to initialize the Dependency container to register all Angular Services so that they can be injected in Components/Directives/Pipes etc
      - bootstrap: Of the type array, this is used to define components to be bootstrap means rendered by the BrowserModule when the app is loaded.
  - @Component
    - Applied on class to make it as Angular Component
  - @Injectable
    - Applied on class to make it as Angular Service
  - @Directive
    - Applied on class to make it as Angular Directive
  - @Pipe
    - Applied on class to make it as Angular Pipe
  - @Input
    - Applied on Class property to accept data from the container
  - @Output
    - Applied on 'EventListener' to emit an event from child class to parent
  - @HostListener
    - Applied on method to host an event on the method, so that when an event is raised the method will be executed

======================================================================================
Angular 'Ivy' compilation

- Combination of Ahead-of-Time (AoT) and HTML Markup compression
- Reduce the Production out put at an average by 80%
- Ivy aka the Next-Generation View-Engine
  - Compile HTML Template into JSOM

=========================================================================
Programming With Angualar

1. Databinding
   1. Interpolation aka Expression Binding
      1. Read-Only Binding
      2. Syntax
         1. {{<PROPERTY-NAME>}}
         2. e.g. {{header}}
      3. Interpolation also evaluate Expression {{2+3}}
   2. Property Binding
      1. Binding public data member of Component with the Read/Write attribute of HTML element
         1. <input type="text" id="txt" name="t" [value]="<PROPERTY>">
         2. [value], [href], [checked], [disabled]
   3. Event Binding
      1. Binding a public method of the component with an event of HTML element
      2. <input type="button" value="Click Me" (click)="<METHOD>()">
      3. (click), (change) (keyup), (blur), ect
   4. Two-Way Binding
      1. Combination of Property Binding and EVent Binding
      2. [(ngModel)] = "<PROPERTY-FROM-COMPONENT>"
      3. ngModel is a Attribute Directive of Angular that is used for Two-Way binding
      4. To Excute ngModel, please import FormsModule from @angular/form in @NgModule imports array
      5. ngModel
         1. Has 'ngModelChanged' event, this will be fired for the default event of UI element on wheich ngMOdel is applied e.g. keyUp event for input-text element
         2. Read the updated value of the element, it will pass the value to the component for the property being updated.
         3. Component will be updated and it will update all properties dependeing on the updated property
         4. Component will pass the updated value back to HTML UI and HTML UI will be updated
2. Component Communication
3. HTTP Communication
4. Angular Elements
   1. LitElements
   2. Angular Elements
   3. Micro-Front-Ends
5. Cutomization
   1. Custom Directives
   2. Custom Decorators
   3. Custom Pipes
6. NGRX
7. Angular Testing
   1. Enzyme and Jest
8. Using Gulp
9. IOTA CSS

======================================================================
Angular Assignment 1
Create a Calculator like Windows Calculator
======================================================================
1. @angular/core
   1. NgModule, Component, Injectable, Pipe, Directice, Renderer2, ElementRef, HostListener, Input, Output, EventListener, etc.
   2. OnInit, interface for Lifecycle
2. @angular/common 
   1. CommonModule 
   2. @angular/common/http
      1. HttpClientModule
3. @angular/forms
   1. FormsModule, ReactiveFormsModule
   2. FormControl, FormGroup, FormBuilder, Validators, ect.
4. @angular/router
   1. RouterModule
   2. Router, Route, Routes, ActivatedRoute, CanActivate, etc.
5. @angular/platform-browser-dynamic
   1. platformBrowserDynamic()
6. @angular/platform-browser
   1. BrowserModule

=====================================================================================
Use Angular Directive for UI Management
- The reusable UI and Behavioral (custom attribute to HTML DOM Elements) objects
- 3 Types of Directives
  - Component Directive
    - Each component is directive and we can reuse it as HTML UI Element
  - Structural Directives
    - Used for dynamically ADD / REMOVE DOM based on Data expressions 
      - *ngFor, *ngIf, *ngSwitch-ngSwitchCase
  - Attribute Directives
    - The Custom Attribute for HTML DOM
      - E.g. ngModel, routerLink, formControlName, formGroup
    - Most of the Attribute directives can be used for Property-Binding  

======================================================================================
Reactive Forms aka Model-Drive-Forms aka Data-Driven-Forms
<form> maped with ngForm internally
FormGroup, the at-least one form to be submitted, the collection of FormControl
FormControl is an editable element in form that is mapped with public property of the Mdoel class. The mapping is established using [formControlName] attribute directive of Angular
1. Create a FormGroup with Mapping between Model Property and FormControl
2. Apply mapping on HTML Editable Elements using [formControlName]
3. Map the <form> tag with FormGroup using [formGroup] attribute directive
4. Must hjave Submit button and the <form> tag must using (ngSubmit) event binding
5. Use Validators for validation
   1. Validators class with all Static methods
      1. required(AbstractControl), requiredTrue(AbstractControl)
         1. The Model property using this validators will auto-read the data from the FormControl and pass it this method
      2. mainlength(int)/maxlength(int)/min(int)/max(int)
      3. pattern(regEx|string)
      4. email(AbstractControl)
      5. nullValidator
      6. compose(validators array as inpute parameter)
         1. Used to apply / define validators on the Model properties
   2. Validation Evaluation on HTML Template
      1. <formGroup>.controls.<formControlName>.dirty, means its is changed
      2. <formGroup>.controls.<formControlName>.invalid or !<formGroup>.controls.<formControlName>.valid , means the value is invalid
      3. <formGroup>.controls.<formControlName>.errors.<Validation-Type>
         1. Validation-Tye
            1. required/requiredTrue
            2. pattern
            3. min/max
            4. minlength/maxlength
      4. Custom Validator
         1. Written in class as a static method
         2. The method can accept either AbstractControl or premptive type
         3. The method must return 'any' 
            1. If the value is valid then the method returns 'null'
            2. If the value is invalid then the method will return JSON object e.g.
               1. {invalid:true} / {valid:false} / {odd:true} 
                  1. <formGroup>.controls.<formControlName>.errors.<return-json-key>
                     1. return-json-key --> valid/invalid/odd
6. Import 'reactiveFormsModule' to implement Reactive Forms in imports array of NgModule

======================================================================================
Assignment Day 4:
1. Modify the Logic Class to Update and Delete the Product
2. Generate Delete button for Each Table Row  for the Products table so that whern the button is clicked the Product will be deleted
3. [Mandatory] Add Radio button above the Products Table for Sort and Reverse, When these radiot buttons are clicked the Table must be sorted/ reversed based on ProductName / Price
4. Add validations for all Product properties like required/ Price cannot be -ve
5. [Mandatory] Create a Custom validator to chech Uniqueness of ProductId. This means tthat when enduse enters ProductId and Press-Tab, the valdation shoud be executed to check if the ProductId is already available in array. (Hint: Access the Logic class in Custom validator)  
    

