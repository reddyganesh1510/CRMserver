const opts = { toJSON: { virtuals: true } };
const mongoose = require("mongoose");
const companySchema = new mongoose.Schema(
  {
    companyname: { type: String },
    companywebsite: { type: String },
    companyphonenumber: { type: String },
    companyaddress: { type: String },
    companycity: { type: String },
    companystate: { type: String },
    companycountry: { type: String },
    industrylist: { type: String },
  },
  opts
);
module.exports = User = mongoose.model("company", companySchema);
