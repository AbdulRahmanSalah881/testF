import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-line',
  imports: [],
  templateUrl: './line.component.html',
  styleUrl: './line.component.css'
})
export class LineComponent {
  @Input() backgroundColor: string = '';
}
