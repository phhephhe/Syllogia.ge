import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  
  public contactOnDisplay: boolean = false ;


  public displayContact(visible: boolean): void {
   this.contactOnDisplay = visible;
   console.log(this.contactOnDisplay)
  }
 
  public closeContactBar(): void{
    this.contactOnDisplay = false;
  }

  public scrollToTop():void {
    window.scrollTo(0,0)
  }
}
