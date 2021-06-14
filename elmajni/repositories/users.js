const jwt = require('jsonwebtoken');
const {User} = require('../models')
const accessTokenSecret = 'fpm.ATC4)ec`Zxn"t=YL`Hc#?j';

module.exports = {
    getAllUsers() {
        return User.findAll().catch(error => {
            return {message: 'Erreur : ' + error.message}
        });
    },
    getUsers(offset = 0, limit = 10) {
        return User.findAll({
            offset: parseInt(offset),
            limit: parseInt(limit)
        }).catch(error => {
            return {message: 'Erreur : ' + error.message}
        });
    },
    getAdmins() {
        return User.findAll({where: {role: 'admin'}}).catch(error => {
            return {message: 'Erreur : ' + error.message}
        });
    },
    getAuthors() {
        return User.findAll({where: {role: 'author'}}).catch(error => {
            return {message: 'Erreur : ' + error.message}
        });
    },
    getGuests() {
        return User.findAll({where: {role: 'guest'}}).catch(error => {
            return {message: 'Erreur: ' + error.message}
        });
    },
    getUser(id) {
        return User.findByPk(id).then(result => {
            if (result) {
                return {
                    status: 200,
                    content: result
                }
            } else {
                return {
                    status: 404,
                    message: "L'utilisateur n'est pas trouvé !"
                }
            }
        }).catch(error => {
            return {message: 'Erreur : ' + error.message}
        });
    },
    getUserByEmail(email) {
        return User.findOne({where: {email: email}}).then(result => {
            if (result) {
                return result
            } else {
                return {message: "L'utilisateur n'est pas trouvé !"}
            }
        }).catch(error => {
            return {message: 'Erreur : ' + error.message}
        });
    },
    addUser(user) {
        return User.create(user).catch(error => {
            return {message: 'Erreur : ' + error.message}
        });
    },

    login(cridentials) {
        return User.findOne({where: {email: cridentials.email}}).then(result => {
            if (result) {
                if (result.password === cridentials.password) {
                    const accessToken = jwt.sign({id: result, role: result.role}, accessTokenSecret);
                    return {code: 1, message: "log in success", token: accessToken}
                }else{
                    return {code: 2, message: "incorrect password"}
                }
            } else {
                return {code: 3, message: "L'utilisateur n'est pas trouvé !"}
            }
        }).catch(error => {
            return {message: 'Erreur : ' + error.message}
        });
    },
    updateUser(id, user) {
        return User.update(user, {
            where: {id: id}
        }).then(result => {
            if (result) {
                return {message: "Modifictaion bien passée !"}
            } else {
                return {message: `Impossible de modifier l'utilisateur avec id=${id}. Peut-etre il n'existe pas !`}
            }
        }).catch(error => {
            return {message: 'Erreur : ' + error.message}
        });
    },
    deleteUser(id) {
        return User.destroy({
            where: {id: id}
        }).then(result => {
            if (result) {
                return {message: "Supression bien passée !"}
            } else {
                return {message: `Impossible de supprimer l'utilisateur avec id=${id}. Peut-etre il n'existe pas !`}
            }
        }).catch(error => {
            return {message: 'Erreur : ' + error.message}
        });
    },
    deleteAllUsers() {
        return User.destroy({
            where: {},
            truncate: false
        }).then(result => {
            if (result) {
                return {message: "Supression bien passée !"}
            } else {
                return {message: `Impossible de supprimer tous les utilisateurs !`}
            }
        }).catch(error => {
            return {message: 'Erreur : ' + error.message}
        });
    },
    getAllUsersNumber() {
        return User.findAndCountAll({
            where: {},
        })
            .then(result => {

                console.log(result.count);

                return {message: result.count}
            });

    }
}

