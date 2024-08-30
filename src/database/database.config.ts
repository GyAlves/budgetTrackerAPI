import KnexSetup, { Knex } from 'knex';
import { Model } from 'objection';
import { env } from '@/env';

export const databaseConfig: Knex.Config = {
    client: 'sqlite3',
    connection: {
        filename: env.DATABASE_URL
    },
    useNullAsDefault: true,
    migrations: {
        extension: 'ts',
        directory: './src/database/migrations'
    }
}

const knex = KnexSetup(databaseConfig); // Creates an instance of knex used to interact with the database
Model.knex(knex); // This allows Objection to perform SQL operations using the knex instance.

export default knex;