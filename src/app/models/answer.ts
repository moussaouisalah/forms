import { AnswerItem } from './answer-item';

export interface Answer {
  creator: string;
  creationDate: number;
  items: AnswerItem[];
}
