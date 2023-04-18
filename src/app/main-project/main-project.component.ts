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
  if(document.body.scrollTop > 900 || document.documentElement.scrollTop > 900){
      this.image2Animation = true;
    } else{
     this.image2Animation = false;
    }

  }
}
