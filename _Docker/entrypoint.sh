#!/usr/bin/env bash

GREEN='\033[1;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e  "${GREEN} Composing Migrations container... ${NC} ${YELLOW} ${NC}"

#npm install && tsc && knex migrate:latest && npm run watch
npm install && tsc && npm pack && npm i -g promo-migrations-1.0.0.tgz
npm run dev
#bash
