import { sequelize, DataTypes } from './connection-db.model';
import { Contacts } from './contacts.model';

export const AccountsType = sequelize.define(
  'accounts_type',
  {
    account_type_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    created_at: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: null
    },
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

AccountsType.hasMany(Contacts, {
  foreignKey: 'account_type_id',
});

Contacts.belongsTo(AccountsType, {
  foreignKey: 'account_type_id',
});

export const getAccountTypeById = async (account_type_id: number) => {
  return await AccountsType.findByPk(account_type_id);
}

export const getAccountsTypeAll = async () => {
  return await AccountsType.findAll({
    attributes: ['account_type_id', 'name'],
    where: { status: true }
  });
}
