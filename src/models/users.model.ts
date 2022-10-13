import { sequelize, DataTypes } from './connection-db.model';

export const Users = sequelize.define(
  'users',
  {
    user_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    rut: DataTypes.STRING,
    password: DataTypes.STRING,
    fullname: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    created_at: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: null
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

export const getUserById = async (user_id: number) => {
  return await Users.findByPk(user_id);
}

export const getUserByRut = async (rut: string) => {
  return await Users.findOne({ where: { rut } });
}
