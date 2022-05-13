import { Injectable } from '@angular/core';
import { lineSections } from '../data/line-sections'
import { lineStates } from '../data/line-states'
import { SectionsList } from '../interfaces/section-list.interface';
import { Section } from '../interfaces/section.interface';

@Injectable({
  providedIn: 'root'
})
export class LineService {

  constructor() { }

  fetchSections(): SectionsList[] {
    return lineSections.map((section: Section) => {
      return { section, sectionState: lineStates[Math.floor(Math.random() * (lineStates.length+1))] || lineStates[0] };
    });
  }

}
