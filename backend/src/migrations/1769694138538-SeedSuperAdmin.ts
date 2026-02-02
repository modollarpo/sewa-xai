import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedSuperAdmin1769694138538 implements MigrationInterface {
    name = 'SeedSuperAdmin1769694138538'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Insert a secure super-admin user (username: superadmin, password: SuperSecure!2026, role: super_admin)
        const bcrypt = require('bcryptjs');
        const passwordHash = await bcrypt.hash('SuperSecure!2026', 10);
        await queryRunner.query(`
            INSERT INTO \`user\` (id, active, username, email, passwordHash, role)
            VALUES (UUID(), 1, 'superadmin', 'superadmin@sewa.local', '${passwordHash}', 'super_admin')
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`resetTokenExpiry\` \`resetTokenExpiry\` datetime NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`resetToken\` \`resetToken\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`email\` \`email\` varchar(255) NULL DEFAULT 'NULL'`);
    }

}
