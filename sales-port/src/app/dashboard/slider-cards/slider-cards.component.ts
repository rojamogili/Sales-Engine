import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-cards',
  templateUrl: './slider-cards.component.html',
  styleUrls: ['./slider-cards.component.scss']
})
export class SliderCardsComponent implements OnInit {

  products =  [
    'https://78.media.tumblr.com/469798be38e86cc01ea4ba08563af785/tumblr_p38kazKBIX1snegd3o1_1280.jpg',
    'https://78.media.tumblr.com/f3577e640674f66119dad5ce61b4582c/tumblr_ozf8vw9LYN1snegd3o1_1280.jpg',
    'https://78.media.tumblr.com/895918f98ebb3644e885f663bf63ba61/tumblr_pa4fmzV4kV1snegd3o1_1280.jpg'
  ];


  constructor() { }

  ngOnInit(): void {
    
  }

}
