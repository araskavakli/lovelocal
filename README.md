# Love Local

An online marketplace for local shops aiming to support businesses affected by the pandemic. The app lists the shops near the user coordinates and mark them on the map. The user can also view the customized pages of the shops and access information such as contact details, payment options and reviews (ongoing project). This repository only includes the backend of the Love Local project.
data.sql file which contains business informations is also excluded from the repository. 




<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Installation](#installation)
* [Usage](#usage)
* [Acknowledgements](#acknowledgements)



## About The Project

[![Product Name Screen Shot][lovelocal]](https://www.4local.store)

An online marketplace for local shops aiming to support businesses in Porto which are affected by the pandemic. The app lists the shops near the user coordinates and mark them on the map. The user can also view the customized pages of the shops and access information such as contact details, payment options and reviews (ongoing project). This repository only includes the backend of the Love Local project.


### Built With

* [Angular](https://angular.io)
* [Bootstrap](https://getbootstrap.com)
* [Firebase](https://firebase.google.com)


## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.


### Installation

1. Get a free API Key at [Google Maps API](https://developers.google.com/maps/documentation/javascript/get-api-key)
2. Clone the repo
```sh
git clone https://github.com/araskavakli/lovelocal
```
3. Install NPM packages
```sh
npm install
```
4. Enter your API in `src/index.html` at line 31 by replacing your API Key with your YOUR_API_Key.
```HTML
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&language=en"></script>
```


## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_


## NOTE   

For easier geoquerying and faster DB connection the app has been migrated to Google Firebase. Previously the backend was built with Java with the following stack:

### Used Technologies

- Java 13
- Spring Boot (incl. Spring Security for authentication and authorization)
- JPA, Hibernate
- PostgreSQL 


## Acknowledgements
* [Unsplash](https://unsplash.com/)
* [Bootstrap Studio](https://bootstrapstudio.io/)

[lovelocal]: https://github.com/araskavakli/lovelocal/img/LoveLocal.png