# xpense-backend

Based on https://github.com/ljlm0402/typescript-express-starter

# Installation instructions

Make sure you've installed

1. Node > V14
2. Docker Desktop
3. `npm i -g ts-node`
   
## Install packages

`npm i`

## Install backend (mongoDB etc in single click)

`docker-compose up -d`

If you want to close docker
`docker-compose down`

## Use MongoDB Compass to see your DB in action

url: mongodb://localhost:27017/mongoose

## start dev server

`npm run dev`

## start prod server
`npm run build && npm run start`