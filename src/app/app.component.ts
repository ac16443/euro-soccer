import { Component } from '@angular/core';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import {
  RouterOutlet,
  RouterLink,
  RouterModule,
  RouterLinkActive,
} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';
import { FootballService } from './football.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [FootballService],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    RouterModule,
    HttpClientModule,
    NgFor,
    NgForOf,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'euro-leagues';

  constructor() {}
}
