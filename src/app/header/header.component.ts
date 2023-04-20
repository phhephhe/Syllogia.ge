import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @ViewChild('myCheckbox', { static: true })
  myCheckbox!: ElementRef;
  @Output() public openContactBar:EventEmitter<any> = new EventEmitter();


  public contactBarVisible: boolean = false ; 

  public onContactClick(): void {
    this.contactBarVisible = !this.contactBarVisible;
    this.openContactBar.emit(this.contactBarVisible);
  }

   onClick():void{
    window.scrollTo(0,0)
    this.myCheckbox.nativeElement.checked = false;
  }

   scrollToAbout():void{
    window.scrollTo(0,850)
    this.myCheckbox.nativeElement.checked = false;
  }

   scrollToProject():void{
    window.scrollTo(0,1700)
    this.myCheckbox.nativeElement.checked = false;
  }
  
  scrollToTeam():void{
    window.scrollTo(0,5570)
    this.myCheckbox.nativeElement.checked = false;
  }

}
