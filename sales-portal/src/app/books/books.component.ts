import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor() { }

  data: any = [
    {
      image: "../../assets/images/addict.jpg",
      title: "I'm An Addict, And You Are My Drug",
      price: 500,
      rating: 5
    },
    {
      image: "../../assets/images/mine1.jpeg",
      title: "I Will Make You Mine, This Is My Promise",
      price: 500,
      rating: 5
    }, 
    {
      image: "../../assets/images/mine2.jpg",
      title: "I Will Make You Mine, Either By Hook or By Crook",
      price: 500,
      rating: 5
    },
    {
      image: "../../assets/images/harry1.jpeg",
      title: "Harry Potter and the Philosopher's Stone",
      price: 500,
      rating: 4
    },
    {
      image: "../../assets/images/harry2.jpeg",
      title: "Harry Potter and the Chamber of Secrets",
      price: 500,
      rating: 5
    },
    {
      image: "../../assets/images/twilight1.jpeg",
      title: "Twilight Saga",
      price: 500,
      rating: 4
    },
    {
      image: "../../assets/images/twilight2.jpg",
      title: "Twilight New Moon",
      price: 500,
      rating: 2
    },
    {
      image: "../../assets/images/twilight3.jpeg",
      title: "Twilight/Life and Death",
      price: 500,
      rating: 5
    },
    {
      image: "../../assets/images/addict.jpg",
      title: "I'm An Addict, And You Are My Drug",
      price: 500,
      rating: 4
    }
  ]

  ngOnInit(): void {
  }

}
