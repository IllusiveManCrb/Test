import { Section } from './section.interface';
import { StatesList } from "./states-list.interface";

export interface SectionsList {
  section: Section;
  sectionState: StatesList;
}
