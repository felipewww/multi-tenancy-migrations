#### Knex migrations
official doc: http://knexjs.org/#Migrations

##### Common commands

```
$ knex migrate:make migration_name
```

```
$ knex migrate:rollback --all
```

##### Run as CLI

Remeber to add a shebang line "#!/usr/bin/env node" into main file.

```
$ npm pack
$ npm i -g promo-migrations-1.0.0.tgz
$ promo mgt
```

O COMANDO CORRETO É
node dist/cli.js mgt
