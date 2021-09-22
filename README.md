# A starter webpack project for React with databases

This is a starter project that uses webpack to transpile and bundle ES6 React code. To use, consider these steps:

* Use as template or fork this repo
* Rename your repo according to the app you're building

```sh
git clone https://github.com/[your-account]/[your-app].git
cd [your-app] && npm i
```

To initialise your database
```
npm run knex migrate:latest
npm run knex seed:run
```

To start the development server with a watcher that rebuilds your code
```sh
npm run dev
``` 
