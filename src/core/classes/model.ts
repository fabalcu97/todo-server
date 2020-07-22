import {
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  SaveOptions,
} from 'typeorm';
import { ObjectType, Field } from '@graphql';

@ObjectType()
export abstract class BaseModel extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  private id: number;

  @Field()
  @Column({ type: 'timestamptz', nullable: false })
  private created: string = new Date().toISOString();

  @Field()
  @Column({ type: 'timestamptz', nullable: false })
  private updated: string;

  save = (options?: SaveOptions): Promise<this> => {
    this.updated = new Date().toISOString();
    return super.save(options);
  };

  constructor(fields: any = {}) {
    super();
    Object.keys(fields).forEach(attribute => {
      this[attribute] = fields[attribute];
    });
  }
}
