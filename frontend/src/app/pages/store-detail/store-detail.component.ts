import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StoreService} from '../../services/store.service';
import {Store} from '../../model/store';
import {Review} from '../../model/review';
import {first, share, switchMap, tap} from 'rxjs/operators';
import {ReviewService} from '../../services/review.service';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.css']
})
export class StoreDetailComponent implements OnInit {

  store: Store;
  reviews: Review[];

  constructor(private route: ActivatedRoute,
              private storeService: StoreService,
              private reviewService: ReviewService) {
  }

  ngOnInit(): void {

    const storeId = this.route.snapshot.paramMap.get('id');
    this.storeService.findStoreById(storeId).pipe(
      switchMap(store => {
        this.store = store;
        let storeGoogleId = store.google_id;
        return this.reviewService.getReviewsOfStore(storeGoogleId);
      }),
      tap(reviews => {
        this.reviews = reviews;
      }),
      first(),
      share()
    ).subscribe(() => {
    });

  }

}
