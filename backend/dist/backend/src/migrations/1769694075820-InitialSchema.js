"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialSchema1769694075820 = void 0;
class InitialSchema1769694075820 {
    constructor() {
        this.name = 'InitialSchema1769694075820';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` varchar(36) NOT NULL, \`active\` tinyint NOT NULL DEFAULT 1, \`username\` varchar(255) NOT NULL, \`email\` varchar(255) NULL, \`passwordHash\` varchar(255) NOT NULL, \`role\` varchar(255) NOT NULL, \`resetToken\` varchar(255) NULL, \`resetTokenExpiry\` datetime NULL, UNIQUE INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` (\`username\`), UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }
}
exports.InitialSchema1769694075820 = InitialSchema1769694075820;
//# sourceMappingURL=1769694075820-InitialSchema.js.map