# Weather Api backend for [reason-workshop-2](https://github.com/nikgraf/reason-workshop-2)

## Adding Secret Keys

Install [now-cli](https://github.com/zeit/now-cli) with `npm i -g now-cli`.

Makes use of Google Maps geocoding API and Dark Sky weather API
Get API keys at <https://console.developers.google.com> & <https://darksky.net/dev/>

Once you have your keys, run:

```sh
$ mv now-secrets-example.json now-secrets.json
```

then add your keys to it.

## Running locally

```sh
$ yarn install && yarn start
```

## Deploying with Now Version 1

Install [now-cli](https://github.com/zeit/now-cli) with `npm i -g now-cli`.

Run `now` in terminal.
This is deployed at <https://weather-api-graphql.now.sh/graphql>