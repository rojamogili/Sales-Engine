import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})

export class NavigatorComponent implements OnInit {

  @Input() search_str: string = '';
  @Output() search_event = new EventEmitter<string>(); 
  @Output() add_product = new EventEmitter<string>(); 


  constructor() { }

  items: MenuItem[] = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'Products',
            icon: 'pi pi-star',
            items: [
              {
                  label: 'Add Product',
                  icon: 'pi pi-plus',
                  command: () => this.addProduct(),
              },
            ]
        },
        {
            label: 'About',
            icon: 'pi pi-info-circle'
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope',
            badge: '3'
        }
      ];

  ngOnInit(): void {
  }


  search(value: any) {
    this.search_event.emit(value);
  }

  addProduct() {
    this.add_product.emit('add');
  }

}
