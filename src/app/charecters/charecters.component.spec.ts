import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharectersService } from './charecters.service';

@Component({
  selector: 'app-charecters',
  templateUrl: './charecters.component.html',
  styleUrls: ['./charecters.component.css']
})
export class CharectersComponent implements OnInit {

  charecters:any = null;

  constructor(private charectersService: CharaectersService) {}

  ngOnInit(){
    this.charectersService.retornar()
      .subscribe( result => this.charecters = result)
  }
}
