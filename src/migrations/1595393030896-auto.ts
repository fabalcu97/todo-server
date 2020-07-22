import {MigrationInterface, QueryRunner} from "typeorm";

export class auto_1595393030896 implements MigrationInterface {
    name = 'auto_1595393030896'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "task" ("id" SERIAL NOT NULL, "created" TIMESTAMP WITH TIME ZONE NOT NULL, "updated" TIMESTAMP WITH TIME ZONE NOT NULL, "title" character varying(64) NOT NULL, "text" text NOT NULL, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "created" TIMESTAMP WITH TIME ZONE NOT NULL, "updated" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "task"`);
    }

}
