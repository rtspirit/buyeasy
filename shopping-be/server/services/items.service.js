import { toNumber } from "lodash";
import ItemsModel from "../models/items";

const saveItemtoDB = (newItemData) => {
  const newItem = new ItemsModel(newItemData);
  const promise = newItem.save();
  return promise;
};

const getItemsfromDB = () => {
  const promise = ItemsModel.find();
  return promise;
};

const getFewItemsFromDB = (numberOfItems) => {
  const promise = ItemsModel.find().limit(toNumber(numberOfItems));
  return promise;
};

const getItemDescFromDB = (id) => {
  const promise = ItemsModel.find({ _id: id });
  return promise;
};

export default {
  saveItemtoDB: saveItemtoDB,
  getItemsfromDB: getItemsfromDB,
  getFewItemsFromDB: getFewItemsFromDB,
  getItemDescFromDB: getItemDescFromDB,
};
