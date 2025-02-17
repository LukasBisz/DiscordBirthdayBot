import { CreationOptional } from "sequelize";
import { Model, Column, Table, DataType } from "sequelize-typescript";

@Table({
  tableName: "birthdays",
  timestamps: false,
})
export class birthday extends Model {
  declare id: CreationOptional<number>;

  @Column({
    type: DataType.STRING,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  birthdayUserId!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  birthdate!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  birthYear!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  addedById!: string;

  @Column({
    type: DataType.DATEONLY,
  })
  lastDisplayedAt!: Date;
}
