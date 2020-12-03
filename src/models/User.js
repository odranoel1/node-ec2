const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    username: String,
    email: String,
    password: String
});

//Add method for encript password with bcrypt
userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10); //Apply encrypt 10 times
    return bcrypt.hash(password, salt); //Convert string in hash
};

userSchema.methods.validatePassword = function(password) {
    return bcrypt.compare(password, this.password); //Password for user, Password in schema
}

// Crear en la db
module.exports = model('User', userSchema);