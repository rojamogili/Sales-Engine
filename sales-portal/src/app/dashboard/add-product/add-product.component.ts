import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

import { HttpService } from '../http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  providers: [MessageService]

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
    private cdr: ChangeDetectorRef,
    private messageService: MessageService, 
    private primengConfig: PrimeNGConfig
  ) { }

  ngOnInit(): void {
    this.cdr.detectChanges();
    this.primengConfig.ripple = true;

  }

  save() {
    const urlPath = `${environment.server_url}/products/add`;

    this.httpService.postRequest( urlPath, this.product).subscribe((response: any) => {
      this.messageService.add({severity:'success', summary:'Success', detail:'Successfully added the product'});
      this.cancel();
    }, (error: any) => {
      this.cancel();
      this.messageService.add({severity:'error', summary:'Error', detail:'Failed to add the product'});
    });
  }

  cancel() {
    this.display = false;
    this.close_tab.emit();
  }

}
