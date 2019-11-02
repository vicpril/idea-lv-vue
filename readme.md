<p align="center"><img src="./public/images/logo-short-en.jpg"></p>

# <p align="center">[Ideas and Ideals](http://ideaidealy.nsuem.ru/en) <br><small>Science Journal</small></p>

The journal is a peer-reviewed publication. Founded in 2009.
Founders and Publishers of the Journal:

-  Novosibirsk State Technical University (NSTU)
-  Novosibirsk State University of Economics and Management (NSUEM)

Certificate of Registration: ПИ № ФС 77-34262 November, 26, 2008. Publication frequency: 4 issues per calendar year (31.03; 30.06; 30.09; 30.12)
Included in the list of peer-reviewed journals VAK (the serial № 594).
The main focus of the journal is research in the areas of Social Philosophy.
Journal "Ideas and Ideals" is included into the system of the Russian Science Citation Index (RISC) on the platform of eLIBRARY.ru.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Requirements

-  PHP >= 7.2
-  MySQL
-  Laravel 5.8
-  Node.js, NPM
-  Vue.js

### Installing

Clone the repository into local environment

```
git clone https://github.com/ideaidealy/main.git idea

cd idea
```

Install composer dependencies

```
composer install
```

Copy the `.env.example` to a new file named `.env`. Set up config in `.env` file according to your environment.

Set your application key to a random string

```
php artisan key:generate
```

Create database by you own.
Do migration for you database with seeding test data

```
php artisan db:fresh --seed
```

or you can upload data from .sql file

```
mysql –u <username> -p <database> < database/dump-full-2019_3.sql
```

### Using

By default you can get an access to Dashboard on `<your_sete_URL>/login` by login `admin` and password `123`.

You can change admin password using artisan command

```
php artisan changeAdminPassword
```

## Development

For changing code in Laravel's part of project just do it.

For changing Vue.js scripts (Dashboard components) or SASS install JS dependencies using NPM

```
npm install
```

You can build files using

```
npm run dev
```

or in the watch mode

```
npm run watch
```

## Credits

Viktor Prilepin

Do not hesitate to contact me if you have a question by sending an e-mail to [prilepinva@gmail.com](mailto:prilepinva@gmail.com)
