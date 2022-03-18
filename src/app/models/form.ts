import { Answer } from './answer';
import { FormItem } from './form-item';

export interface Form {
  id: number;
  title: string;
  creator: string;
  creationDate: number;
  answers: Answer[];
  items: FormItem[];
}
