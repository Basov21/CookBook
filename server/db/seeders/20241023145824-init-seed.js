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
      {
        title: 'Панкейки с бананом',
        quantity: 5,
        ingredients: ['мука', 'яйцо', 'молоко', 'банан', 'разрыхлитель'].join(', '),
        time: 25,
        instruction:
          'Смешайте все ингредиенты, жарьте на сковороде до золотистого цвета.',
        img: 'https://pic.rutubelist.ru/video/46/56/465623442b758db8f33dd5cefb5689c5.png',
      },
      {
        title: 'Шоколадный пирог',
        quantity: 6,
        ingredients: ['мука', 'какао', 'сахар', 'яйца', 'разрыхлитель', 'масло'].join(
          ', ',
        ),
        time: 60,
        instruction:
          'Смешайте компоненты, вылейте в форму и выпекайте при 180°C в течение 30-35 минут.',
        img: 'https://i.pinimg.com/originals/7e/b9/4a/7eb94a56c0ed5118a77b56b389181af9.jpg',
      },
      {
        title: 'Куриные котлеты',
        quantity: 5,
        ingredients: [
          'куриный фарш',
          'лук',
          'яйцо',
          'панировочные сухари',
          ' специи',
        ].join(', '),
        time: 40,
        instruction:
          'Смешайте фарш с ингредиентами, сформируйте котлеты и обжарьте на сковороде.',
        img: 'https://p4.tabor.ru/feed/2019-03-11/18448905/1453405_760x500.jpg',
      },
      {
        title: 'Овощной суп',
        quantity: 6,
        ingredients: ['картошка', 'морковь', 'лук', 'помидоры', 'бульон', 'зелень'].join(
          ', ',
        ),
        time: 35,
        instruction:
          'Варите все ингредиенты до готовности, посыпьте зеленью перед подачей.',
        img: 'https://i.pinimg.com/originals/c3/09/1d/c3091d0550c6cdac8000b53ee34fb6ce.jpg',
      },
      {
        title: 'Паста с грибами',
        quantity: 5,
        ingredients: ['макароны', 'грибы', 'сливки', 'чеснок', 'петрушка'].join(', '),
        time: 30,
        instruction:
          'Отварите пасту, обжарьте грибы с чесноком, добавьте сливки и смешайте с пастой.',
        img: 'https://i.ytimg.com/vi/60IPHZof3Qk/maxresdefault.jpg',
      },
      {
        title: 'Капустные голубцы',
        quantity: 5,
        ingredients: ['капуста', 'фарш', 'рис', 'лук', 'томатный соус'].join(', '),
        time: 90,
        instruction:
          'Обвяжите начинку в листья капусты, сложите в кастрюлю и заливайте соусом, готовьте на медленном огне.',
        img: 'https://i.pinimg.com/736x/b9/23/b5/b923b596b3ca4db0f8d77a1831dc2e6a--cooking-tomatoes-cashew-cream.jpg',
      },
      {
        title: 'Творожный чизкейк',
        quantity: 5,
        ingredients: ['творог', 'яйца', 'сахар', 'печенье', 'масло'].join(', '),
        time: 120,
        instruction:
          'Измельчите печенье, смешайте с маслом и утрамбуйте в форме. Взбейте творог с яйцами и сахаром, вылейте на основу и выпекайте.',
        img: 'https://mig.pics/uploads/posts/2020-01/1579907484_37-p-chizkeiki-iz-myagkogo-tvoroga-85.jpg',
      },
      {
        title: 'Рис с курицей',
        quantity: 5,
        ingredients: ['рис', 'куриное филе', 'лук', 'паприка', 'специи'].join(', '),
        time: 40,
        instruction: 'Залейте водой и готовьте до готовности.',
        img: 'https://img-global.cpcdn.com/recipes/37ce103f2eaf777d/1200x630cq70/photo.jpg',
      },
      {
        title: 'Пицца Маргарита',
        quantity: 5,
        ingredients: [
          'толстое тесто',
          'помидоры',
          'моцарелла',
          'базилик',
          'оливковое масло',
        ].join(', '),
        time: 40,
        instruction:
          'Выпеките тесто, добавьте помидоры и моцареллу, запекайте до расплавления сыра, украсить базиликом.',
        img: 'https://avatars.mds.yandex.net/i?id=c0308ae33af05cb42314a3629a03d797_l-8497406-images-thumbs&n=13',
      },
      {
        title: 'Квашеная капуста',
        quantity: 5,
        ingredients: ['капуста', 'соль', 'морковь', 'чеснок', 'тмин'].join(', '),
        time: 15,
        instruction:
          'Нарежьте капусту и смешайте с остальные ингредиенты, оставьте на несколько дней для ферментации.',
        img: 'https://avatars.mds.yandex.net/i?id=f272c681a4680930d56ba471fe6990a9_l-5231590-images-thumbs&n=13',
      },
      {
        title: 'Бургер с говядиной',
        quantity: 5,
        ingredients: ['булочка', 'говядина', 'сыр', 'помидор', 'салат'].join(', '),
        time: 30,
        instruction: 'Обжарьте котлеты, соберите бургер с соусом и начинкой.',
        img: 'https://static-basket-02.wbbasket.ru/vol25/31313835333435/guru/a3a8d277-b945-48f6-81b7-3888493b7aeb.jpg',
      },
      {
        title: 'Морковный торт',
        quantity: 6,
        ingredients: ['мука', 'морковь', 'яйца', 'сахар', 'корица', 'орехи'].join(', '),
        time: 70,
        instruction: 'Смешайте все ингредиенты и выпекайте при 180°C в течение 45 минут.',
        img: 'https://i.pinimg.com/736x/03/4b/08/034b0856d0e58af294612c3ce0fba136.jpg',
      },
      {
        title: 'Гречка с овощами',
        quantity: 5,
        ingredients: ['гречка', 'морковь', 'перец', 'лук', 'масло'].join(', '),
        time: 25,
        instruction:
          'Отварите гречку, обжарьте овощи и смешайте, можно подать с соевым соусом.',
        img: 'https://i.pinimg.com/originals/4a/57/97/4a579745145590e1a1aac320e2539281.jpg',
      },
      {
        title: 'Пирог с ягодами',
        quantity: 5,
        ingredients: ['мука', 'масло', 'яйца', 'сахар', 'свежие ягоды'].join(', '),
        time: 50,
        instruction: 'Сделайте тесто, выложите ягоды и запекайте до готовности.',
        img: 'https://i.mycdn.me/videoPreview?id=10859972059&type=47&idx=30&tkn=bujfgrYG8wXixB5xcZaqjY3eXPY&i=1&fn=external_8',
      },
      {
        title: 'Фруктовый салат',
        quantity: 5,
        ingredients: ['яблоки', 'бананы', 'апельсины', 'киви', 'йогурт'].join(', '),
        time: 15,
        instruction: 'Нарежьте фрукты и полейте йогуртом, перемешайте и подавайте.',
        img: 'https://sun9-31.userapi.com/impg/oIQREfZ_ULp1rwP0C0u96jOJurnZC1eii_fxqg/AKec3IIZcms.jpg?size=814x542&quality=96&sign=22ce1b4eca9180f19ed4e70cfbb03527&c_uniq_tag=YYq5J4d5CKnFMDwmuxpBBjplFNbU7LGy0tg38ZZD9bU&type=album',
      },
      {
        title: 'Шарлотка с яблоками',
        quantity: 5,
        ingredients: ['яблоки', 'мука', 'яйца', 'сахар', 'разрыхлитель'].join(', '),
        time: 60,
        instruction: 'Запекайте в духовке',
        img: 'https://pic.rutubelist.ru/video/4d/39/4d39068357e5dde8fc5820a8b80be4e6.jpg',
      },
      {
        title: 'Рататуй',
        quantity: 6,
        ingredients: [
          'баклажаны',
          'цуккини',
          'перец',
          'помидоры',
          'чеснок',
          'оливковое масло',
        ].join(', '),
        time: 60,
        instruction:
          'Нарежьте овощи, потушите их на сковороде с чесноком и оливковым маслом до мягкости.',
        img: 'https://cdn.culture.ru/images/c4131b30-ac29-5a9b-a327-f6a11acfa2eb',
      },
      {
        title: 'Сырники с изюмом',
        quantity: 5,
        ingredients: ['творог', 'яйцо', 'мука', 'сахар', 'изюм'].join(', '),
        time: 25,
        instruction:
          'Смешайте все ингредиенты, сформируйте лепешки и обжарьте на сковороде.',
        img: 'https://avatars.mds.yandex.net/i?id=2161b5ec1ad8a162cfbfecd3c149e90c_l-8497235-images-thumbs&n=13',
      },
      {
        title: 'Каша овсяная',
        quantity: 5,
        ingredients: [
          'овсяные хлопья',
          'молоко',
          'сахар',
          'соль',
          'фрукты по желанию',
        ].join(', '),
        time: 15,
        instruction:
          'Сварите овсяные хлопья в молоке, добавьте сахар и соль, подавайте с фруктами.',
        img: 'https://i.pinimg.com/736x/3f/ab/63/3fab63c31393a27191370647eaf7c602.jpg',
      },
      {
        title: 'Чечевица с морковью',
        quantity: 3,
        ingredients: ['чечевица', 'морковь', 'лук'].join(', '),
        time: 35,
        instruction:
          'Обжарьте лук и морковь, добавьте чечевицу и бульон, варите до готовности.',
        img: 'https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy9yZWNpcGVzLzI1NTY0L2NvdmVycy9wN3FMeHguanBn.jpg',
      },
      {
        title: 'Капучино',
        quantity: 4,
        ingredients: ['кофе', 'молоко', 'сахар', 'корица'].join(', '),
        time: 10,
        instruction: 'Закажите в кафе',
        img: 'https://avatars.mds.yandex.net/i?id=8d38c2ea41ff0a4fd0c3781c976fd2fe_l-8486953-images-thumbs&n=13',
      },
      {
        title: 'Суп-пюре из брокколи',
        quantity: 5,
        ingredients: ['брокколи', 'картошка', 'лук', 'сливки', 'бульон'].join(', '),
        time: 30,
        instruction:
          'Отварите брокколи и картошку, смешайте с луком и бульоном, затем разбейте до состояния пюре.',
        img: 'https://i.pinimg.com/736x/a5/78/59/a57859b1aa604d5155d8f72d5a3c75e7.jpg',
      },
      {
        title: 'Куриное карри',
        quantity: 5,
        ingredients: [
          'куриное филе',
          'карри',
          'кокосовое молоко',
          'помидоры',
          'первое оливковое масло',
        ].join(', '),
        time: 50,
        instruction:
          'Обжарьте курицу, добавьте карри и остальные ингредиенты, готовьте до готовности.',
        img: 'https://lafoy.ru/photo_l/foto-4186-11.jpg',
      },
      {
        title: 'Печенье с шоколадом',
        quantity: 24,
        ingredients: ['мука', 'масло', 'сахар', 'яйца', 'шоколад'].join(', '),
        time: 30,
        instruction:
          'Смешайте ингредиенты, формируйте печенье и выпекайте в духовке до золотистого цвета.',
        img: 'https://keksonline.ru/upload/machaon/pagespeed/iblock/0d4/idbh8m18amkai6qiswse1dbrwl34cww2.jpeg.webp',
      },
      {
        title: 'Авокадо-тост',
        quantity: 5,
        ingredients: ['хлеб', 'авокадо', 'соль', 'перец', 'лимон'].join(', '),
        time: 10,
        instruction: 'Поджарьте хлеб, разомните авокадо, приправьте и намазывайте.',
        img: 'https://i.pinimg.com/originals/94/12/cb/9412cb7df3d89ac7406cc7f8fee76fcc.jpg',
      },
      {
        title: 'Лосось запеченный с лимоном',
        quantity: 5,
        ingredients: ['лосось', 'лимон', 'оливковое масло', 'соль', 'перец'].join(', '),
        time: 25,
        instruction:
          'Филе лосося полейте лимонным соком и оливковым маслом, приправьте, запекайте 15-20 минут в день.',
        img: 'https://www.bbaum.ru/img/catalog/more/m1029.jpg',
      },
      {
        title: 'Пирожки с капустой',
        quantity: 5,
        ingredients: ['мука', 'капуста', 'яйцо', 'соль', 'масло'].join(', '),
        time: 80,
        instruction:
          'Приготовьте тесто, обжарьте капусту, заверните в тесто и выпекайте в духовке.',
        img: 'https://i.ibb.co/nrPrSBL/anon-3593967.jpg',
      },
      {
        title: 'Фрикадельки в томатном соусе',
        quantity: 6,
        ingredients: ['фарш', 'лук', 'чеснок', 'томатный соус', 'соль', 'перец'].join(
          ', ',
        ),
        time: 50,
        instruction: 'Сформируйте фрикадельки, обжарьте их и готовьте в томатном соусе.',
        img: 'https://i.pinimg.com/736x/cb/20/5b/cb205be5c94a492450642810dcac688e.jpg',
      },
      {
        title: 'Картофельный гратен',
        quantity: 5,
        ingredients: ['картошка', 'сливки', 'сыр', 'чеснок', 'мука'].join(', '),
        time: 60,
        instruction:
          'Нарежьте картошку, слоями укладывайте с сыром и сливками, запекайте в духовке.',
        img: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/226/154/768/112/410/33/100029725358b0.jpg',
      },
      {
        title: 'Треска в духовке',
        quantity: 4,
        ingredients: ['филе трески', 'лимон', 'специи', 'оливковое масло'].join(', '),
        time: 25,
        instruction:
          'Приправьте рыбу, поместите в форму, добавьте лимон и запекайте в духовке.',
        img: 'https://avatars.mds.yandex.net/i?id=972d70dc753455677660d2ef5df9883d_l-4907614-images-thumbs&n=13',
      },
      {
        title: 'Спагетти с базиликом',
        quantity: 5,
        ingredients: [
          'спагетти',
          'базилик',
          'оливковое масло',
          'чеснок',
          'паранежный сыр',
        ].join(', '),
        time: 20,
        instruction:
          'Отварите спагетти, обжарьте чеснок с базиликом и перемешайте с пастой.',
        img: 'https://avatars.mds.yandex.net/i?id=a30dc91b63925fd78e3a4d2610af4c32_l-5236343-images-thumbs&n=13',
      },
      {
        title: 'Жареные баклажаны',
        quantity: 5,
        ingredients: ['баклажаны', 'мука', 'яйца', 'панировочные сухари', 'масло'].join(
          ', ',
        ),
        time: 30,
        instruction:
          'Нарежьте баклажаны, обваляйте в муке, яйцах и сухарях, обжарьте до золотистого цвета.',
        img: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/9b/84/8e/berenjena-o-calabacin.jpg',
      },
      {
        title: 'Творожная запеканка',
        quantity: 5,
        ingredients: ['творог', 'яйца', 'сахар', 'манная крупа', 'изюм'].join(', '),
        time: 45,
        instruction:
          'Смешайте ингредиенты, вылейте в форму и запекайте до золотистой корочки.',
        img: 'https://www.chefmarket.ru/blog/wp-content/uploads/2020/02/appetizing-cottage-2000x1200.jpg',
      },
    ]);

    await Favourite.bulkCreate([
      {
        userId: 1,
        recipeId: 2,
      },
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
