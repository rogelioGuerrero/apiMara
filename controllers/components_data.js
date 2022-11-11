/** Express router providing related routes to page component data
 *
 * @module routers/components_data
 * @module config - app config
 * @module models- app model module
 * @requires express
 */
const express = require('express');
const router = express.Router();
const models = require('../models/index.js');


const sequelize = models.sequelize;
const Op = models.Op; // sequelize query operators
const filterByRaw = models.filterByRaw; // sequelize where condtion
const dbRaw = sequelize.literal; // sequelize raw query expression


 /**
 * Route to get parent_id_option_list records
 * @route {GET} /components_data/parent_id_option_list
 * @param {string} path - Express paths
 * @param {callback} middleware - Express middleware.
 */
router.get('/parent_id_option_list', async (req, res) => {
	try{
		let sqltext = `SELECT id as value, name as label FROM category` ;
		let records = await sequelize.query(sqltext, { type: sequelize.QueryTypes.SELECT });
		return res.ok(records);
	}
	catch(err){
		console.error(err)
		return res.serverError(err);
	}
});
module.exports = router;
