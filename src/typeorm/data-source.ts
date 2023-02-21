import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  driver: undefined,
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'devtrainingnestjs',
  synchronize: true,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  subscribers: [],
});
