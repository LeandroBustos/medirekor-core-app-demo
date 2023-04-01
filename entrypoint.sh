#!/bin/bash

if [ -d "/usr/src/app/node_modules" ]; then
  echo "Node modules found, skipping install"
else
  echo "Node modules not found, running npm install"
  npm install
fi

if [ -d "/usr/src/app/build" ]; then
  echo "TypeScript build found, skipping build"
else
  echo "TypeScript build not found, running npm run build"
  npm run build
fi

echo "Starting application"
npm run start