import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import { Product } from '../model/app.product.model';
import { Logic } from '../model/logic';
import { Categories, Manufacturers } from '../model/app.constants';
import { CustomValidator } from './app.custom.validators';

@Component({
   selector: 'app-productreactiveform-component',
   templateUrl: './app.productreactiveform.view.html'
})
export class ProductReactiveFormComponent implements OnInit {

   product: Product;
   products: Array<Product>;
   private logic: Logic;
   headers: Array<string>;

   // copy the constant arrays in local public arrays of the component
   categories = Categories;
   manufacturers = Manufacturers;

   // define a FormGroup
   frmProduct: FormGroup;

   constructor() {
      this.product = new Product(0, '', '', '', '', '', 0);
      this.products = new Array<Product>();
      this.logic = new Logic();
      this.headers = new Array<string>();

      // map the Product Model class to FormGroup using FormControl
      // bind the fromProduct to <form> tag using its
      // [formGroup] attribute
      // bind the 'key' of FormControlName to Editable elements
      // inside formGroup using [formControlName] attribute

      this.frmProduct = new FormGroup({
         // the value of the Model property
         // to be read/write for the UI element
         // aka formState
         ProductRowId: new FormControl(this.product.ProductRowId,
            Validators.compose([
               Validators.required,
               Validators.minLength(2),
               Validators.maxLength(8),
               Validators.pattern('[0-9]+'),
               CustomValidator.CheckEven,
            ])),
         ProductId: new FormControl(this.product.ProductId, Validators.compose([Validators.required, CustomValidator.NotExistsIn(this.logic.getProducts().map(x => x.ProductId))])),
         ProductName: new FormControl(this.product.ProductName, Validators.required),
         CategoryName: new FormControl(this.product.CategoryName, Validators.required),
         Manufacturer: new FormControl(this.product.Manufacturer, Validators.required),
         Description: new FormControl(this.product.Description, Validators.required),
         BasePrice: new FormControl(this.product.BasePrice, Validators.min(0))
      });

   }

   // this is method that will be invoked immediatly after the ctor execution
   // write the logic in this method that we cannot write in the ctor
   // e.g. External Service calls, long running iterations
   ngOnInit(): void {
      // read proeprties of Product class and add them in headers array

      for (let p in this.product) {
         this.headers.push(p);
      }
      this.products = this.logic.getProducts();

   }

   clear(): void {
      this.product = new Product(0, '', '', '', '', '', 0);
   }
   save(): void {

      // read value from FormControl received from FromGroup
      this.product = this.frmProduct.value;
      this.products = this.logic.addProduct(this.product);
      console.log(JSON.stringify(this.products));
   }

   getSelectedRecord(prd: Product): void {
      // set the value to FormGroup
      this.frmProduct.setValue(prd);
   }

   update(prdFormGroup: FormGroup): void {
      let selectedProd: Product = prdFormGroup.value;
      let selectedProductIndex = this.products.findIndex(prd => prd.ProductId === selectedProd.ProductId)
      this.products[selectedProductIndex] = selectedProd;
   }

   delete(prdFormGroup: FormGroup): void {
      let selectedProd: Product = prdFormGroup.value;
      let selectedProductIndex = this.products.findIndex(prd => prd.ProductId === selectedProd.ProductId)
      this.products.splice(selectedProductIndex, 1);
   }

   deleteRow(product: Product): void {
      let selectedProductIndex = this.products.findIndex(prd => prd.ProductId === product.ProductId)
      this.products.splice(selectedProductIndex, 1);
      console.log(product);
   }

   sortByProductName(): void {
      this.products.sort((productA, productB) => productA.ProductName.localeCompare(productB.ProductName));
      console.log(JSON.stringify(this.products));
   }

   sortByPrice(): void {
      this.products.sort((productA, productB) => productA.BasePrice - productB.BasePrice);
      console.log(JSON.stringify(this.products));
   }

   reverseByProductName(): void {
      this.products.reverse();
   }

   reverseByPrice(): void {
      this.products.reverse();
   }
}
