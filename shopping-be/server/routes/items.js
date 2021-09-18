import express from "express";
import itemsController from "./../controllers/items.controller";

const router = express.Router();

/* get all the items for sale */
router.route("/save").post(itemsController.saveNewItem);
router.route("/all").get(itemsController.getItems);
router.route("/all/:numberOfItems").get(itemsController.getFewItems);
router.route("/description/:productID").get(itemsController.getItemDescription);

export default router;
