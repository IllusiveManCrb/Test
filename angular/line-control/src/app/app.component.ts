import { Component, OnInit } from '@angular/core';
import { SectionsList } from './core/interfaces/section-list.interface';
import { LineService } from './core/services/line.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
title = 'Bühler engineers';
sections?: SectionsList[];

constructor(private _lineService: LineService){}

ngOnInit(){
  this.sections = this._lineService.fetchSections();
}

}
