import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedSuperAdmin1769694138538 implements MigrationInterface {
    name = 'SeedSuperAdmin1769694138538'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Optional seed: only runs when SUPERADMIN_PASSWORD is provided.
        const username = process.env.SUPERADMIN_USERNAME || 'superadmin';
        const email = process.env.SUPERADMIN_EMAIL || 'superadmin@sewa.local';
        const password = process.env.SUPERADMIN_PASSWORD;
        if (!password) {
            return;
        }

        const bcrypt = require('bcryptjs');
        const passwordHash = await bcrypt.hash(password, 10);
        await queryRunner.query(`
            INSERT INTO \`user\` (id, active, username, email, passwordHash, role)
            VALUES (UUID(), 1, '${username}', '${email}', '${passwordHash}', 'super_admin')
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`resetTokenExpiry\` \`resetTokenExpiry\` datetime NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`resetToken\` \`resetToken\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`email\` \`email\` varchar(255) NULL DEFAULT 'NULL'`);
    }

}
