import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { HttpService } from './http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  value: number = 4;
  products: any[] = [
    {rating: 4, name: 'Twisted Love', price: 200, image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/regionalbooks/h/u/v/twisted-love-original-imagqxwjjqzakaqw.jpeg?q=90&crop=false', },
    {rating: 4, name: 'Haunting Adeline', price: 255, image: 'https://m.media-amazon.com/images/I/51fVTRA90VL._SY445_SX342_.jpg', },
    {rating: 4, name: 'king of pride', price: 200, image: 'https://i0.wp.com/jeevesreads.com/wp-content/uploads/2023/03/img_9224.jpg?resize=736%2C1104&ssl=1', },
    {rating: 4, name: 'Blue Ridge', price: 500, image: 'https://images.pexels.com/photos/1667071/pexels-photo-1667071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {rating: 4, name: 'Blue Ridge', price: 50000, image: 'https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {rating: 4, name: 'Twisted Love', price: 200, image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/regionalbooks/h/u/v/twisted-love-original-imagqxwjjqzakaqw.jpeg?q=90&crop=false', },
  ]

  is_add_product: boolean = false;

  search_str: string = '';

  constructor(
    private httpService: HttpService,
    private cdr: ChangeDetectorRef

  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    const urlPath = `http://localhost:5200/products/list` + (this.search_str ? `?name=${this.search_str}` : '');

    this.httpService.getRequest( urlPath).subscribe((response: any) => {
      console.log("--------res---------", response)
      this.products = response.data
    }, (error: any) => {
    });
  }

  search(value: any) {
    console.log('-------val-------', value.target.value)
    this.search_str = value.target.value;
    if (this.search_str.length >= 3 || !this.search_str.length) {
      this.fetchProducts()
    }
  }

  add_product(type: string) {
    this.is_add_product = type === 'add' ? true : false;
    console.log("----", this.is_add_product)
    this.cdr.detectChanges()
    
  }

  close_tab() {
    this.is_add_product = false;
    this.fetchProducts();

  }

}
