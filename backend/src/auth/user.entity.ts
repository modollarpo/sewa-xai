
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string = '';

  @Column({ default: true })
  active: boolean = true;

  @Column({ unique: true })
  username: string = '';

  @Column({ unique: true, nullable: true })
  email?: string = '';

  @Column()
  passwordHash: string = '';

  @Column()
  role: string = '';

  @Column({ nullable: true })
  resetToken?: string = '';

  @Column({ nullable: true, type: 'datetime' })
  resetTokenExpiry?: Date = undefined;
}
