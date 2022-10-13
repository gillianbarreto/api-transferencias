import { Contact } from '../interfaces/contact.interface';
import { AccountsType } from './accounts-type.model';
import { sequelize, DataTypes } from './connection-db.model';

export const Contacts = sequelize.define(
  'contacts',
  {
    contact_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.BIGINT
    },
    fullname: DataTypes.STRING,
    alias: DataTypes.STRING,
    rut: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    bank_id: DataTypes.STRING,
    bank_name: DataTypes.STRING,
    account_type_id: DataTypes.TINYINT,
    account_number: DataTypes.STRING,
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

export const getContactsById = async (contact_id: number) => {
  return await Contacts.findByPk(contact_id);
}

export const getContactsByUserAll = async (user_id: number) => {
  return await Contacts.findAll({
    where: { user_id },
    attributes: { exclude: ['user_id', 'created_at', 'updated_at', 'status'] },
    include: { model: AccountsType, attributes: ['name'] }
  });
}

export const addContactByUser = async (data: Contact) => {
  const contact = await Contacts.create({
    user_id: data.user_id,
    fullname: data.fullname,
    alias: data.alias,
    rut: data.rut,
    email: data.email,
    phone: data.phone,
    bank_id: data.bank_id,
    bank_name: data.bank_name,
    account_type_id: data.account_type_id,
    account_number: data.account_number,
    status: true,
    created_at: new Date()
  });
  return contact;
}
