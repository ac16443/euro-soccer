import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgForOf, NgIf } from '@angular/common';
import { FootballService } from '../../football.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { Country, Fixture, LeagueStanding } from './type';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-league-standings-list',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    NgFor,
    NgIf,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    MatTableModule,
    MatRippleModule,
    MatCardModule,
    MatProgressBarModule,
  ],
  templateUrl: './league-standings-list.component.html',
  styleUrl: './league-standings-list.component.css',
})
export class LeagueStandingsListComponent implements OnInit {
  countries: Country[] = [
    {
      id: 39,
      name: 'Premier League',
      country: 'England',
      logo: 'https://media.api-sports.io/football/leagues/39.png',
      flag: 'https://media.api-sports.io/flags/gb.svg',
      season: new Date().getFullYear(),
    },
    {
      id: 140,
      name: 'La Liga',
      country: 'Spain',
      logo: 'https://media-4.api-sports.io/football/leagues/140.png',
      flag: 'https://media-4.api-sports.io/flags/es.svg',
      season: new Date().getFullYear(),
    },
    {
      id: 61,
      name: 'Ligue 1',
      country: 'France',
      logo: 'https://media-4.api-sports.io/football/leagues/61.png',
      flag: 'https://media-4.api-sports.io/flags/fr.svg',
      season: new Date().getFullYear(),
    },
    {
      id: 78,
      name: 'Bundesliga',
      country: 'Germany',
      logo: 'https://media.api-sports.io/football/leagues/39.png',
      flag: 'https://media-4.api-sports.io/football/leagues/78.png',
      season: new Date().getFullYear(),
    },
    {
      id: 135,
      name: 'Serie A',
      country: 'Italy',
      logo: 'https://media-4.api-sports.io/football/leagues/135.png',
      flag: 'https://media-4.api-sports.io/flags/it.svg',
      season: new Date().getFullYear(),
    },
  ];

  selectedCountry!: Country;
  standings!: LeagueStanding;
  results: Fixture[] = [];
  isHide: boolean = false;
  isAccessDenied!: boolean;
  probressValue: number = 0;

  constructor(private service: FootballService) {}

  ngOnInit(): void {}
  selectCountry(country: Country): void {
    this.selectedCountry = country;
    this.probressValue = 30;
    this.service.getStandings(country.id, country.season).subscribe((res) => {
      // console.log('response', res);
      try {
        this.standings = res.response[0].league;
        console.log('Standings ', this.standings);
        this.isAccessDenied = false;
        this.probressValue = 60;
      } catch (error) {
        console.log('Eroror msg...>', error);
        //console.log('Eroror Error...>', res.errors.access);
        this.isAccessDenied = true;
      }
    });
  }

  teamresults(teamId: number) {
    this.service.getTeamResults(teamId).subscribe((results) => {
      console.log('Results', results);
      this.results = results?.response;
      this.probressValue = 100;
    });
    this.isHide = true;
  }

  goBack() {
    this.isHide = false;
    this.probressValue = 0;
  }
}
