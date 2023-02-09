import { Component, Input } from '@angular/core';
import { FormData } from '../formulaire/formulaire.component';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css'],
})
export class RecapComponent {
  @Input() data: FormData | null = null;
}
