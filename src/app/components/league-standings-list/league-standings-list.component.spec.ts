import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueStandingsListComponent } from './league-standings-list.component';

describe('LeagueStandingsListComponent', () => {
  let component: LeagueStandingsListComponent;
  let fixture: ComponentFixture<LeagueStandingsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeagueStandingsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeagueStandingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
