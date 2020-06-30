import {MigrationInterface, QueryRunner} from "typeorm";

export class data1593407297506 implements MigrationInterface {
    name = 'data1593407297506'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "updated" SET DEFAULT '"2020-06-29T05:08:20.522Z"'`);
        await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "updated" SET DEFAULT '"2020-06-29T05:08:20.522Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updated" SET DEFAULT '"2020-06-29T05:08:20.522Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updated" SET DEFAULT '2020-06-29 00:07:51.984-05'`);
        await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "updated" SET DEFAULT '2020-06-29 00:07:51.984-05'`);
        await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "updated" SET DEFAULT '2020-06-29 00:07:51.984-05'`);
    }

}
