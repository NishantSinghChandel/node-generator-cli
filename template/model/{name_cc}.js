/* Summary: This model contains {{name_cc}} schema */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const {{name_cc}}Schema = new Schema({});

{{name_cc}}Schema.statics.get{{name_pc}}List = function() {
  return this.find()
    .sort("-dateAdded")
    .exec();
};

{{name_cc}}Schema.statics.get{{name_pc}}ById = function(_id) {
  return this.findOne({ _id }).exec();
};

{{name_cc}}Schema.statics.delete{{name_pc}}ById = function(_id) {
  return this.findOneAndDelete({ _id });
};

{{name_cc}}Schema.statics.create{{name_pc}} = function(data) {
  const {{name_cc}}Obj = new this(data);
  return {{name_cc}}Obj.save();
};

{{name_cc}}Schema.statics.update{{name_pc}}ById = function(_id, data) {
  return this.update(
    { _id: _id },
    { $set: data },
    { multi: false, runValidators: true }
  ).exec();
};

let model{{name_pc}} = mongoose.model('{{name_lc}}', {{name_cc}}Schema);
module.exports = model{{name_pc}};