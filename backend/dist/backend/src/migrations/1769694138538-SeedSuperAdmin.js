"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedSuperAdmin1769694138538 = void 0;
class SeedSuperAdmin1769694138538 {
    constructor() {
        this.name = 'SeedSuperAdmin1769694138538';
    }
    async up(queryRunner) {
        const bcrypt = require('bcryptjs');
        const passwordHash = await bcrypt.hash('SuperSecure!2026', 10);
        await queryRunner.query(`
            INSERT INTO \`user\` (id, active, username, email, passwordHash, role)
            VALUES (UUID(), 1, 'superadmin', 'superadmin@sewa.local', '${passwordHash}', 'super_admin')
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`resetTokenExpiry\` \`resetTokenExpiry\` datetime NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`resetToken\` \`resetToken\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`email\` \`email\` varchar(255) NULL DEFAULT 'NULL'`);
    }
}
exports.SeedSuperAdmin1769694138538 = SeedSuperAdmin1769694138538;
//# sourceMappingURL=1769694138538-SeedSuperAdmin.js.map