/** Express router providing Arbol related routes
 *
 * @module routers/Arbol
 * @module config - app config
 * @module utils - app utils functions
 * @module express-validator - form validation module
 * @module models- app model module
 * @requires express
 */
const express = require('express');
const router = express.Router();
const models = require('../models/index.js');
const Arbol = models.Arbol;


const sequelize = models.sequelize; // sequelize functions and operations
const Op = models.Op; // sequelize query operators
const filterByRaw = models.filterByRaw; // sequelize where condtion
const dbRaw = sequelize.literal; // sequelize raw query expression




/**
 * Route to list arbol records
 * @route {GET} /arbol/index/{fieldname}/{fieldvalue}
 * @param {array} path - Array of express paths
 * @param {callback} middleware - Express middleware.
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req, res) => {  
	try{
		let query = {};  // sequelize query object
		let where = {};  // sequelize where conditions
		let replacements = {};  // sequelize query params
		let fieldname = req.params.fieldname;
		let fieldvalue = req.params.fieldvalue;
		
		if (fieldname){
			where[Op.and] = [
				sequelize.literal(`(${fieldname} = :fieldvalue)`)
			];
			replacements.fieldvalue = fieldvalue;
		}
		let search = req.query.search;
		if(search){
			let searchFields = Arbol.searchFields();
			where[Op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = Arbol.getOrderBy(req, 'desc');
		query.attributes = Arbol.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 20;
		let result = await Arbol.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});
module.exports = router;
