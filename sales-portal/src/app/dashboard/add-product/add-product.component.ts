import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  display: boolean = true;
  product: any = {
    name: '',
    price: null,
    image: '',
    description: '',
    stock_quantity: null,
    rating: null

  }
  @Output() close_tab = new EventEmitter<string>(); 

  constructor(
    private httpService: HttpService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    console.log("------displau------", this.display)
    this.cdr.detectChanges();

  }

  save() {
    console.log("--------res---------", this.product)

    const urlPath = `http://localhost:5200/products/add`;

    this.httpService.postRequest( urlPath, this.product).subscribe((response: any) => {
      console.log("--------res---------", response)
      this.cancel();
    }, (error: any) => {
      this.cancel();
    });
  }

  cancel() {
    console.log("--------cancel---------", )

    this.display = false;
    this.close_tab.emit();

  }

}
