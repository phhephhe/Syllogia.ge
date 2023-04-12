import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBackgroundComponent } from './team-background.component';

describe('TeamBackgroundComponent', () => {
  let component: TeamBackgroundComponent;
  let fixture: ComponentFixture<TeamBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
