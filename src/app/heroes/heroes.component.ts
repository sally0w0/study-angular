import { Component, OnInit } from '@angular/core';
import { HeroDetail } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  hero: HeroDetail = {
    id: 1,
    name: 'スーパーマン'
  };

  constructor() { }

  ngOnInit() {
  }

}
