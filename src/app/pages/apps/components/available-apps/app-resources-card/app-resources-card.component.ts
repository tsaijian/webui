import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges,
} from '@angular/core';
import { Observable } from 'rxjs';
import { AvailableApp } from 'app/interfaces/available-app.interfase';

@Component({
  selector: 'ix-app-resources-card',
  templateUrl: './app-resources-card.component.html',
  styleUrls: ['./app-resources-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppResourcesCardComponent implements OnChanges {
  @Input() isLoading$: Observable<boolean>;
  @Input() app: AvailableApp;
  @Input() pool: string;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnChanges(): void {
    this.cdr.markForCheck();
  }
}
