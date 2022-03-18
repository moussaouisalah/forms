export enum FormItemType {
  text,
  textarea,
  number,
  date,
}

export interface FormItem {
  name: string;
  type: FormItemType;
  isRequired: boolean;
}
