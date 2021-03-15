#!/bin/bash
cd backend
npm install
npm run build
npm start
cd ../frontend/
npm install
ng build
mv dist/rick-and-morty-challenge ../backend/public