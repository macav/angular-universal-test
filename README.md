# Angular Universal

The purpose of this project is to have an example setup with Angular universal (SSR) to be able to do better SEO for Angular app.

It was created by using [@angular/cli](https://cli.angular.io/) and this guide https://angular.io/guide/universal

Some smaller changes had to be done due to an outdated documentation.

## Setup
Install dependencies with

```
npm install
```

## Run

To run the server, run:

```
npm run build:ssr && npm run serve:ssr
```

which builds the app in `prod` mode and serves it via Express server.
