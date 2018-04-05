import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit{

    productTitle: string = 'List of Product';
    imageWidth: number = 50;
    imageMargin: number = 4;
    showImage: boolean = false;
    errorMessage: string;
    products: IProduct[];

    constructor(private _productService: ProductService) {
    }
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    onnotify(message: string): void {
        this.productTitle = 'ProductList: ' + message;
    }
    ngOnInit(): void {
        this._productService.getProducts()
                .subscribe(products => this.products = products,
                           error => this.errorMessage = <any>error);
    }

} 