import {Store} from '../model/store';

export function addMapIconToStore(stores: any) {
  stores.forEach(store => {
    let storeType = store.type;

    switch (storeType.toLowerCase()) {

      case 'supermarket':
      case 'market':
      case 'hypermarket':
      case 'chinese supermarket':
      case 'discount supermarket': {

        store.icon = 'https://cdn2.iconfinder.com/data/icons/line-hero-essentials/32/Essentials_shopping_cart-48.png';
        break;

      }

      case 'farmers\' market':
      case 'produce market':
      case 'organic food store':
      case 'fruit and vegetable store':
      case 'grocery store':
      case 'greengrocer':
      case 'natural goods store':
      case 'gourmet grocery store':
      case 'indian grocery store':
      case 'kosher grocery store':
      case 'asian grocery store':
      case 'convenience store':
      case 'flea market': {

        store.icon = 'https://cdn0.iconfinder.com/data/icons/infectious-pandemics/480/07-healthy-48.png';
        break;

      }

      case 'bakery':
      case 'bagel shop': {

        store.icon = 'https://cdn4.iconfinder.com/data/icons/bekery-1/64/Bakery-bread-wheat-wheat_bread-48.png';
        break;

      }

      case 'pastry shop':
      case 'cake shop':
      case 'patisserie':
      case 'candy store':
      case 'chocolate artisan':
      case 'tea house':
      case 'espresso bar': {

        store.icon = 'https://cdn2.iconfinder.com/data/icons/party-new-years/128/Party_Newyears_Cake-48.png';
        break;

      }

      case 'diner':
      case 'cafe':
      case 'restaurant':
      case 'gluten-free restaurant': {

        store.icon = 'https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Food-Dome-48.png';
        break;

      }

      case 'butcher shop':
      case 'butcher shop deli': {

        store.icon = 'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C223-48.png';
        break;

      }

      case 'tobacco shop':
      case 'cigar shop':
      case 'vaporizer store': {

        store.icon = 'https://cdn1.iconfinder.com/data/icons/addiction-drugs-2/24/drugs_drug_addigtion_cigarette_Pipe-48.png';
        break;

      }

      default: {

        store.icon = 'https://cdn0.iconfinder.com/data/icons/city-elements-flaticon/64/book_shop-shop-architecture_and_city-buildings-business-books-sale-city-48.png';

      }

    }

  });

  return stores;
}
