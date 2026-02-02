module.exports = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 3306,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'sewa',
  entities: [__dirname + '/src/**/*.entity.{ts,js}'], // Only include entity files
  synchronize: true, // Set to false in production and use migrations
};
