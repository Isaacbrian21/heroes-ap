import { Component } from '@angular/core';
import { Hero } from '../models/hero.model';
import { HEROES } from '../models/mock.heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: "Super Man"
  }
  heroes = HEROES;
 selectedHero?: Hero 
 
  onSelect(hero: Hero): void{
    this.selectedHero = hero
  }
}
  