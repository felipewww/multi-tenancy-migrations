FROM node:12-slim

WORKDIR /app

#RUN apt-get update && apt-get install -y git
RUN npm install -g typescript
RUN npm install -g nodemon
#RUN npm install -g husky

# globally becaus of migrations
RUN npm install -g knex

COPY _Docker/entrypoint.sh /entrypoint.sh
RUN chmod 777 /entrypoint.sh
