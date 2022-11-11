
const BaseModel = require("./basemodel");
class Arbol extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				lev1: { type: Sequelize.STRING, primaryKey: true  },
				lev2: {name: 'lev2', type:Sequelize.STRING},
				lev3: {name: 'lev3', type:Sequelize.STRING},
				lev4: {name: 'lev4', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "arbol",
				modelName: "arbol",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'lev1', 
			'lev2', 
			'lev3', 
			'lev4'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'lev1', 
			'lev2', 
			'lev3', 
			'lev4'
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
			sequelize.literal("lev1 LIKE :search"), 
			sequelize.literal("lev2 LIKE :search"), 
			sequelize.literal("lev3 LIKE :search"), 
			sequelize.literal("lev4 LIKE :search"),
		];
	}

	
	
}
module.exports = Arbol;
