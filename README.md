# xpense-backend

Based on https://github.com/ljlm0402/typescript-express-starter

# Installation instructions

Make sure you've installed

1. Node >= V14
2. Docker Desktop
3. `npm i -g ts-node`
4. Postman or any other API-test tool
5. MongoDB Compass (Database Viewer Tool for MongoDB)

## Install packages

`npm i`

## Install backend (mongoDB etc in single click)

`docker-compose up -d`

If you want to close docker
`docker-compose down`

### Start backend once

If you previously installed the backend in docker as shown previously, just open docker desktop and click the 'play/start' button. If you want a clean install each time you start the server, use the `docker-compose up -d` command.

## Use MongoDB Compass to see your DB in action

url: mongodb://localhost:27017/mongoose

## start dev server

`npm run dev`

All server requests are accessible through localhost:8001 on your machine.

To test a request, open postman, import the `json` file and start testing.
If you refresh your MongoDB Compass DB, you should see changes.

## start prod server

`npm run build && npm run start`
