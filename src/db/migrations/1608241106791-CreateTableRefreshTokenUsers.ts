/* eslint-disable indent */
import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateTableRefreshTokenUsers1608241106791
  implements MigrationInterface {
  name = 'CreateTableRefreshTokenUsers1608241106791'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "users_refresh_token" ("id" SERIAL NOT NULL, "refreshToken" character varying NOT NULL, "valid" boolean NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "users" uuid, CONSTRAINT "UQ_829ebe5ea99b29cefedd2200d13" UNIQUE ("refreshToken"), CONSTRAINT "PK_6c9edee8fa924d444434b75423e" PRIMARY KEY ("id"))'
    )
    await queryRunner.query(
      'ALTER TABLE "users_refresh_token" ADD CONSTRAINT "FK_31ac22cff854baebc4999d01f63" FOREIGN KEY ("users") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION'
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "users_refresh_token" DROP CONSTRAINT "FK_31ac22cff854baebc4999d01f63"'
    )
    await queryRunner.query('DROP TABLE "users_refresh_token"')
  }
}
