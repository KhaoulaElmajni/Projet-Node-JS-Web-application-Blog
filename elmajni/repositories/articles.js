
const {Article} = require('../models')
module.exports = {
   getAllArticles() {
       return Article.findAll().catch(error => {
           return {message: 'Erreur : ' + error.message}
       });
   },
   getArticles(offset = 0, limit = 10) {
       return Article.findAll({
           offset: parseInt(offset),
           limit: parseInt(limit)
       }).catch(error => {
           return {message: 'Erreur : ' + error.message}
       });
   },

   getArticlesByUserId(userId) {
    return Article.findAll({where: {userId: userId}}).then(result => {
        if (result) {
            return { status: 200 ,
                content: result
            }
        } else {
            return {message: "L'utilisateur n'a pas d'articles !"}
        }
    }).catch(error => {
        return {message: 'Erreur : ' + error.message}
    });
},

getArticlesByTitle(title) {
    return Article.findAll({where: {title: title}}).then(result => {
        if (result) {
            return { status: 200 ,
                content: result
            }
        } else {
            return { status: 404 ,
                message: "L'article n'est pas trouvé !"
            }
        }
    }).catch(error => {
        return {message: 'Erreur : ' + error.message}
    });
},
   
   getArticle(id) {
       return Article.findByPk(id).then(result => {
           if (result) {
               return { status: 200 ,
                        content: result
            }
           } else {
               return { status: 404 ,
                        message: "L'article n'est pas trouvé !"
                        }
           }
       }).catch(error => {
           return {message: 'Erreur : ' + error.message}
       });
   },
   
   addArticle(article) {
       return Article.create(article).catch(error => {
           return {message: 'Erreur : ' + error.message}
       });
   },
   updateArticle(id, article) {
       return Article.update(article, {
           where: {id: id}
       }).then(result => {
           if (result) {
               return {message: "Modifictaion bien passée !"}
           } else {
               return {message: `Impossible de modifier l'article avec id=${id}. Peut-etre il n'existe pas !`}
           }
       }).catch(error => {
           return {message: 'Erreur : ' + error.message}
       });
   },
   deleteArticle(id) {
       return Article.destroy({
           where: {id: id}
       }).then(result => {
           if (result) {
               return {message: "Supression bien passée !"}
           } else {
               return {message: `Impossible de supprimer l'article avec id=${id}. Peut-etre il n'existe pas !`}
           }
       }).catch(error => {
           return {message: 'Erreur : ' + error.message}
       });
   },
   deleteAllArticles() {
       return Article.destroy({
           where: {},
           truncate: false
       }).then(result => {
           if (result) {
               return {message: "Supression bien passée !"}
           } else {
               return {message: `Impossible de supprimer tous les articles !`}
           }
       }).catch(error => {
           return {message: 'Erreur : ' + error.message}
       });
   },
   getAllArticlesNumber(){
       return Article.findAndCountAll({
          where: {},
       })
       .then(result => {

         console.log(result.count);
         
         return {message: result.count}
       });

   }
}

