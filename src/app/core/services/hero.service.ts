import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from 'src/app/core/models/hero.model';
import { HEROES } from 'src/app/core/models/mock.heroes';
import { MessagesService } from './messages.service';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessagesService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes')
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(hero => hero.id === id)!;
    this.messageService.add(`HeroService: Fetched hero id= ${id}`)
    return of(hero);
  }
}
