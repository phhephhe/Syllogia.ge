import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  @Output() public openContactBar:EventEmitter<any> = new EventEmitter();


  public contactBarVisible: boolean = false ; 

  public onContactClick(): void {
    this.contactBarVisible = !this.contactBarVisible;
    this.openContactBar.emit(this.contactBarVisible);
  }

   onClick():void{
    window.scrollTo(0,0)
  }

   scrollToAbout():void{
    window.scrollTo(0,850)
    
  }

   scrollToProject():void{
    window.scrollTo(0,1700)
  }
  
  scrollToTeam():void{
    window.scrollTo(0,3825)
  }
}
