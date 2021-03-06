module.exports = {
	port: process.env.PORT || 8082,
	db: {
		database: process.env.DB_NAME || 'test',
		user: process.env.DB_USER || 'root',
		password: process.env.DB_PASS || '',
		options: {
			dialect: process.env.DIALECT || 'mysql',
			host: process.env.HOST || 'localhost',
			port: 3306
		}
	},
	authentication: {
		jwtSecret: process.env.JWT_SECRET || 'secret'
	}
}
