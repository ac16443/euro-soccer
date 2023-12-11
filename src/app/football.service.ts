import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  Standing,
  Fixture,
  LeagueStanding,
  LeagueStandingResponse,
  Country,
  FixtureResponse,
} from './components/league-standings-list/type';

@Injectable({
  providedIn: 'root',
})
export class FootballService {
  private apiUrl = 'https://v3.football.api-sports.io';
  private apiKey = '65dd4e61d733ae2f7fa41bfd85af3ff7'; // process.env['API_KEY'] || '';
  private headers = new HttpHeaders({
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': this.apiKey,
  });

  constructor(private http: HttpClient) {}

  getStandings(
    leagueId: number,
    season: number
  ): Observable<LeagueStandingResponse> {
    return this.http.get<LeagueStandingResponse>(
      `${this.apiUrl}/standings?league=${leagueId}&season=${season}`,
      { headers: this.headers }
    );
  }

  getTeamResults(teamId: number): Observable<FixtureResponse> {
    return this.http.get<FixtureResponse>(
      `${this.apiUrl}/fixtures?team=${teamId}&last=10`,
      {
        headers: this.headers,
      }
    );
  }
}

// return of({
//   get: 'standings',
//   parameters: {
//     league: '39',
//     season: '2023',
//   },
//   errors: [],
//   results: 1,
//   paging: {
//     current: 1,
//     total: 1,
//   },
//   response: [
//     {
//       league: {
//         id: 39,
//         name: 'Premier League',
//         country: 'England',
//         logo: 'https://media-4.api-sports.io/football/leagues/39.png',
//         flag: 'https://media-4.api-sports.io/flags/gb.svg',
//         season: 2023,
//         standings: [
//           [
//             {
//               rank: 1,
//               team: {
//                 id: 42,
//                 name: 'Arsenal',
//                 logo: 'https://media-4.api-sports.io/football/teams/42.png',
//               },
//               points: 36,
//               goalsDiff: 19,
//               group: 'Premier League',
//               form: 'WWWWL',
//               status: 'same',
//               description: 'Promotion - Champions League (Group Stage: )',
//               all: {
//                 played: 15,
//                 win: 11,
//                 draw: 3,
//                 lose: 1,
//                 goals: {
//                   for: 33,
//                   against: 14,
//                 },
//               },
//               home: {
//                 played: 8,
//                 win: 6,
//                 draw: 2,
//                 lose: 0,
//                 goals: {
//                   for: 20,
//                   against: 8,
//                 },
//               },
//               away: {
//                 played: 7,
//                 win: 5,
//                 draw: 1,
//                 lose: 1,
//                 goals: {
//                   for: 13,
//                   against: 6,
//                 },
//               },
//               update: '2023-12-07T00:00:00+00:00',
//             },
//             {
//               rank: 2,
//               team: {
//                 id: 40,
//                 name: 'Liverpool',
//                 logo: 'https://media-4.api-sports.io/football/teams/40.png',
//               },
//               points: 34,
//               goalsDiff: 20,
//               group: 'Premier League',
//               form: 'WWDWD',
//               status: 'same',
//               description: 'Promotion - Champions League (Group Stage: )',
//               all: {
//                 played: 15,
//                 win: 10,
//                 draw: 4,
//                 lose: 1,
//                 goals: {
//                   for: 34,
//                   against: 14,
//                 },
//               },
//               home: {
//                 played: 7,
//                 win: 7,
//                 draw: 0,
//                 lose: 0,
//                 goals: {
//                   for: 21,
//                   against: 5,
//                 },
//               },
//               away: {
//                 played: 8,
//                 win: 3,
//                 draw: 4,
//                 lose: 1,
//                 goals: {
//                   for: 13,
//                   against: 9,
//                 },
//               },
//               update: '2023-12-07T00:00:00+00:00',
//             },
//             {
//               rank: 3,
//               team: {
//                 id: 66,
//                 name: 'Aston Villa',
//                 logo: 'https://media-4.api-sports.io/football/teams/66.png',
//               },
//               points: 32,
//               goalsDiff: 14,
//               group: 'Premier League',
//               form: 'WDWWL',
//               status: 'same',
//               description: 'Promotion - Champions League (Group Stage: )',
//               all: {
//                 played: 15,
//                 win: 10,
//                 draw: 2,
//                 lose: 3,
//                 goals: {
//                   for: 34,
//                   against: 20,
//                 },
//               },
//               home: {
//                 played: 7,
//                 win: 7,
//                 draw: 0,
//                 lose: 0,
//                 goals: {
//                   for: 24,
//                   against: 5,
//                 },
//               },
//               away: {
//                 played: 8,
//                 win: 3,
//                 draw: 2,
//                 lose: 3,
//                 goals: {
//                   for: 10,
//                   against: 15,
//                 },
//               },
//               update: '2023-12-07T00:00:00+00:00',
//             },
//             {
//               rank: 4,
//               team: {
//                 id: 50,
//                 name: 'Manchester City',
//                 logo: 'https://media-4.api-sports.io/football/teams/50.png',
//               },
//               points: 30,
//               goalsDiff: 19,
//               group: 'Premier League',
//               form: 'LDDDW',
//               status: 'same',
//               description: 'Promotion - Champions League (Group Stage: )',
//               all: {
//                 played: 15,
//                 win: 9,
//                 draw: 3,
//                 lose: 3,
//                 goals: {
//                   for: 36,
//                   against: 17,
//                 },
//               },
//               home: {
//                 played: 7,
//                 win: 5,
//                 draw: 2,
//                 lose: 0,
//                 goals: {
//                   for: 20,
//                   against: 7,
//                 },
//               },
//               away: {
//                 played: 8,
//                 win: 4,
//                 draw: 1,
//                 lose: 3,
//                 goals: {
//                   for: 16,
//                   against: 10,
//                 },
//               },
//               update: '2023-12-07T00:00:00+00:00',
//             },
//             {
//               rank: 5,
//               team: {
//                 id: 47,
//                 name: 'Tottenham',
//                 logo: 'https://media-4.api-sports.io/football/teams/47.png',
//               },
//               points: 27,
//               goalsDiff: 7,
//               group: 'Premier League',
//               form: 'LDLLL',
//               status: 'same',
//               description: 'Promotion - Europa League (Group Stage: )',
//               all: {
//                 played: 15,
//                 win: 8,
//                 draw: 3,
//                 lose: 4,
//                 goals: {
//                   for: 29,
//                   against: 22,
//                 },
//               },
//               home: {
//                 played: 7,
//                 win: 4,
//                 draw: 0,
//                 lose: 3,
//                 goals: {
//                   for: 11,
//                   against: 10,
//                 },
//               },
//               away: {
//                 played: 8,
//                 win: 4,
//                 draw: 3,
//                 lose: 1,
//                 goals: {
//                   for: 18,
//                   against: 12,
//                 },
//               },
//               update: '2023-12-07T00:00:00+00:00',
//             },
//             {
//               rank: 6,
//               team: {
//                 id: 33,
//                 name: 'Manchester United',
//                 logo: 'https://media-4.api-sports.io/football/teams/33.png',
//               },
//               points: 27,
//               goalsDiff: 0,
//               group: 'Premier League',
//               form: 'WLWWW',
//               status: 'same',
//               description: null,
//               all: {
//                 played: 15,
//                 win: 9,
//                 draw: 0,
//                 lose: 6,
//                 goals: {
//                   for: 18,
//                   against: 18,
//                 },
//               },
//               home: {
//                 played: 8,
//                 win: 5,
//                 draw: 0,
//                 lose: 3,
//                 goals: {
//                   for: 10,
//                   against: 11,
//                 },
//               },
//               away: {
//                 played: 7,
//                 win: 4,
//                 draw: 0,
//                 lose: 3,
//                 goals: {
//                   for: 8,
//                   against: 7,
//                 },
//               },
//               update: '2023-12-07T00:00:00+00:00',
//             },
//             {
//               rank: 7,
//               team: {
//                 id: 34,
//                 name: 'Newcastle',
//                 logo: 'https://media-4.api-sports.io/football/teams/34.png',
//               },
//               points: 26,
//               goalsDiff: 15,
//               group: 'Premier League',
//               form: 'LWWLW',
//               status: 'same',
//               description: null,
//               all: {
//                 played: 15,
//                 win: 8,
//                 draw: 2,
//                 lose: 5,
//                 goals: {
//                   for: 32,
//                   against: 17,
//                 },
//               },
//               home: {
//                 played: 8,
//                 win: 7,
//                 draw: 0,
//                 lose: 1,
//                 goals: {
//                   for: 19,
//                   against: 4,
//                 },
//               },
//               away: {
//                 played: 7,
//                 win: 1,
//                 draw: 2,
//                 lose: 4,
//                 goals: {
//                   for: 13,
//                   against: 13,
//                 },
//               },
//               update: '2023-12-07T00:00:00+00:00',
//             },
//             {
//               rank: 8,
//               team: {
//                 id: 51,
//                 name: 'Brighton',
//                 logo: 'https://media-4.api-sports.io/football/teams/51.png',
//               },
//               points: 25,
//               goalsDiff: 5,
//               group: 'Premier League',
//               form: 'WLWDD',
//               status: 'same',
//               description: null,
//               all: {
//                 played: 15,
//                 win: 7,
//                 draw: 4,
//                 lose: 4,
//                 goals: {
//                   for: 32,
//                   against: 27,
//                 },
//               },
//               home: {
//                 played: 8,
//                 win: 4,
//                 draw: 3,
//                 lose: 1,
//                 goals: {
//                   for: 17,
//                   against: 11,
//                 },
//               },
//               away: {
//                 played: 7,
//                 win: 3,
//                 draw: 1,
//                 lose: 3,
//                 goals: {
//                   for: 15,
//                   against: 16,
//                 },
//               },
//               update: '2023-12-07T00:00:00+00:00',
//             },
//             {
//               rank: 9,
//               team: {
//                 id: 48,
//                 name: 'West Ham',
//                 logo: 'https://media-4.api-sports.io/football/teams/48.png',
//               },
//               points: 24,
//               goalsDiff: 1,
//               group: 'Premier League',
//               form: 'WDWWL',
//               status: 'same',
//               description: null,
//               all: {
//                 played: 15,
//                 win: 7,
//                 draw: 3,
//                 lose: 5,
//                 goals: {
//                   for: 26,
//                   against: 25,
//                 },
//               },
//               home: {
//                 played: 7,
//                 win: 3,
//                 draw: 2,
//                 lose: 2,
//                 goals: {
//                   for: 12,
//                   against: 10,
//                 },
//               },
//               away: {
//                 played: 8,
//                 win: 4,
//                 draw: 1,
//                 lose: 3,
//                 goals: {
//                   for: 14,
//                   against: 15,
//                 },
//               },
//               update: '2023-12-07T00:00:00+00:00',
//             },
//             {
//               rank: 10,
//               team: {
//                 id: 49,
//                 name: 'Chelsea',
//                 logo: 'https://media-4.api-sports.io/football/teams/49.png',
//               },
//               points: 19,
//               goalsDiff: 2,
//               group: 'Premier League',
//               form: 'LWLDW',
//               status: 'same',
//               description: null,
//               all: {
//                 played: 15,
//                 win: 5,
//                 draw: 4,
//                 lose: 6,
//                 goals: {
//                   for: 26,
//                   against: 24,
//                 },
//               },
//               home: {
//                 played: 8,
//                 win: 2,
//                 draw: 3,
//                 lose: 3,
//                 goals: {
//                   for: 13,
//                   against: 13,
//                 },
//               },
//               away: {
//                 played: 7,
//                 win: 3,
//                 draw: 1,
//                 lose: 3,
//                 goals: {
//                   for: 13,
//                   against: 11,
//                 },
//               },
//               update: '2023-12-07T00:00:00+00:00',
//             },
//             {
//               rank: 11,
//               team: {
//                 id: 55,
//                 name: 'Brentford',
//                 logo: 'https://media-4.api-sports.io/football/teams/55.png',
//               },
//               points: 19,
//               goalsDiff: 2,
//               group: 'Premier League',
//               form: 'LWLLW',
//               status: 'same',
//               description: null,
//               all: {
//                 played: 15,
//                 win: 5,
//                 draw: 4,
//                 lose: 6,
//                 goals: {
//                   for: 23,
//                   against: 21,
//                 },
//               },
//               home: {
//                 played: 8,
//                 win: 3,
//                 draw: 3,
//                 lose: 2,
//                 goals: {
//                   for: 15,
//                   against: 12,
//                 },
//               },
//               away: {
//                 played: 7,
//                 win: 2,
//                 draw: 1,
//                 lose: 4,
//                 goals: {
//                   for: 8,
//                   against: 9,
//                 },
//               },
//               update: '2023-12-07T00:00:00+00:00',
//             },
//             {
//               rank: 12,
//               team: {
//                 id: 36,
//                 name: 'Fulham',
//                 logo: 'https://media-4.api-sports.io/football/teams/36.png',
//               },
//               points: 18,
//               goalsDiff: -5,
//               group: 'Premier League',
//               form: 'WLWLL',
//               status: 'same',
//               description: null,
//               all: {
//                 played: 15,
//                 win: 5,
//                 draw: 3,
//                 lose: 7,
//                 goals: {
//                   for: 21,
//                   against: 26,
//                 },
//               },
//               home: {
//                 played: 7,
//                 win: 4,
//                 draw: 0,
//                 lose: 3,
//                 goals: {
//                   for: 12,
//                   against: 9,
//                 },
//               },
//               away: {
//                 played: 8,
//                 win: 1,
//                 draw: 3,
//                 lose: 4,
//                 goals: {
//                   for: 9,
//                   against: 17,
//                 },
//               },
//               update: '2023-12-07T00:00:00+00:00',
//             },
//             {
//               rank: 13,
//               team: {
//                 id: 39,
//                 name: 'Wolves',
//                 logo: 'https://media-4.api-sports.io/football/teams/39.png',
//               },
//               points: 18,
//               goalsDiff: -5,
//               group: 'Premier League',
//               form: 'WLLWL',
//               status: 'same',
//               description: null,
//               all: {
//                 played: 15,
//                 win: 5,
//                 draw: 3,
//                 lose: 7,
//                 goals: {
//                   for: 20,
//                   against: 25,
//                 },
//               },
//               home: {
//                 played: 7,
//                 win: 3,
//                 draw: 2,
//                 lose: 2,
//                 goals: {
//                   for: 10,
//                   against: 12,
//                 },
//               },
//               away: {
//                 played: 8,
//                 win: 2,
//                 draw: 1,
//                 lose: 5,
//                 goals: {
//                   for: 10,
//                   against: 13,
//                 },
//               },
//               update: '2023-12-07T00:00:00+00:00',
//             },
//             {
//               rank: 14,
//               team: {
//                 id: 52,
//                 name: 'Crystal Palace',
//                 logo: 'https://media-4.api-sports.io/football/teams/52.png',
//               },
//               points: 16,
//               goalsDiff: -7,
//               group: 'Premier League',
//               form: 'LDLLW',
//               status: 'same',
//               description: null,
//               all: {
//                 played: 15,
//                 win: 4,
//                 draw: 4,
//                 lose: 7,
//                 goals: {
//                   for: 14,
//                   against: 21,
//                 },
//               },
//               home: {
//                 played: 7,
//                 win: 1,
//                 draw: 2,
//                 lose: 4,
//                 goals: {
//                   for: 6,
//                   against: 10,
//                 },
//               },
//               away: {
//                 played: 8,
//                 win: 3,
//                 draw: 2,
//                 lose: 3,
//                 goals: {
//                   for: 8,
//                   against: 11,
//                 },
//               },
//               update: '2023-12-07T00:00:00+00:00',
//             },
//             {
//               rank: 15,
//               team: {
//                 id: 35,
//                 name: 'Bournemouth',
//                 logo: 'https://media-4.api-sports.io/football/teams/35.png',
//               },
//               points: 16,
//               goalsDiff: -12,
//               group: 'Premier League',
//               form: 'WDWWL',
//               status: 'same',
//               description: null,
//               all: {
//                 played: 15,
//                 win: 4,
//                 draw: 4,
//                 lose: 7,
//                 goals: {
//                   for: 18,
//                   against: 30,
//                 },
//               },
//               home: {
//                 played: 8,
//                 win: 2,
//                 draw: 3,
//                 lose: 3,
//                 goals: {
//                   for: 8,
//                   against: 12,
//                 },
//               },
//               away: {
//                 played: 7,
//                 win: 2,
//                 draw: 1,
//                 lose: 4,
//                 goals: {
//                   for: 10,
//                   against: 18,
//                 },
//               },
//               update: '2023-12-07T00:00:00+00:00',
//             },
//             {
//               rank: 16,
//               team: {
//                 id: 65,
//                 name: 'Nottingham Forest',
//                 logo: 'https://media-4.api-sports.io/football/teams/65.png',
//               },
//               points: 13,
//               goalsDiff: -11,
//               group: 'Premier League',
//               form: 'LLLLW',
//               status: 'same',
//               description: null,
//               all: {
//                 played: 15,
//                 win: 3,
//                 draw: 4,
//                 lose: 8,
//                 goals: {
//                   for: 16,
//                   against: 27,
//                 },
//               },
//               home: {
//                 played: 7,
//                 win: 2,
//                 draw: 3,
//                 lose: 2,
//                 goals: {
//                   for: 10,
//                   against: 9,
//                 },
//               },
//               away: {
//                 played: 8,
//                 win: 1,
//                 draw: 1,
//                 lose: 6,
//                 goals: {
//                   for: 6,
//                   against: 18,
//                 },
//               },
//               update: '2023-12-07T00:00:00+00:00',
//             },
//             {
//               rank: 17,
//               team: {
//                 id: 45,
//                 name: 'Everton',
//                 logo: 'https://media-4.api-sports.io/football/teams/45.png',
//               },
//               points: 10,
//               goalsDiff: -2,
//               group: 'Premier League',
//               form: 'WWLWD',
//               status: 'same',
//               description: null,
//               all: {
//                 played: 15,
//                 win: 6,
//                 draw: 2,
//                 lose: 7,
//                 goals: {
//                   for: 18,
//                   against: 20,
//                 },
//               },
//               home: {
//                 played: 8,
//                 win: 2,
//                 draw: 1,
//                 lose: 5,
//                 goals: {
//                   for: 8,
//                   against: 9,
//                 },
//               },
//               away: {
//                 played: 7,
//                 win: 4,
//                 draw: 1,
//                 lose: 2,
//                 goals: {
//                   for: 10,
//                   against: 11,
//                 },
//               },
//               update: '2023-12-07T00:00:00+00:00',
//             },
//             {
//               rank: 18,
//               team: {
//                 id: 1359,
//                 name: 'Luton',
//                 logo: 'https://media-4.api-sports.io/football/teams/1359.png',
//               },
//               points: 9,
//               goalsDiff: -14,
//               group: 'Premier League',
//               form: 'LLWLD',
//               status: 'same',
//               description: 'Relegation - Championship',
//               all: {
//                 played: 15,
//                 win: 2,
//                 draw: 3,
//                 lose: 10,
//                 goals: {
//                   for: 16,
//                   against: 30,
//                 },
//               },
//               home: {
//                 played: 7,
//                 win: 1,
//                 draw: 2,
//                 lose: 4,
//                 goals: {
//                   for: 9,
//                   against: 12,
//                 },
//               },
//               away: {
//                 played: 8,
//                 win: 1,
//                 draw: 1,
//                 lose: 6,
//                 goals: {
//                   for: 7,
//                   against: 18,
//                 },
//               },
//               update: '2023-12-07T00:00:00+00:00',
//             },
//             {
//               rank: 19,
//               team: {
//                 id: 44,
//                 name: 'Burnley',
//                 logo: 'https://media-4.api-sports.io/football/teams/44.png',
//               },
//               points: 7,
//               goalsDiff: -18,
//               group: 'Premier League',
//               form: 'LWLLL',
//               status: 'same',
//               description: 'Relegation - Championship',
//               all: {
//                 played: 15,
//                 win: 2,
//                 draw: 1,
//                 lose: 12,
//                 goals: {
//                   for: 15,
//                   against: 33,
//                 },
//               },
//               home: {
//                 played: 8,
//                 win: 1,
//                 draw: 0,
//                 lose: 7,
//                 goals: {
//                   for: 10,
//                   against: 20,
//                 },
//               },
//               away: {
//                 played: 7,
//                 win: 1,
//                 draw: 1,
//                 lose: 5,
//                 goals: {
//                   for: 5,
//                   against: 13,
//                 },
//               },
//               update: '2023-12-07T00:00:00+00:00',
//             },
//             {
//               rank: 20,
//               team: {
//                 id: 62,
//                 name: 'Sheffield Utd',
//                 logo: 'https://media-4.api-sports.io/football/teams/62.png',
//               },
//               points: 5,
//               goalsDiff: -30,
//               group: 'Premier League',
//               form: 'LLLDW',
//               status: 'same',
//               description: 'Relegation - Championship',
//               all: {
//                 played: 15,
//                 win: 1,
//                 draw: 2,
//                 lose: 12,
//                 goals: {
//                   for: 11,
//                   against: 41,
//                 },
//               },
//               home: {
//                 played: 8,
//                 win: 1,
//                 draw: 1,
//                 lose: 6,
//                 goals: {
//                   for: 7,
//                   against: 21,
//                 },
//               },
//               away: {
//                 played: 7,
//                 win: 0,
//                 draw: 1,
//                 lose: 6,
//                 goals: {
//                   for: 4,
//                   against: 20,
//                 },
//               },
//               update: '2023-12-07T00:00:00+00:00',
//             },
//           ],
//         ],
//       },
//     },
//   ],
// });
//2. team result mock api
// return of({
//   get: 'fixtures',
//   parameters: {
//     team: '42',
//     last: '10',
//   },
//   errors: [],
//   results: 10,
//   paging: {
//     current: 1,
//     total: 1,
//   },
//   response: [
//     {
//       fixture: {
//         id: 1035318,
//         referee: 'Samuel Barrott, England',
//         timezone: 'UTC',
//         date: '2023-12-05T20:15:00+00:00',
//         timestamp: 1701807300,
//         periods: {
//           first: 1701807300,
//           second: 1701810900,
//         },
//         venue: {
//           id: 551,
//           name: 'Kenilworth Road',
//           city: 'Luton, Bedfordshire',
//         },
//         status: {
//           long: 'Match Finished',
//           short: 'FT',
//           elapsed: 90,
//         },
//       },
//       league: {
//         id: 39,
//         name: 'Premier League',
//         country: 'England',
//         logo: 'https://media-4.api-sports.io/football/leagues/39.png',
//         flag: 'https://media-4.api-sports.io/flags/gb.svg',
//         season: 2023,
//         round: 'Regular Season - 15',
//       },
//       teams: {
//         home: {
//           id: 1359,
//           name: 'Luton',
//           logo: 'https://media-4.api-sports.io/football/teams/1359.png',
//           winner: false,
//         },
//         away: {
//           id: 42,
//           name: 'Arsenal',
//           logo: 'https://media-4.api-sports.io/football/teams/42.png',
//           winner: true,
//         },
//       },
//       goals: {
//         home: 3,
//         away: 4,
//       },
//       score: {
//         halftime: {
//           home: 1,
//           away: 2,
//         },
//         fulltime: {
//           home: 3,
//           away: 4,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1035305,
//         referee: 'Peter Bankes, England',
//         timezone: 'UTC',
//         date: '2023-12-02T15:00:00+00:00',
//         timestamp: 1701529200,
//         periods: {
//           first: 1701529200,
//           second: 1701532800,
//         },
//         venue: {
//           id: 494,
//           name: 'Emirates Stadium',
//           city: 'London',
//         },
//         status: {
//           long: 'Match Finished',
//           short: 'FT',
//           elapsed: 90,
//         },
//       },
//       league: {
//         id: 39,
//         name: 'Premier League',
//         country: 'England',
//         logo: 'https://media-4.api-sports.io/football/leagues/39.png',
//         flag: 'https://media-4.api-sports.io/flags/gb.svg',
//         season: 2023,
//         round: 'Regular Season - 14',
//       },
//       teams: {
//         home: {
//           id: 42,
//           name: 'Arsenal',
//           logo: 'https://media-4.api-sports.io/football/teams/42.png',
//           winner: true,
//         },
//         away: {
//           id: 39,
//           name: 'Wolves',
//           logo: 'https://media-4.api-sports.io/football/teams/39.png',
//           winner: false,
//         },
//       },
//       goals: {
//         home: 2,
//         away: 1,
//       },
//       score: {
//         halftime: {
//           home: 2,
//           away: 0,
//         },
//         fulltime: {
//           home: 2,
//           away: 1,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1126219,
//         referee: 'Artur Soares Dias',
//         timezone: 'UTC',
//         date: '2023-11-29T20:00:00+00:00',
//         timestamp: 1701288000,
//         periods: {
//           first: 1701288000,
//           second: 1701291600,
//         },
//         venue: {
//           id: 494,
//           name: 'Emirates Stadium',
//           city: 'London',
//         },
//         status: {
//           long: 'Match Finished',
//           short: 'FT',
//           elapsed: 90,
//         },
//       },
//       league: {
//         id: 2,
//         name: 'UEFA Champions League',
//         country: 'World',
//         logo: 'https://media-4.api-sports.io/football/leagues/2.png',
//         flag: null,
//         season: 2023,
//         round: 'Group B - 5',
//       },
//       teams: {
//         home: {
//           id: 42,
//           name: 'Arsenal',
//           logo: 'https://media-4.api-sports.io/football/teams/42.png',
//           winner: true,
//         },
//         away: {
//           id: 116,
//           name: 'Lens',
//           logo: 'https://media-4.api-sports.io/football/teams/116.png',
//           winner: false,
//         },
//       },
//       goals: {
//         home: 6,
//         away: 0,
//       },
//       score: {
//         halftime: {
//           home: 5,
//           away: 0,
//         },
//         fulltime: {
//           home: 6,
//           away: 0,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1035294,
//         referee: 'Tim Robinson, England',
//         timezone: 'UTC',
//         date: '2023-11-25T17:30:00+00:00',
//         timestamp: 1700933400,
//         periods: {
//           first: 1700933400,
//           second: 1700937000,
//         },
//         venue: {
//           id: 10503,
//           name: 'Gtech Community Stadium',
//           city: 'Brentford, Middlesex',
//         },
//         status: {
//           long: 'Match Finished',
//           short: 'FT',
//           elapsed: 90,
//         },
//       },
//       league: {
//         id: 39,
//         name: 'Premier League',
//         country: 'England',
//         logo: 'https://media-4.api-sports.io/football/leagues/39.png',
//         flag: 'https://media-4.api-sports.io/flags/gb.svg',
//         season: 2023,
//         round: 'Regular Season - 13',
//       },
//       teams: {
//         home: {
//           id: 55,
//           name: 'Brentford',
//           logo: 'https://media-4.api-sports.io/football/teams/55.png',
//           winner: false,
//         },
//         away: {
//           id: 42,
//           name: 'Arsenal',
//           logo: 'https://media-4.api-sports.io/football/teams/42.png',
//           winner: true,
//         },
//       },
//       goals: {
//         home: 0,
//         away: 1,
//       },
//       score: {
//         halftime: {
//           home: 0,
//           away: 0,
//         },
//         fulltime: {
//           home: 0,
//           away: 1,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1035148,
//         referee: 'Michael Oliver, England',
//         timezone: 'UTC',
//         date: '2023-11-11T15:00:00+00:00',
//         timestamp: 1699714800,
//         periods: {
//           first: 1699714800,
//           second: 1699718400,
//         },
//         venue: {
//           id: 494,
//           name: 'Emirates Stadium',
//           city: 'London',
//         },
//         status: {
//           long: 'Match Finished',
//           short: 'FT',
//           elapsed: 90,
//         },
//       },
//       league: {
//         id: 39,
//         name: 'Premier League',
//         country: 'England',
//         logo: 'https://media-4.api-sports.io/football/leagues/39.png',
//         flag: 'https://media-4.api-sports.io/flags/gb.svg',
//         season: 2023,
//         round: 'Regular Season - 12',
//       },
//       teams: {
//         home: {
//           id: 42,
//           name: 'Arsenal',
//           logo: 'https://media-4.api-sports.io/football/teams/42.png',
//           winner: true,
//         },
//         away: {
//           id: 44,
//           name: 'Burnley',
//           logo: 'https://media-4.api-sports.io/football/teams/44.png',
//           winner: false,
//         },
//       },
//       goals: {
//         home: 3,
//         away: 1,
//       },
//       score: {
//         halftime: {
//           home: 1,
//           away: 0,
//         },
//         fulltime: {
//           home: 3,
//           away: 1,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1126204,
//         referee: 'I. Kovacs',
//         timezone: 'UTC',
//         date: '2023-11-08T20:00:00+00:00',
//         timestamp: 1699473600,
//         periods: {
//           first: 1699473600,
//           second: 1699477200,
//         },
//         venue: {
//           id: 494,
//           name: 'Emirates Stadium',
//           city: 'London',
//         },
//         status: {
//           long: 'Match Finished',
//           short: 'FT',
//           elapsed: 90,
//         },
//       },
//       league: {
//         id: 2,
//         name: 'UEFA Champions League',
//         country: 'World',
//         logo: 'https://media-4.api-sports.io/football/leagues/2.png',
//         flag: null,
//         season: 2023,
//         round: 'Group B - 4',
//       },
//       teams: {
//         home: {
//           id: 42,
//           name: 'Arsenal',
//           logo: 'https://media-4.api-sports.io/football/teams/42.png',
//           winner: true,
//         },
//         away: {
//           id: 536,
//           name: 'Sevilla',
//           logo: 'https://media-4.api-sports.io/football/teams/536.png',
//           winner: false,
//         },
//       },
//       goals: {
//         home: 2,
//         away: 0,
//       },
//       score: {
//         halftime: {
//           home: 1,
//           away: 0,
//         },
//         fulltime: {
//           home: 2,
//           away: 0,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1035143,
//         referee: 'Stuart Attwell, England',
//         timezone: 'UTC',
//         date: '2023-11-04T17:30:00+00:00',
//         timestamp: 1699119000,
//         periods: {
//           first: 1699119000,
//           second: 1699122600,
//         },
//         venue: {
//           id: 562,
//           name: "St. James' Park",
//           city: 'Newcastle upon Tyne',
//         },
//         status: {
//           long: 'Match Finished',
//           short: 'FT',
//           elapsed: 90,
//         },
//       },
//       league: {
//         id: 39,
//         name: 'Premier League',
//         country: 'England',
//         logo: 'https://media-4.api-sports.io/football/leagues/39.png',
//         flag: 'https://media-4.api-sports.io/flags/gb.svg',
//         season: 2023,
//         round: 'Regular Season - 11',
//       },
//       teams: {
//         home: {
//           id: 34,
//           name: 'Newcastle',
//           logo: 'https://media-4.api-sports.io/football/teams/34.png',
//           winner: true,
//         },
//         away: {
//           id: 42,
//           name: 'Arsenal',
//           logo: 'https://media-4.api-sports.io/football/teams/42.png',
//           winner: false,
//         },
//       },
//       goals: {
//         home: 1,
//         away: 0,
//       },
//       score: {
//         halftime: {
//           home: 0,
//           away: 0,
//         },
//         fulltime: {
//           home: 1,
//           away: 0,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1136342,
//         referee: 'S. Hooper',
//         timezone: 'UTC',
//         date: '2023-11-01T19:30:00+00:00',
//         timestamp: 1698867000,
//         periods: {
//           first: 1698867000,
//           second: 1698870600,
//         },
//         venue: {
//           id: 598,
//           name: 'London Stadium',
//           city: 'London',
//         },
//         status: {
//           long: 'Match Finished',
//           short: 'FT',
//           elapsed: 90,
//         },
//       },
//       league: {
//         id: 48,
//         name: 'League Cup',
//         country: 'England',
//         logo: 'https://media-4.api-sports.io/football/leagues/48.png',
//         flag: 'https://media-4.api-sports.io/flags/gb.svg',
//         season: 2023,
//         round: 'Round of 16',
//       },
//       teams: {
//         home: {
//           id: 48,
//           name: 'West Ham',
//           logo: 'https://media-4.api-sports.io/football/teams/48.png',
//           winner: true,
//         },
//         away: {
//           id: 42,
//           name: 'Arsenal',
//           logo: 'https://media-4.api-sports.io/football/teams/42.png',
//           winner: false,
//         },
//       },
//       goals: {
//         home: 3,
//         away: 1,
//       },
//       score: {
//         halftime: {
//           home: 1,
//           away: 0,
//         },
//         fulltime: {
//           home: 3,
//           away: 1,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1035128,
//         referee: 'Tim Robinson, England',
//         timezone: 'UTC',
//         date: '2023-10-28T14:00:00+00:00',
//         timestamp: 1698501600,
//         periods: {
//           first: 1698501600,
//           second: 1698505200,
//         },
//         venue: {
//           id: 494,
//           name: 'Emirates Stadium',
//           city: 'London',
//         },
//         status: {
//           long: 'Match Finished',
//           short: 'FT',
//           elapsed: 90,
//         },
//       },
//       league: {
//         id: 39,
//         name: 'Premier League',
//         country: 'England',
//         logo: 'https://media-4.api-sports.io/football/leagues/39.png',
//         flag: 'https://media-4.api-sports.io/flags/gb.svg',
//         season: 2023,
//         round: 'Regular Season - 10',
//       },
//       teams: {
//         home: {
//           id: 42,
//           name: 'Arsenal',
//           logo: 'https://media-4.api-sports.io/football/teams/42.png',
//           winner: true,
//         },
//         away: {
//           id: 62,
//           name: 'Sheffield Utd',
//           logo: 'https://media-4.api-sports.io/football/teams/62.png',
//           winner: false,
//         },
//       },
//       goals: {
//         home: 5,
//         away: 0,
//       },
//       score: {
//         halftime: {
//           home: 1,
//           away: 0,
//         },
//         fulltime: {
//           home: 5,
//           away: 0,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1126180,
//         referee: 'G. Nyberg',
//         timezone: 'UTC',
//         date: '2023-10-24T19:00:00+00:00',
//         timestamp: 1698174000,
//         periods: {
//           first: 1698174000,
//           second: 1698177600,
//         },
//         venue: {
//           id: 1494,
//           name: 'Estadio Ramón Sánchez Pizjuán',
//           city: 'Sevilla',
//         },
//         status: {
//           long: 'Match Finished',
//           short: 'FT',
//           elapsed: 90,
//         },
//       },
//       league: {
//         id: 2,
//         name: 'UEFA Champions League',
//         country: 'World',
//         logo: 'https://media-4.api-sports.io/football/leagues/2.png',
//         flag: null,
//         season: 2023,
//         round: 'Group B - 3',
//       },
//       teams: {
//         home: {
//           id: 536,
//           name: 'Sevilla',
//           logo: 'https://media-4.api-sports.io/football/teams/536.png',
//           winner: false,
//         },
//         away: {
//           id: 42,
//           name: 'Arsenal',
//           logo: 'https://media-4.api-sports.io/football/teams/42.png',
//           winner: true,
//         },
//       },
//       goals: {
//         home: 1,
//         away: 2,
//       },
//       score: {
//         halftime: {
//           home: 0,
//           away: 1,
//         },
//         fulltime: {
//           home: 1,
//           away: 2,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//   ],
// });
