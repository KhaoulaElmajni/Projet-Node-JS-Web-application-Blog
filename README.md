
# <strong style="color:blue; opacity: 0.80">Projet Node JS application Web Blog</strong>:mortar_board::computer: 
# <span style="color:green "> 1.Présentation du Projet</span>
 * <strong style="color:dark">ce projet est une application Web (Blog) basée sur le framework Express avec accès à une base de données MySql.
* <strong style="color:dark">Le blog est réalisé sous forme d’une API et permettra d’effectuer les opérations usuelles CRUD (create read update delete) pour toutes les entités le composant.
# <span style="color:green "> 2. La conception de la Base de données</span>
## <span style="color:#66ff66"> Entités et règles de gestion : :label:</span>
Les entités utilisées dans l’application sont : 
* * * 
>●	User, (id:, username, email, password, role) 
●	Article, (id, title, content, published)
●	Comment, (id, content)
●	Tag (id, name)


## <span style="color:#66ff66"> Les règles et associations :label: </span>
### 1. <span style="color:#001a33">Un utilisateur (User) peut créer plusieurs articles (Un article est associé à un seul utilisateur).</span>
### 2. <span style="color:#001a33"> Un article (Article) peut avoir plusieurs Tags.</span>
### 3. <span style="color:#001a33"> Une Tag (Tag) peut apparaître dans plusieurs articles.</span>
### 4. <span style="color:#001a33"> Un article peut avoir plusieurs commentaires (Comment) (Un commentaire est associé à un article).</span>

# <span style="color:green">3.Les Technologies utilisées</span>
 #### <span style="color:#0036ad"> 1.HTML5</span>
 * <strong style="color:dark">Le HyperText Markup Language, généralement abrégé HTML ou dans sa dernière version HTML5, est le langage de balisage conçu pour représenter les pages web.

*voir également à propos [HTML5](https://developer.mozilla.org/fr/docs/Web/HTML) :link: 

 #### <span style="color:#0036ad"> 2.CSS3</span>
 * <strong style="color:dark">Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML.

*voir également à propos [HTML5]* [CSS3](https://devdocs.io/css/) :link: 

 #### <span style="color:#0036ad"> 3.BootsTrap</span>
 * <strong style="color:dark">Bootstrap est une collection d'outils utiles à la création du design de sites et d'applications web. 
* <strong style="color:dark">C'est un ensemble qui contient des codes HTML et CSS, des formulaires, boutons, outils de navigation et autres éléments interactifs, ainsi que des extensions JavaScript en option.

*voir également à propos [Bootstrap](https://getbootstrap.com/) :link: 

#### <span style="color:#0036ad"> 4.MySQL</span>
 * <strong style="color:dark">est un système de gestion de base de données relationnelle (SGBDR) open source. Son nom est une combinaison de "My", le nom de la fille du co-fondateur Michael Widenius, et de "SQL", l'abréviation de Structured Query Language. Une base de données relationnelle organise les données en une ou plusieurs tables de données dans lesquelles les types de données peuvent être liés les uns aux autres ; ces relations aident à structurer les données. SQL est un langage utilisé par les programmeurs pour créer, modifier et extraire des données de la base de données relationnelle, ainsi que pour contrôler l'accès des utilisateurs à la base de données.
*voir également à propos* [MySQL](https://devdocs.io/css/) :link: 

#### <span style="color:#0036ad"> 5.JavaScript</span>
 * <strong style="color:dark">JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives et à ce titre est une partie essentielle des applications web. Avec les technologies HTML et CSS, JavaScript est parfois considéré comme l'une des technologies cœur du World Wide Web.
 
*voir également à propos* [JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript) :link: 

#### <span style="color:#0036ad"> 6.NodeJs</span>
 * <strong style="color:dark">Node.js est une plateforme logicielle libre en JavaScript, orientée vers les applications réseau événementielles hautement concurrentes qui doivent pouvoir monter en charge.
 
*voir également à propos* [NodeJs](https://nodejs.org/en/) :link: 

 #### <span style="color:#0036ad"> 7.Express Framework</span>
 * <strong style="color:dark">Express.js est un framework pour construire des applications web basées sur Node.js. 
C'est de fait le framework standard pour le développement de serveur en Node.js.

*voir également à propos* [Express Framework](https://expressjs.com/fr/) :link: 

#### <span style="color:#0036ad"> 8.Middlewares Express</span>
 * <strong style="color:dark">Express est une infrastructure web middleware et de routage, qui a des fonctions propres minimes : une application Express n’est ni plus ni moins qu’une succession d’appels de fonctions middleware.

 * <strong style="color:dark">Les fonctions de middleware sont des fonctions qui peuvent accéder à l’objet Request (req), l’objet response (res) et à la fonction middleware suivant dans le cycle demande-réponse de l’application. La fonction middleware suivant est couramment désignée par une variable nommée next.

*voir également à propos* [Middlewares Express](https://expressjs.com/fr/guide/using-middleware.html) :link: 

#### <span style="color:#0036ad"> 9.Sequelize ORM </span>
 * <strong style="color:dark">Sequelize est un ORM Node.js basé sur la promesse pour Postgres, MySQL, MariaDB, SQLite et Microsoft SQL Server. 
 * <strong style="color:dark">Il offre une prise en charge solide des transactions, des relations, un chargement rapide et paresseux, une réplication en lecture et plus encore.
 
*voir également à propos* [Sequelize ORM](https://sequelize.org/) :link: 

#### <span style="color:#0036ad"> 10.JWT Json Web Token</span>
 * <strong style="color:dark">JSON Web Token est un standard ouvert défini dans la RFC 7519. Il permet l'échange sécurisé de jetons entre plusieurs parties. 
* <strong style="color:dark">Cette sécurité de l’échange se traduit par la vérification de l'intégrité et de l'authenticité des données. Elle s’effectue par l'algorithme HMAC ou RSA.
 
*voir également à propos* [JWT](https://jwt.io/) :link: 


 ## <span style="color:green ">4.CONCEPTION & ANALYSES</span>
 * ###### <strong style="color:red; opacity: 0.80">MCD</strong>

 ![](https://i.imgur.com/PdaD9El.png)


 > Modéle Conceptuel de Données [color=#fd837b]
  ---
  
   * ###### <strong style="color:red; opacity: 0.80">MLD</strong>

 ![](https://i.imgur.com/P6H3cuP.png)


 > Modéle Logique de Données [color=#fd837b]
  ---

 * ###### <strong style="color:red; opacity: 0.80">MPD</strong>

![](https://i.imgur.com/rhQN76q.png)

 > Modéle Physique de Données [color=#fd837b]
  ---

 ## <strong style="color: green; opacity: 0.80" >5.comment ça marche ?</strong>
 
![](https://i.imgur.com/0aXiQ0q.png)
 > Interface de connexion au Blog [color=#fd837b]
  ---
  
![](https://i.imgur.com/7waTiKr.png)
![](https://i.imgur.com/mrYaj5p.png)
 > Interface de Gestion des utilisateurs [color=#fd837b]
  ---
  
![](https://i.imgur.com/KHdGKcs.png)
![](https://i.imgur.com/0OEwobk.png)
 > Interface de Gestion des articles [color=#fd837b]
  ---
  
![](https://i.imgur.com/zfQfFcg.png)
![](https://i.imgur.com/y7pmeLQ.png)

 > Interface de Gestion des Commentaires [color=#fd837b]
  ---
![](https://i.imgur.com/ym1TnRm.png)
 > Interface de Gestion des Tags [color=#fd837b]
  ---
 
:::success
c'est comme ça :white_check_mark: 
:::


[![](https://i.imgur.com/ljrAKcm.jpg)
](https://www.youtube.com/watch?v=67dY1h7C8js)


* <strong style="color: dark ; opacity: 0.80">Enfin nous tenons à remercier le seul et unique, notre professeur Mr DAAIF AZIZ *Docteur & professeur à l'ENSET MEDIA* pour son soutien et son encouragement envers nous, aussi pour nous avoir donné cette opportunité d'améliorer nos compétences et de connaître les nouvelles technologies comme celles qui nous avons travaillé.

*voir également à propos* Mr [DAAIF AZIZ](https://www.linkedin.com/in/aziz-daaif-5a6ab090/?originalSubdomain=ma)
</strong>

> Created by :[name=ELMAJNI KHAOULA]
[time=Fri,2021,06,18][color=#EF0101]
>*voir également à propos de moi* [ELMAJNI Khaoula](https://www.linkedin.com/in/khaoula-elmajni/)