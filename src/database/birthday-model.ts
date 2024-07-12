import { CreationOptional } from "sequelize";
import { Model, Column, Table, DataType } from "sequelize-typescript";

@Table({
  tableName: "birthday",
  timestamps: false,
})
export class birthday extends Model {
  declare id: CreationOptional<number>;

  @Column({
    type: DataType.STRING,
  })
  name!: string;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  birthdayId!: number;

  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
  })
  date!: Date;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  senderId!: number;
}
