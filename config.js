var config = {
	app: {
		name: "app",
		url: "http://localhost:8060",
		frontendUrl: "http://localhost:8050",
		secret: "bd8562f13dac4ca37cb79573c8da6496",
		language: "spanish",
		publicDir: "assets",
	},
	meta: {
		author:"",
		description: "__metadescription",
		charset: "UTF-8",
	},
	auth: {
		jwtDuration: 30, //in minutes
		otpDuration: 5, //in minutes
	},
	database: {
		name:"db_a7aff4_telerik",
		type: "mysql",
		host: "mysql5045.site4now.net",
		username: "a7aff4_telerik",
		password: "A12345678z",
		port: "",
		charset: "utf8",
		recordlimit: 10,
		ordertype: "DESC"
	},
	mail: {
		username:"",
		password: "",
		senderemail:"",
		sendername:"",
		host: "",
		secure: true,
		port: ""
	},
	upload: {
		tempDir: "uploads/temp/",
		import_data: {
			filenameType: "timestamp",
			extensions: "json,csv",
			limit: "10",
			maxFileSize: "3",
			returnFullpath: "false",
			filenamePrefix: "",
			uploadDir: "uploads/files/"
		},
		
	},
	s3: {
		secretAccessKey: "",
		accessKeyId: "",
		region: "",
		bucket: "",
	},
	
}
module.exports = config