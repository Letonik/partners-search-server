const {Country, State, Partner} = require('../models/models');
const ApiError = require("../error/apiError");
const { Op } = require("sequelize");

class SearchController {

    async getPartner(req, res) {
        let {company = '', ...status} = req.query;
        try {
            let companyAndAddress = await Partner.findAll({
                where: {
                    [Op.or]: {
                        company: {
                            [Op.substring]: company
                        },
                        address: {
                            [Op.substring]: company
                        }
                    }, ...status
                },
                limit: 8
            });
            return res.json(companyAndAddress);
        } catch (e) {

        }
    }
    async getType (req, res) {
        let types = await Partner.findAll({ group: 'status' });
        types = types.map(t => t.status);
        return res.json(types);
    }
}

module.exports = new SearchController();