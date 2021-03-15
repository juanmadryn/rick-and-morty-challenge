#!/bin/bash
npm install -g @angular/cli
cd backend
echo 'Installing backend dependencies...'
npm install
npm run build
echo 'Starting server...'
sudo npm start
cd ../frontend/
echo 'Installing frontend dependencies...'
npm install
ng build
mkdir ../backend/public
rm -rf ../backend/public/*
cp dist/rick-and-morty-challenge/* ../backend/public/
