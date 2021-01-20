module.exports = function({ sequelize, Sequelize }) {
	let user = sequelize.define('user', {
		num: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		userID: {
			type: Sequelize.BIGINT,
			unique: true
		},
		name: {
			type: Sequelize.STRING,
		},
		banned: {
			type: Sequelize.BOOLEAN,
			defaultValue: false
		},
		time2unban: {
			type: Sequelize.STRING,
			defaultValue: null
		},
		reasonban: {
			type: Sequelize.STRING,
			defaultValue: null
		},
		otherInfo: {
			type: Sequelize.JSON
		}
	})
	return user;
}