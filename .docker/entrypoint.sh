#!/bin/bash

npm install
npm run build
npx typeorm migration:run -d ./dist/typeorm/data-source.js
npm run start:dev