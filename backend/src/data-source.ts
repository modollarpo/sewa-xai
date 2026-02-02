import { DataSource } from 'typeorm';
import { User } from './auth/user.entity';
// Add other entities as needed

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'dolapo',
  password: 'Aquila2615',
  database: 'sewa',
  entities: [__dirname + '/auth/*.entity.{ts,js}'], // Only include entity files
  migrations: [__dirname + '/migrations/*.{ts,js}'],
  synchronize: false, // Use migrations in production
});
