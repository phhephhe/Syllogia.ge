import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Syllogia';

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
