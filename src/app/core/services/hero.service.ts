import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from 'src/app/models/hero.model';
import { HEROES } from 'src/app/models/mock.heroes';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
