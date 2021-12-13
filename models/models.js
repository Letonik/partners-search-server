const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Country = sequelize.define('loc_country', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    short_name: {type: DataTypes.STRING(50), defaultValue: null}
});

const State = sequelize.define('loc_state', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    short_name: {type: DataTypes.STRING(50), defaultValue: null}
});

const Partner = sequelize.define('partner_locator', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    company: {type: DataTypes.STRING, allowNull: false},
    status: {type: DataTypes.STRING, allowNull: false},
    logo: {type: DataTypes.STRING, allowNull: false},
    address: {type: DataTypes.STRING, allowNull: false},
    website: {type: DataTypes.STRING, allowNull: false},
    phone: {type: DataTypes.STRING(40), allowNull: false},
    countries_covered: {type: DataTypes.STRING(1000), allowNull: false},
    states_covered: {type: DataTypes.STRING(1000), allowNull: false},
});


Country.hasMany(State);
State.belongsTo(Country);

module.exports = {
    Country, State, Partner
}






