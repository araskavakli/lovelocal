import {StoreService} from '../../services/store.service';
import {Component, OnInit} from '@angular/core';
import {Store} from 'src/app/model/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {

  public stores$: Observable<Store[]>;

  constructor(private storeService: StoreService) {
  }

  ngOnInit(): void {

    this.stores$ = this.storeService.stores$;

  }

}
