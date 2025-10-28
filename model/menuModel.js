const mongoose = require("mongoose");

const schema = mongoose.Schema;

const MenuSchema = new schema(
  {
    menu: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
    },
    description: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
    },
    category_id: {
      type: schema.Types.ObjectId,
      ref: "category",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("menu", MenuSchema);
