import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-project',
  templateUrl: './main-project.component.html',
  styleUrls: ['./main-project.component.css']
})
export class MainProjectComponent {
  public image2Animation:boolean = false;

  @HostListener('document:scroll')
  scrollFunction(){
  if(document.body.scrollTop > 700 || document.documentElement.scrollTop > 700){
      this.image2Animation = true;
    } else{
     this.image2Animation = false;
    }

  }
}
