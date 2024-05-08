const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const auditSchema = Schema({
  timestamp: { type: Date, default: Date.now },
  microservice: String,
  url: String,
  method: String,
  statusCode: Number,
  userId: String,
  userAgent: String,
  result: String,
  success: Boolean,
  headers: Object,
  params: Object,
  body: Object,
});

module.exports = mongoose.model("Audit", auditSchema);
