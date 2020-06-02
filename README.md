## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Installation](#installation)
  * [Prerequisites](#prerequisites)
* [Usage](#usage)
* [Notes](#notes)
* [Acknowledgements](#acknowledgements)


## About The Project

![Love Local](/img/LoveLocal.png "Love Local")

Like everywhere else in the world, many local businesses in Porto are experiencing financial difficulties during COVID-19 pandemic. Most of these stores either do not have a website, or do not offer online purchase option to their customers.

Love Local is an online marketplace for local stores aiming to support businesses in Porto which are affected by the pandemic. The web app lists stores near the user coordinates and show them on the map. User can increase or decrease the search radius and load more stores. User can also view the customized pages of the shops and access information such as contact details, payment options and reviews (ongoing project). 

The deployed project can be seen here:

https://www.4local.store


### Built With

* [Angular](https://angular.io)
* [Bootstrap](https://getbootstrap.com)
* [Firebase](https://firebase.google.com)


## Getting Started

To run the project locally node.js and Angular must be installed.

### Prerequisites

* [Node.js](https://nodejs.org/en/download/)
* Angular
```sh
npm install -g @angular/cli
```


### Installation

1. Get a free API Key at [Google Maps API](https://developers.google.com/maps/documentation/javascript/get-api-key)
2. Clone the repo
```sh
git clone https://github.com/araskavakli/lovelocal.git
```
3. Change to your local ~/lovelocal/frontend directory and install NPM packages.
```sh
npm install
```
4. Enter your API in `src/index.html` at line 31 by replacing your API Key with YOUR_API_Key.
```HTML
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&language=en"></script>
```
5. Serve the project
```sh
ng serve
```


<!-- ## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_ -->

## Usage

For now, the DB includes only the stores in Porto, Portugal. Therefore the Google Places API's autocomplete feature in address search bar only returns the address in and around Porto.

## Notes

For easier geoquerying and faster DB connection the app has been migrated to Google Firebase. Previously the backend was built with Java with the following stack:

**Used Technologies**

- Java 13
- Spring Boot (incl. Spring Security for authentication and authorization)
- JPA, Hibernate
- PostgreSQL 


## Acknowledgements
* [Unsplash](https://unsplash.com/)
* [Bootstrap Studio](https://bootstrapstudio.io/)
