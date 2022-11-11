
const BaseModel = require("./basemodel");
class Category extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				name: {name: 'name', type:Sequelize.STRING},
				parent_id: {name: 'parent_id', type:Sequelize.INTEGER}
			}, 
			{ 
				sequelize,
				
				tableName: "category",
				modelName: "category",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'name', 
			'parent_id'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'name', 
			'parent_id'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'name', 
			'parent_id'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'name', 
			'parent_id'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'name', 
			'parent_id'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("name LIKE :search"),
		];
	}

	
	
}
module.exports = Category;
