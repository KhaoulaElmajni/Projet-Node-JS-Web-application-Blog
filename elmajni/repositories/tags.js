
const {Tag} = require('../models')
module.exports = {
   getAllTags() {
       return Tag.findAll().catch(error => {
           return {message: 'Erreur : ' + error.message}
       });
   },
   getTags(offset = 0, limit = 10) {
       return Tag.findAll({
           offset: parseInt(offset),
           limit: parseInt(limit)
       }).catch(error => {
           return {message: 'Erreur : ' + error.message}
       });
   },
   
   getTag(id) {
       return Tag.findByPk(id).then(result => {
           if (result) {
               return { status: 200 ,
                        content: result
            }
           } else {
               return { status: 404 ,
                        message: "Le tag n'est pas trouvé !"
                        }
           }
       }).catch(error => {
           return {message: 'Erreur : ' + error.message}
       });
   },
   
   addTag(tag) {
       return Tag.create(tag).catch(error => {
           return {message: 'Erreur : ' + error.message}
       });
   },
   updateTag(id, tag) {
       return Tag.update(tag, {
           where: {id: id}
       }).then(result => {
           if (result) {
               return {message: "Modifictaion bien passée !"}
           } else {
               return {message: `Impossible de modifier le tag avec id=${id}. Peut-etre il n'existe pas !`}
           }
       }).catch(error => {
           return {message: 'Erreur : ' + error.message}
       });
   },
   deleteTag(id) {
       return Tag.destroy({
           where: {id: id}
       }).then(result => {
           if (result) {
               return {message: "Supression bien passée !"}
           } else {
               return {message: `Impossible de supprimer le Tag avec id=${id}. Peut-etre il n'existe pas !`}
           }
       }).catch(error => {
           return {message: 'Erreur : ' + error.message}
       });
   },
   deleteAllTags() {
       return Tag.destroy({
           where: {},
           truncate: false
       }).then(result => {
           if (result) {
               return {message: "Supression bien passée !"}
           } else {
               return {message: `Impossible de supprimer tous les tags !`}
           }
       }).catch(error => {
           return {message: 'Erreur : ' + error.message}
       });
   },
   getAllTagsNumber(){
       return Tag.findAndCountAll({
          where: {},
       })
       .then(result => {

         console.log(result.count);
         
         return {message: result.count}
       });

   }
}

