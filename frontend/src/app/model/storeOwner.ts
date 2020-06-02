import { Store } from './store';

export interface StoreOwner {

  id: number;
  firstname: string;
  lastName: string;
  phoneNumber: string;
  stores: Store[];

}
