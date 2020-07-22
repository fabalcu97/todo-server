import { Column, Entity } from 'typeorm';

import { BaseModel } from '@baseClasses';
import { ObjectType, Field } from '@graphql';

@Entity()
@ObjectType()
export class Task extends BaseModel {
  @Field()
  @Column({
    type: 'varchar',
    length: 64,
  })
  title: string;

  @Field()
  @Column('text')
  description: string;
}
