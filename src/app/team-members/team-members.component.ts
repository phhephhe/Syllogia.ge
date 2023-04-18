import { Component } from '@angular/core';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css']
})
export class TeamMembersComponent {
  public images = [];
  
  public teamInfo = [
    {
      fullname: "Armazi Aslamazashvili",
      position: "Project Manager"
    },
    {
      fullname: "Saba Devnozashvili",
      position: "Senior Back-End Developer"
    },
    {
      fullname: "Ramazi Bluashvili",
      position: "Middle Back-End Developer"
    },
    {
      fullname: "Giorgi Giorgobiani",
      position: "Middle Back-End Developer"
    },
    {
      fullname: "Valeri Kharitonshvili",
      position: "Senior Front-End Developer"
    },
    {
      fullname: "Giorgi Galustashvili",
      position: "Senior Front-End Developer"
    },
    {
      fullname: "Nini Chirgadze",
      position: "Junior Front-End Developer"
    }

  ];

}
