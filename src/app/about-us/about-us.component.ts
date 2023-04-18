import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  public image1Animation:boolean = false;
  public image2Animation:boolean = false;
 
  @HostListener('document:scroll')
  scrollFunction(){
    if(document.body.scrollTop > 0  || document.documentElement.scrollTop > 0){
      this.image1Animation = true;
    } else{
     this.image1Animation = false;
    }
    
    if(document.body.scrollTop > 700 || document.documentElement.scrollTop > 700){
      this.image2Animation = true;
    } else{
     this.image2Animation = false;
    }
    

  }
}
