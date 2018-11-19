import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  selectedHero: Hero;
  heroes: Hero[] = [];

  onHeroSelect = (hero: Hero): void => {
    this.messageService.add('onHeroSelect:' + hero.id + hero.name);
    this.selectedHero = hero;
    console.log(hero);
  }
  getHeroes = (): void => {
    this.heroService.getHeroes()
        .subscribe((heroes) => {
          this.heroes = heroes;
        });
  }

  ngOnInit() {
    this.getHeroes();
  }

}
