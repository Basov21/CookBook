'use strict';

const { hashSync } = require('bcrypt');
const { User } = require('../models');
const { Favourite } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate([
      { name: 'Alex', email: 'alex@mail.com', hashpass: hashSync('123', 10) },
      { name: 'Bob', email: 'bob@mail.com', hashpass: hashSync('123', 10) },
    ]);

    await queryInterface.bulkInsert('Recipes', [
      {
        title: 'Паста Карбонара',
        quantity: 5,
        ingredients: ['паста', 'яйцо', 'бекон', 'пармезан', 'черный перец'].join(', '),
        time: 20,
        instruction:
          'Отварите пасту. Обжарьте бекон. Смешайте яйца с пармезаном и добавьте к пасте.',
        img: 'https://raiskaya-trapeza.ru/wp-content/uploads/2018/02/eda94-1170x679.jpg',
      },
      {
        title: 'Цезарь',
        quantity: 5,
        ingredients: ['курица', 'салат', 'пармезан', 'гренки', 'соус Цезарь'].join(', '),
        time: 30,
        instruction: 'Обжарьте курицу, нарежьте салат, добавьте гренки и соус.',
        img: 'https://avatars.dzeninfra.ru/get-zen_doc/1907878/pub_5eaf2f816c15632218122796_5eaf39f4b9c1f807fa23e56e/scale_1200',
      },
      {
        title: 'Омлет',
        quantity: 5,
        ingredients: ['яйца', 'молоко', 'соль', 'перец', 'зелень'].join(', '),
        time: 10,
        instruction: 'Взбейте яйца с молоком, посолите, обжарьте на сковороде.',
        img: 'https://yajka.ru/wp-content/uploads/2020/02/blobid1582447921531.jpg',
      },
      {
        title: 'Пицца Маргарита',
        quantity: 4,
        ingredients: ['тесто', 'томатный соус', 'моцарелла', 'базилик'].join(', '),
        time: 40,
        instruction: 'Раскатайте тесто, добавьте соус и начинку, выпекайте.',
        img: 'https://www.flavourofitaly.net/blog/wp-content/uploads/2016/06/Pizza-Margherita-2.jpg',
      },
      {
        title: 'Салат Оливье',
        quantity: 5,
        ingredients: ['картофель', 'морковь', 'горошек', 'колбаса', 'майонез'].join(', '),
        time: 30,
        instruction: 'Отварите овощи, нарежьте и смешайте с майонезом.',
        img: 'https://torgvelesmeat.ru/wp-content/uploads/2020/12/b17ee29a.jpg',
      },
      {
        title: 'Курица по-азиатски',
        quantity: 5,
        ingredients: ['курица', 'соевый соус', 'имбирь', 'чеснок', 'перец'].join(', '),
        time: 25,
        instruction: 'Обжарьте курицу с соусом и специями.',
        img: 'https://i.pinimg.com/originals/15/64/d7/1564d71b138f510791a36ac57cb56d15.jpg',
      },
      {
        title: 'Творожные оладьи',
        quantity: 5,
        ingredients: ['творог', 'яйцо', 'мука', 'сахар', 'разрыхлитель'].join(', '),
        time: 20,
        instruction: 'Смешайте все ингредиенты и обжарьте на сковороде.',
        img: 'https://vkusnyeretsepti.ru/data/img/45134-nezhnye-syrniki.jpg',
      },
      {
        title: 'Блины',
        quantity: 5,
        ingredients: ['мука', 'яйца', 'молоко', 'соль', 'сахар'].join(', '),
        time: 30,
        instruction: 'Смешайте ингредиенты и жарьте на сковороде.',
        img: 'https://sun9-64.userapi.com/impf/c851532/v851532928/16e105/96TM6IfLoy4.jpg?size=604x401&quality=96&sign=b2bda12668243b2d48ab50957291e2ea&c_uniq_tag=zzs74rNVUOUtp7Ix8HCWxuvb7BIpc6avFmUVzliLDZw&type=album',
      },
      {
        title: 'Котлеты',
        quantity: 5,
        ingredients: ['фарш', 'лук', 'яйцо', 'панировочные сухари', 'соль'].join(', '),
        time: 40,
        instruction: 'Смешайте все ингредиенты, сформируйте котлеты и обжарьте.',
        img: 'https://otvet.imgsmail.ru/download/30502718_2a782973a884667d8cc6de0731ebf98a_800.jpg',
      },
      {
        title: 'Ризотто',
        quantity: 5,
        ingredients: ['рис', 'бульон', 'пармезан', 'лук', 'белое вино'].join(', '),
        time: 30,
        instruction: 'Обжарьте лук, добавьте рис, постепенно вливайте бульон.',
        img: 'https://avatars.mds.yandex.net/i?id=d353db28e7bc70755e2b97f6b4471eac_l-10878446-images-thumbs&n=13',
      },
      {
        title: 'Шашлык',
        quantity: 5,
        ingredients: ['мясо', 'лук', 'специи', 'масло', 'уксус'].join(', '),
        time: 120,
        instruction: 'Маринуйте мясо, нанизывайте на шампуры и жарьте на углях.',
        img: 'https://inright.ru/wp-content/uploads/2023/05/gruzi.jpg',
      },
      {
        title: 'Торт Наполеон',
        quantity: 5,
        ingredients: ['мука', 'масло', 'сахар', 'молоко', 'яйца'].join(', '),
        time: 120,
        instruction: 'Приготовьте коржи, затем соберите торт с кремом.',
        img: 'https://www.tvoybro.com/uploads/article/block/image/593bd2f3ebf5c9760d000009/ea3cb945-3a70-462a-8208-e95d367350a5.jpg',
      },
      {
        title: 'Крем-брюле',
        quantity: 4,
        ingredients: ['сливки', 'яйца', 'сахар', 'ваниль'].join(', '),
        time: 60,
        instruction: 'Смешайте ингредиенты, запекайте и карамелизируйте сахар.',
        img: 'https://i.pinimg.com/736x/31/8a/ff/318aff99819fc32dc0a3cab4848e4c48.jpg',
      },
      {
        title: 'Суп-пюре из тыквы',
        quantity: 5,
        ingredients: ['тыква', 'лук', 'бульон', 'сливки', 'специи'].join(', '),
        time: 40,
        instruction: 'Отварите тыкву и лук, затем пюрируйте и добавьте сливки.',
        img: 'https://cdn.sportmaster.ru/upload/content/mediahab/prod/7802ac06-bbe8-4545-a6c4-88c68f23ce73.jpg',
      },
      {
        title: 'Капрезе',
        quantity: 4,
        ingredients: ['моцарелла', 'помидоры', 'базилик', 'оливковое масло'].join(', '),
        time: 10,
        instruction: 'Нарежьте ингредиенты и полейте маслом.',
        img: 'https://dostavka.crystalpalacetver.ru/wp-content/uploads/2020/03/scale_1200.jpeg',
      },
      {
        title: 'Фахитас',
        quantity: 5,
        ingredients: ['курица', 'перец', 'лук', 'тортильи', 'специи'].join(', '),
        time: 30,
        instruction: 'Обжарьте курицу с овощами и подавайте с тортильями.',
        img: 'https://i.pinimg.com/originals/36/aa/ea/36aaea7ab7610239f12d29f46b940784.jpg',
      },
      {
        title: 'Пудинг',
        quantity: 5,
        ingredients: ['молоко', 'яйца', 'сахар', 'ваниль', 'крахмал'].join(', '),
        time: 90,
        instruction: 'Смешайте ингредиенты и запекайте до загустения.',
        img: 'https://i.pinimg.com/originals/8c/f8/98/8cf898cda346e76332b7b3fec8aab1e1.jpg',
      },
      {
        title: 'Чизкейк',
        quantity: 5,
        ingredients: ['творог', 'сахар', 'яйца', 'печенье', 'масло'].join(', '),
        time: 90,
        instruction: 'Приготовьте корж, затем запеките начинку.',
        img: 'https://media.vprok.ru/recipe/x956/of/hb/twheiy5w7s3nmggxg65tzdfjbecjhbof.jpeg',
      },
    ]);

    await Favourite.bulkCreate([
      {
        userId: 1,
        recipeId: 2,
      },
      {
        userId: 1,
        recipeId: 4,
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
