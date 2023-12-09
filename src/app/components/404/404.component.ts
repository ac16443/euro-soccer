import { Component, Input, OnInit } from '@angular/core';
import { FootballService } from '../../football.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-team-standings',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './404.component.html',
  styleUrl: './404.component.css',
})
export class NotFoundComponent implements OnInit {
  constructor(private service: FootballService) {}
  ngOnInit(): void {}
}
