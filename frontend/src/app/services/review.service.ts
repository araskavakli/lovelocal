import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {first, map, share} from 'rxjs/operators';
import {convertSnaps} from './db-utils';
import {Review} from '../model/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private db: AngularFirestore) {
  }

  getReviewsOfStore(storeGoogleId: string): Observable<Review[]> {

    return this.db.collection('reviews', ref =>
      ref.where('google_id', '==', storeGoogleId))
      .snapshotChanges()
      .pipe(
        map(
          snaps => {
            const reviews = convertSnaps<Review>(snaps);
            return reviews.length !== 0 ? reviews : undefined;
          }
        ),
        first(),
        share()
      );


  }

}
