import { Component } from '@angular/core';
import { FormData } from './formulaire/formulaire.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tp2';
  submittedFormData: FormData | null = null;
  data: FormData = {
    firstname: '',
    lastname: '',
    gender: '',
    address: '',
    postal_code: '',
    city: '',
    country: '',
    phone: '',
    email: '',
    login: '',
    password: '',
  };

  onValidate = (data: FormData) => {
    this.submittedFormData = data;
  };
}
