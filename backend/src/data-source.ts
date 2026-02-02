import 'dotenv/config';
import { DataSource } from 'typeorm';
import { User } from './auth/user.entity';

const dbPort = parseInt(process.env.DB_PORT || '3306', 10);

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || '127.0.0.1',
  port: Number.isFinite(dbPort) ? dbPort : 3306,
  username: process.env.DB_USER || 'sewa_user',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'sewa',
  entities: [User], // Use direct class references for CLI compatibility
  migrations: [__dirname + '/migrations/*.{ts,js}'],
  synchronize: false, // Use migrations in production
});
