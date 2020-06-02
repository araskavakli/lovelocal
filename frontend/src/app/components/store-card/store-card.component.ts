import { Component, OnInit, Input } from '@angular/core';
import { Store } from 'src/app/model/store';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.css']
})
export class StoreCardComponent implements OnInit {

  @Input()
  store: Store;

  constructor() { }

  ngOnInit(): void {
  }

}
