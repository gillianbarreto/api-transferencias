import { Transfer } from '../interfaces/transfer.interface';
import { sequelize, DataTypes } from './connection-db.model';

export const Transfers = sequelize.define(
  'Transfers',
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.BIGINT
    },
    contact_id: {
      type: DataTypes.BIGINT
    },
    contact_rut: DataTypes.STRING,
    contact_name: DataTypes.STRING,
    bank_name: DataTypes.STRING,
    account_type_name: DataTypes.STRING,
    account_number: DataTypes.STRING,
    message: DataTypes.STRING,
    amount: DataTypes.DOUBLE,
    status: DataTypes.BOOLEAN,
    created_at: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

export const getTransfersById = async (id: number) => {
  return await Transfers.findByPk(id);
}

export const getTransfersByUserAll = async (user_id: number) => {
  return await Transfers.findAll({
    where: { user_id },
    order: [['created_at', 'DESC']],
    limit: 50
  });
}

export const addTransferByUser = async (data: Transfer) => {
  const transfer = await Transfers.create({
    user_id: data.user_id,
    contact_id: data.contact_id,
    contact_rut: data.contact_rut,
    contact_name: data.contact_name,
    bank_name: data.bank_name,
    account_type_name: data.account_type_name,
    account_number: data.account_number,
    message: data.message,
    amount: data.amount,
    status: true,
    created_at: new Date()
  });
  return transfer;
}
