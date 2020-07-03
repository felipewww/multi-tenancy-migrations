#!/usr/bin/env node
import './config'

import yargs, {Arguments, Argv} from "yargs";

import {Migrations} from "./Migrations/Migrations";
import {Seeds} from "./Seeders/Seeds";

const yargsInstance = yargs.scriptName("promo".green.bold.toString())
    .usage('$0 <cmd> [args]')
    .command(
        'mgt [action] [seed]',
        'Description:'+' '+'Runs the migrations UP or DOWN for all clients'.yellow,
        migrateUpBuilder,
        migrateUpHandler
    )
    .command(
        'seed [action]',
        'Description:'+' '+'Runs the migrations UP or DOWN for all clients'.yellow,
        seedUpBuilder,
        seedUpHandler
    )

yargsInstance.help().argv

function migrateUpBuilder(yargs: Argv<any>) {
    yargs.positional('action'.green.bold.toString(), {
        type: 'string',
        describe: 'Runs knex migrations action',
        choices: ['up', 'down']
    })
}

function seedUpBuilder(yargs: Argv<any>) {
    yargs.positional('action'.green.bold.toString(), {
        type: 'string',
        describe: 'Runs knex seeder action',
        choices: ['up', 'down']
    })
}

function migrateUpHandler(argv: Arguments<any>) {
    new Migrations(yargsInstance).handle(argv);
}

function seedUpHandler(argv: Arguments<any>) {
    new Seeds(yargsInstance).handle(argv);
}
