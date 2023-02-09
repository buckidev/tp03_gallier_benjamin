import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export type FormData = {
  lastname: string;
  firstname: string;
  gender: string;
  address: string;
  postal_code: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  login: string;
  password: string;
};

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
})
export class FormulaireComponent implements OnInit {
  @Input() data: FormData | undefined;
  @Output() callback = new EventEmitter<FormData>();

  ngOnInit() {}

  onInput(key: string, value: any): void {
    // @ts-ignore
    this.data[key] = value;
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  onClickValidate(): FormData {
    if (this.data) {
      const clonedData = { ...this.data };
      this.callback.emit(clonedData);
      return this.data;
    }
    throw new Error('Data est null');
  }
}
