import { Component, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  @ViewChild('nav') slider!: NgImageSliderComponent;


  public images = [
    {
    // image: '/assets/images/st1.png',
    thumbImage: '/assets/images/st1.png'
    },
    {
    // image: '/assets/images/st3.png',
    thumbImage: '/assets/images/st2.png'
    },
    {
    // image: '/assets/images/st1.png',
    thumbImage: '/assets/images/st3.png'
    },
    {
    // image: '/assets/images/st3.png',
    thumbImage: '/assets/images/st4.png'
    }
    
]

}
