const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const configuration = require('../config/config.js');

const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = configuration[env];
const db = {};

console.log('our url===>', config.url);

let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable]);
// } else {
//   sequelize = new Sequelize(config.url, config);
// }
sequelize = new Sequelize(config.url, config);
fs
  .readdirSync(__dirname)
  .filter(file =>
    (file.indexOf('.') !== 0) &&
    (file !== basename) &&
    (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
