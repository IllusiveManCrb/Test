import { Component, Input } from '@angular/core';
import { SectionsList } from 'src/app/core/interfaces/section-list.interface';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.css']
})
export class MenuComponentComponent{

  @Input() sections?: SectionsList[];

  constructor() { }


}
