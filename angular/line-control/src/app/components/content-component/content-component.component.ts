import { Component, Input } from '@angular/core';
import { SectionsList } from 'src/app/core/interfaces/section-list.interface';

@Component({
  selector: 'app-content-component',
  templateUrl: './content-component.component.html',
  styleUrls: ['./content-component.component.css']
})
export class ContentComponentComponent {


  @Input() sections?: SectionsList[];

  constructor() {}

}
