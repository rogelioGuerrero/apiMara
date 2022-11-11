
const BaseModel = require("./basemodel");
class Niveles extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true  },
				name: {name: 'name', type:Sequelize.STRING},
				depth: {name: 'depth', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "niveles",
				modelName: "niveles",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'name', 
			'depth'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'name', 
			'depth'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("name LIKE :search"),
		];
	}

	
	
}
module.exports = Niveles;
