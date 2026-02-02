"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'dolapo',
    password: 'Aquila2615',
    database: 'sewa',
    entities: [__dirname + '/auth/*.entity.{ts,js}'],
    migrations: [__dirname + '/migrations/*.{ts,js}'],
    synchronize: false,
});
//# sourceMappingURL=data-source.js.map