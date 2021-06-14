const db = require('../models/index');
const { QueryTypes } = require('sequelize');
const {Comment} = require('../models');
module.exports = {
    getAllComments() {
        return Comment.findAll().catch(error => {
            return {message: 'Erreuclear' +
                    'r : ' + error.message}
        });
    },
    getComments(offset = 0, limit = 10) {
        return Comment.findAll({
            offset: parseInt(offset),
            limit: parseInt(limit)
        }).catch(error => {
            return {message: 'Erreur : ' + error.message}
        });
    },

    getComment(id) {
        return Comment.findByPk(id).then(result => {
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
    getCommentByArticleId(articleId) {
        return Comment.findAll({where: {ArticleId: articleId}}).then(result => {
            if (result) {
                return result
            } else {
                return {message: "Le commantaire n'est pas trouvé !"}
            }
        }).catch(error => {
            return {message: 'Erreur : ' + error.message}
        });
    },
    getArticleTitleAndNbrOfComments() {
        return db.sequelize.query("SELECT DISTINCT Articles.title, COUNT(Comments.articleId) AS \"nbrOfComments\" from Articles INNER JOIN Comments ON articles.id = Comments.articleId GROUP BY ArticleId", { type: QueryTypes.SELECT });
        //return elements = sequelize.query("SELECT * from Articles", { type: QueryTypes.SELECT });

    },
    addComment(comment) {
        return Comment.create(comment).catch(error => {
            return {message: 'Erreur : ' + error.message}
        });
    },
    updateComment(id, comment) {
        return Comment.update(comment, {
            where: {id: id}
        }).then(result => {
            if (result) {
                return {message: "Modifictaion bien passée !"}
            } else {
                return {message: `Impossible de modifier le Commentaire avec id=${id}. Peut-etre il n'existe pas !`}
            }
        }).catch(error => {
            return {message: 'Erreur : ' + error.message}
        });
    },
    deleteComment(id) {
        return Comment.destroy({
            where: {id: id}
        }).then(result => {
            if (result) {
                return {message: "Supression bien passée !"}
            } else {
                return {message: `Impossible de supprimer le Commentaire avec id=${id}. Peut-etre il n'existe pas !`}
            }
        }).catch(error => {
            return {message: 'Erreur : ' + error.message}
        });
    },
    deleteAllComments() {
        return Comment.destroy({
            where: {},
            truncate: false
        }).then(result => {
            if (result) {
                return {message: "Supression bien passée !"}
            } else {
                return {message: `Impossible de supprimer tous les Commentaires !`}
            }
        }).catch(error => {
            return {message: 'Erreur : ' + error.message}
        });
    },
    getAllCommentsNumber() {
        return Comment.findAndCountAll({
            where: {},
        })
            .then(result => {

                console.log(result.count);

                return {message: result.count}
            });

    }
}

