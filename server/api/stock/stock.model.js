const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
  symbol: String,
  description: String,
  dailyPriceData: { type: Array, default: [] },
  lastUpdated: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('Stock', StockSchema);
