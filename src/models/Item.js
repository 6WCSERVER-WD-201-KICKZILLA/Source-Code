var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Item = new Schema({
  name: {
    type: Number
  },
  price: {
    type: Number
  }
},{
    collection: 'items'
});

module.exports = mongoose.model('Item', Item);