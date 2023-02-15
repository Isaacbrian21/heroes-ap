import { Component, OnInit } from '@angular/core';
import { HeroService } from '../core/services/hero.service';
import { Hero } from '../models/hero.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = []
  constructor(private heroservice: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroservice.getHeroes().subscribe(h => this.heroes = h.slice(1, 5))
  }

}
