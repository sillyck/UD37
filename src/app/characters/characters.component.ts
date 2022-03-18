import { Component, OnInit, Input } from '@angular/core';
import { CharacterService } from 'src/app/characters/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: 'characters.component.html',
  styleUrls: ['characters.component.css']
})
export class CharactersComponent implements OnInit {
  @Input() personajes: any = null;

  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.CharactersService.devolver()
      .subscribe( result => this.personajes = result)
  }

}
