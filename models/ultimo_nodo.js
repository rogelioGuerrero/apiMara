
const BaseModel = require("./basemodel");
class Ultimo_Nodo extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				name: { type: Sequelize.STRING, primaryKey: true  }
			}, 
			{ 
				sequelize,
				
				tableName: "ultimo_nodo",
				modelName: "ultimo_nodo",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'name'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'name'
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
module.exports = Ultimo_Nodo;
