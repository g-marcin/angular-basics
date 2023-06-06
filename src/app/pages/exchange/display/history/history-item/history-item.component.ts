import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.scss'],
})
export class HistoryItemComponent {
  @Input() date: string | number = '';
  @Input() rate: string | number = '';
}
