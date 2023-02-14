import { Component, OnInit } from '@angular/core';
import { HeroService } from '../core/services/hero.service';
import { Hero } from '../models/hero.model';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit{
 
  heroes: Hero[] = [];
 selectedHero?: Hero 
 
 constructor(private heroService: HeroService) {}
  ngOnInit(): void {
   this.getHeroes()
  }

  getHeroes():void {
   this.heroService.getHeroes().subscribe(hero => this.heroes = hero);
  }
  onSelect(hero: Hero): void{
    this.selectedHero = hero
  }
}
  