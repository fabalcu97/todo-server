import {MigrationInterface, QueryRunner} from "typeorm";

export class auto1595393601811 implements MigrationInterface {
    name = 'auto1595393601811'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" RENAME COLUMN "text" TO "description"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" RENAME COLUMN "description" TO "text"`);
    }

}
