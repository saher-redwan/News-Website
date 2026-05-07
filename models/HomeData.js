import mongoose from "mongoose";

const HomeDataSchema = new mongoose.Schema(
  {
    page: {
      type: String,
      required: true,
    },

    hero: {
      type: mongoose.Schema.Types.Mixed,
    },

    section2: {
      type: mongoose.Schema.Types.Mixed,
    },

    section3_Videos: {
      type: mongoose.Schema.Types.Mixed,
    },

    section3: {
      type: mongoose.Schema.Types.Mixed,
    },

    section4: {
      type: mongoose.Schema.Types.Mixed,
    },

    section5: {
      type: mongoose.Schema.Types.Mixed,
    },

    section6: {
      type: mongoose.Schema.Types.Mixed,
    },

    section7: {
      type: mongoose.Schema.Types.Mixed,
    },
    section8: {
      type: mongoose.Schema.Types.Mixed,
    },
  },
  {
    timestamps: true,
  }
);

const HomeData =
  mongoose.models.HomeData ||
  mongoose.model("HomeData", HomeDataSchema, "news");

export default HomeData;