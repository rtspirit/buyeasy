import mongoose from "mongoose";
const { Schema } = mongoose;

const itemsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    pricing: {
      type: Number,
      required: true,
    },
    images: {
      type: Array,
      required: true,
      default: [],
    },
    description: {
      type: String,
      required: true,
    },
    reviews: {
      overallRating: {
        type: Number,
        required: true,
      },
      numberOfReviews: {
        type: Number,
        required: true,
      },
    },
    dealOfTheDay: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
  }
);
itemsSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

itemsSchema.set("toJSON", { virtuals: true });

const ItemsModel = mongoose.model("listings", itemsSchema);

export default ItemsModel;
