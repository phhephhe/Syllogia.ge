import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  public image2Animation:boolean = false;

  @HostListener('document:scroll')
  scrollFunction(){
  if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.image2Animation = true;
    } else{
     this.image2Animation = false;
    }

  }
}
