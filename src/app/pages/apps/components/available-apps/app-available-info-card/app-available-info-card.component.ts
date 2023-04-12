import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges,
} from '@angular/core';
import { Observable } from 'rxjs';
import { AvailableApp } from 'app/interfaces/available-app.interfase';

@Component({
  selector: 'ix-app-available-info-card',
  templateUrl: './app-available-info-card.component.html',
  styleUrls: ['./app-available-info-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppAvailableInfoCardComponent implements OnChanges {
  @Input() isLoading$: Observable<boolean>;
  @Input() app: AvailableApp;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnChanges(): void {
    this.cdr.markForCheck();
  }
}
