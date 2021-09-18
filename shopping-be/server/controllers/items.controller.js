import { get } from "lodash";
import itemsService from "./../services/items.service";

const saveNewItem = (req, res) => {
  const newItem = { ...req.body };
  console.log(newItem, "Trying to save the new item");
  const promise = itemsService.saveItemtoDB(newItem);
  promise
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      console.log("Error" + err);
      res.status(400).json(err.errors);
    });
};

const getItems = (req, res) => {
  const promise = itemsService.getItemsfromDB();
  promise
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      console.log("Error" + err);
      res.status(400).json(err.errors);
    });
};

const getFewItems = (req, res) => {
  const numberOfItems = get(req, ["params", "numberOfItems"], 0);
  const promise = itemsService.getFewItemsFromDB(numberOfItems);
  promise
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      console.log("Error" + err);
      res.status(400).json(err.errors);
    });
};

const getItemDescription = (req, res) => {
  const id = get(req, ["params", "productID"], null);
  const promise = itemsService.getItemDescFromDB(id);
  promise
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      console.log("Error" + err);
      res.status(400).json(err.errors);
    });
};

export default {
  saveNewItem: saveNewItem,
  getItems: getItems,
  getFewItems: getFewItems,
  getItemDescription: getItemDescription,
};
