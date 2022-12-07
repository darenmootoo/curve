const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const trackSchema = new Schema(
  {
    Title: {
      type: String,
      required: true,
    },
    Version: String,
    Artist: String,
    ISRC: {
      type: String,
      required: true,
    },
    "P Line": String,
    Aliases: Array,
    "Contract ID": {
      type: Schema.Types.ObjectId,
      ref: "Contract",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Track", trackSchema);
