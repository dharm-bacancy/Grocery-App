import Product from '../models/product';

const PRODUCTS = [
    new Product(
        'p1',
        'u1',
        'x1',
        'Organic Bananas',
        'https://stokkist.in/wp-content/uploads/2020/11/Organic-Banana-2.jpg',
        '7pcs, Priceg',
        'Bananas can help regulate blood pressure and control the activity of the heart. Those who consume high amounts of potassium have up to 27% lower risk of heart disease.',
        4.99
    ),
    new Product(
        'p2',
        'u1',
        'x1',
        'Natural Red Apple',
        'https://blog.biohmhealth.com/wp-content/uploads/2019/06/ripe-red-apples-on-table-close-prebiotics-supplements-ss.jpg',
        '1kg, Price',
        'Apples are Nutritious. Apples may be good for weight loss. Apple may be good for your heart. As part of a healtful and varied diet.',
        5.99
    ),
    new Product(
        'p3',
        'u1',
        'x7',
        'Black Pepper',
        'https://cdn.downtoearth.org.in/library/large/2020-10-15/0.83996600_1602777023_9.jpg',
        '1Kg, Price',
        'pepper is a healthy food that may have some antimicrobial properties. There is no evidence that eating pepper has protected people from the new coronavirus.',
        5.62
    ),
    new Product(
        'p4',
        'u1',
        'x1',
        'Ginger',
        'https://static.toiimg.com/thumb/msid-68035301,width-800,height-600,resizemode-75,imgsize-1943897,pt-32,y_pad-40/68035301.jpg',
        '1Kg, Price',
        'Ginger is popularly used as a spice in cooking and can be used either fresh, dried or powdered. The fresh rhizome can be used to extract ginger essential oil. Ginger may also be used to flavor beverages. Ginger continues to be a popular folk remedy in China and India.',
        2.19
    ),
    new Product(
        'p5',
        'u1',
        'x1',
        'Tometo',
        'https://miro.medium.com/max/960/0*AZhhiA7beCRygMSd.jpg',
        '1kg, Price',
        'Tomato fruit can be eaten raw or cooked and is used in many dishes. The fruit may also be processed into juice, soup, ketchup, puree, paste or powder.',
        1.17
    ),
    new Product(
        'p6',
        'u3',
        'x3',
        'Chicken',
        'https://www.recipetineats.com/wp-content/uploads/2020/01/Fried-Chicken_2-SQ.jpg',
        '1kg, Price',
        'Chicken Provides Vitamins and Minerals Involved in Brain Function. Dark and white meat chicken contains vitamin B12 and choline, which together may promote brain development in children, help the nervous system function properly and aid cognitive performance in older adults.',
        3.5
    ),
    new Product(
        'p7',
        'u2',
        'x1',
        'Bell Pepper Red',
        'https://www.bazaarfresh.in/wp-content/uploads/2018/08/red-capsicum.png',
        '1kg, Price',
        'Technically a fruit, red peppers are more common as a staple in the vegetable produce section. They are also an excellent source of vitamins A and C. Each half cup of raw red pepper provides you with 47 percent of your daily recommended intake of vitamin A and 159 percent of your vitamin C.',
        4.99
    ),
    new Product(
        'p8',
        'u2',
        'x1',
        'Lemon',
        'https://s3.amazonaws.com/img.kh-labs.com/jo2qkB5c5f151b266e23.49344765',
        '1kg, Price',
        'Lemon is a type of citrus fruit. The fruit, juice, and peel are used to make medicine. People use lemon for conditions such as the common cold, a disease caused by vitamin C deficiency (scurvy), skin care, morning sickness, and many others.',
        1
    ),
    new Product(
        'p9',
        'u2',
        'x1',
        'Brinjal',
        'https://i.pinimg.com/originals/d5/a6/8a/d5a68ac3e3f5ee8316828340666c8973.jpg',
        '1kg, Price',
        'Brinjal, commonly called as Baingan and Vrintak in Ayurveda, is a nutritious food rich in minerals, vitamins and fibers and low in calories. Brinjal might help in weight management as it is low in calories and rich in dietary fibers that help improve digestion and metabolism.',
        1.5
    ),
    new Product(
        'p10',
        'u2',
        'x1',
        'Onion',
        'https://s3.india.com/wp-content/uploads/2020/08/red-onion.jpg',
        '1kg, Price',
        'Onions contain antioxidants and compounds that fight inflammation, decrease triglycerides and reduce cholesterol levels — all of which may lower heart disease risk. Their potent anti-inflammatory properties may also help reduce high blood pressure and protect against blood clots.',
        3.44
    ),
    new Product(
        'p11',
        'u4',
        'x6',
        'Diet Coke',
        'https://fasab.files.wordpress.com/2014/03/diet-coke.jpg',
        '355ml, Price',
        'Diet Coke, Coca-Cola Light or Coca-Cola Light Taste is a sugar-free and no-calorie soft drink produced and distributed by the Coca-Cola Company. It contains artificial sweeteners instead of sugar',
        1.99
    ),
    new Product(
        'p12',
        'u4',
        'x6',
        'Sprite Can',
        'https://5.imimg.com/data5/UE/NE/WQ/SELLER-82456434/sprinte-cold-derink-500x500.jpg',
        '325ml, Price',
        'Sprite is a lemon-lime flavored soft drink with a crisp, clean taste that gives you the ultimate cut-through refreshment. Sprite is a lemon-lime flavored soft drink with a crisp, clean taste that gives you the ultimate cut-through refreshment.',
        1.50
    ),
    new Product(
        'p13',
        'u4',
        'x6',
        'Apple & Grape Juice',
        'https://www.treetop.com/wp-content/uploads/2018/07/tree-top-juice-apple-grape-64oz.png',
        '2L, Price',
        'Reducing the risk of blood clots. Reducing low-density lipoprotein (LDL, or "bad") cholesterol. Preventing damage to blood vessels in your heart. Helping maintain a healthy blood pressure.',
        15.99
    ),
    new Product(
        'p14',
        'u4',
        'x6',
        'Orenge Juice',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tropicana-organic-orange-juice-with-juicy-bits-ocado-1547734462.jpg?crop=1xw:1xh;center,top&resize=480:*',
        '2L, Price',
        'Orange juice is a liquid extract of the orange tree fruit, produced by squeezing or reaming oranges. The health value of orange juice is debatable: it has a high concentration of vitamin C, but also a very high concentration of simple sugars, comparable to soft drinks.',
        15.99
    ),
    new Product(
        'p15',
        'u4',
        'x6',
        'Coca Cola Can',
        'https://previews.123rf.com/images/choneschones/choneschones1505/choneschones150500045/41052522-sofia-bulgaria-june-06-2014-cola-cola-can-with-water-drops-isolated-on-white-.jpg',
        '325ml, Price',
        'a sweetened carbonated beverage that is a cultural institution in the United States and a global symbol of American tastes.',
        4.99
    ),
    new Product(
        'p16',
        'u4',
        'x6',
        'Pepsi Can',
        'https://t3.ftcdn.net/jpg/03/23/86/24/360_F_323862457_5RaEzJNg6yeYx6RjbU4WwkAl3R0yxNQt.jpg',
        '330ml, Price',
        'Pepsi is a carbonated soft drink, Our full range of food and beverages are designed to bring a smile to ...',
        4.99
    ),
    new Product(
        'p17',
        'u5',
        'x2',
        'Gulab Oils',
        'https://3.imimg.com/data3/SL/LU/GLADMIN-13988303/aa-500x500.png',
        '15L, Price',
        'Gulab Groundnut Oil has MUFA content of 54%, which is more than any other oils. This oil can be used in different forms of cooking such as frying, seasoning and grilling.',
        24.86
    ),
    new Product(
        'p18',
        'u5',
        'x2',
        'Fortune Oils',
        'https://www.adaniwilmar.com/-/media/Project/Wilmar/Home/2.jpg?la=en&hash=9BF781A1AD33F38F48B4CAA917EDB853',
        '15L, Price',
        'Fortune Sunflower oil or Fortune Sunlite Oil is light, healthy and perfectly easy to digest this ... fortune kachi ghani mustard oil, it is time to try something naya.',
        28.75
    ),
    new Product(
        'p19',
        'u5',
        'x2',
        'Gaia live Oil',
        'https://img10.hkrtcdn.com/382/prd_38169_c_l.jpg',
        '500ml, Price',
        'Product description. Gaia Extra Virgin Olive Oil is extracted from the freshest and juiciest olives from Spain to provide enhanced nutritional value.',
        7.8
    ),
    new Product(
        'p20',
        'u5',
        'x2',
        'Safrola Oils',
        'https://neareshop.s3.ap-south-1.amazonaws.com/2020/05/Saffola-Gold-Oil-Jar-5-L_New_1405.jpg',
        '5L, Price',
        'Safrole is also present in certain essentials oils and in brown camphor oil, which is present, in small amounts, in many plants. Safrole can be found in anise',
        11.23
    ),
    new Product(
        'p21',
        'u5',
        'x2',
        'Dynamix Ghee',
        'https://images-na.ssl-images-amazon.com/images/I/81Jeu4bBj1L._SY550_.jpg',
        '1KG, Price',
        'The Dynamix Cow Ghee adds aroma to the dishes and has a very important role to play if you want to make tasty recipes, helps in improving digestion thereby activating the secretion of stomach acids, rich in antioxidants, relieves Constipation, boosts energy and is non-allergic.',
        6.88
    ),
    new Product(
        'p22',
        'u5',
        'x2',
        'Gowardhan Ghee',
        'https://indiangrocery.jp/wp-content/uploads/2020/07/Gowardhan-Pure-Cow-Ghee-500ml-in-Japan.jpg',
        '1KG, Price',
        'Gowardhan Ghee is produced in a Morden dairy plant, using a time-testing traditional recipe to capture the full flavour and aroma of cow ghee. It is reach source of natural vitamins and B – Carotene.',
        8.49
    ),
    new Product(
        'p23',
        'u5',
        'x2',
        'Patanjali Ghee',
        'http://demo.sidhagharpe.com/wp-content/uploads/2019/02/patanjali-cow-27s-ghee-2c-200ml-500x500.jpg',
        '1L, Price',
        'Patanjali Cow Ghee is full of nutritive properties and an ideal diet. Cow ghee increases memory, intellect, the power of digestion, Ojas, Kapha and fat. Regular consumption of ghee or inclusion of ghee as part of the diet, is recommended for those seeking weight gain.',
        8.08
    ),
    new Product(
        'p24',
        'u5',
        'x2',
        'Amul Ghee',
        'https://www.annshri.com/static/products/A0000000135-1/amul-desi-ghee-5-ltr-detail.jpeg',
        '1KG, Price',
        'Amul Ghee is made from fresh cream and it has typical rich aroma and granular texture. Amul Ghee is an ethnic product made by dairies with decades of experience, and rich source of Vitamin A,D,E and K.',
        6.65
    ),
    new Product(
        'p25',
        'u6',
        'x3',
        'Ham',
        'https://images-gmi-pmc.edge-generalmills.com/b57341e4-5fbf-4413-9445-1aca51a34e57.jpg',
        '1KG, Price',
        'Ham is pork from a leg cut that has been preserved by wet or dry curing, with or without smoking. As a processed meat, the term "ham" includes both whole cuts of meat and ones that have been mechanically formed.',
        13.01
    ),
    new Product(
        'p26',
        'u6',
        'x3',
        'Crab',
        'https://www.foodrepublic.com/wp-content/uploads/2016/06/chilicrab.jpg',
        '1KG, Price',
        'Crabs are omnivores, feeding primarily on algae, and taking any other food, including molluscs, worms, other crustaceans, fungi, bacteria, and detritus, depending on their availability and the crab specie',
        4.11
    ),
    new Product(
        'p27',
        'u6',
        'x3',
        'Lamb',
        'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/globalmeatnews.com/headlines/livestock/global-lamb-prices-on-the-rise/8554070-1-eng-GB/Global-lamb-prices-on-the-rise_wrbm_large.jpg',
        '1KG, Price',
        'This is a list of lamb and mutton dishes and foods. Lamb and mutton are terms for the meat of domestic sheep (species Ovis aries) at different ages.',
        6.44
    ),
    new Product(
        'p28',
        'u6',
        'x3',
        'Beef',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/roast-beef-recipes-536cd86.jpg?quality=90&resize=768,574',
        '1KG, Price',
        'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times. Beef is a source of protein and nutrients.',
        2.96
    ),
    new Product(
        'p29',
        'u6',
        'x3',
        'Bacon',
        'https://post.healthline.com/wp-content/uploads/2020/08/is-bacon-bad-or-good-732x549-thumbnail-732x549.jpg',
        '1KG, Price',
        'Bacon is a type of salt-cured pork made from various cuts, typically from the pork belly or from the less fatty back cuts. The word is derived from the Old High German Bahho, meaning "buttock", "ham" or "side of bacon", and is cognate with the Old French bacon.',
        6.16
    ),
    new Product(
        'p30',
        'u6',
        'x3',
        'Fish',
        'https://upload.wikimedia.org/wikipedia/commons/8/8c/Fish_Food_Decoration.jpg',
        '1KG, Price',
        'Live fish food include earthworms, sludge worms, water fleas, bloodworms, and feeder fish. Food for larvae and young fish include infusoria (Protozoa and other microorganisms), newly hatched brine shrimp and microworms. These are the most preferred type of food for fishes, but are difficult to get.',
        2.96
    ),
    new Product(
        'p31',
        'u6',
        'x3',
        'Steak',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/London_broil.jpg/1200px-London_broil.jpg',
        '1KG, Price',
        'A steak is a meat generally sliced across the muscle fibers, potentially including a bone. Steak can also be cooked in sauce, such as in steak and kidney pie, or minced and formed into patties, such as hamburgers.',
        4.92
    ),
    new Product(
        'p32',
        'u7',
        'x4',
        'Khari',
        'https://indiaphile.info/wp-content/uploads/2013/03/kharibiscuits-4014.jpg',
        '200g, Price',
        'Kharia biscuits, often known as khari biscuits or puffed salted biscuits are a common hit as a tea-time snack.',
        1.3
    ),
    new Product(
        'p33',
        'u7',
        'x4',
        'Cake',
        'https://tatyanaseverydayfood.com/wp-content/uploads/2016/02/Classic-Red-Velvet-Cake.jpg',
        '500g, Price',
        'Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. Common additional ingredients and flavourings include dried, candied, or fresh fruit, nuts, cocoa, and extracts such as vanilla, with numerous substitutions for the primary ingredients.',
        10.26
    ),
    new Product(
        'p34',
        'u7',
        'x4',
        'Puff',
        'https://pull-revisfoodography.netdna-ssl.com/wp-content/uploads/2017/03/paneer-puff-vert.jpg',
        '1 item, Price',
        'Puff-puffs are made of dough containing flour, yeast, sugar, butter, salt, water and eggs (which are optional), and deep fried in vegetable oil to a golden brown color. Like the French beignet and the Italian zeppole, puff-puffs can be rolled in any spices/flavoring such as cinnamon, vanilla and nutmeg',
        1
    ),
    new Product(
        'p35',
        'u7',
        'x4',
        'Cookie',
        'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2013/05/chocolate-chunk-cookies.jpg',
        '200 gm, Price',
        'A cookie is a baked or cooked food that is typically small, flat and sweet. It usually contains flour, sugar and some type of oil or fat. It may include other ingredients such as raisins, oats, chocolate chips, nuts, etc. Chewier biscuits are sometimes called cookies even in the United Kingdom.',
        2.3
    ),
    new Product(
        'p36',
        'u7',
        'x4',
        'Pav Bread',
        'https://252366-784522-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/02/ladi-pav-dinner-rolls-4-of-17.jpg',
        '200 gm, Price',
        'A pillowy pav, stuffed with a golden-fried spiced batata (potato) vada, covered with a lick of tamarind and coriander chutneys and a sprinkling of garlicky masala - the vada pav is starch heaven, an instant energy booster.',
        2.5
    ),
    new Product(
        'p37',
        'u7',
        'x4',
        'Cupcake',
        'https://www.browneyedbaker.com/wp-content/uploads/2010/08/mocha-cupcakes-1-600.jpg',
        '1 item, Price',
        'Cupcakes have been made since the early 1800s. These delicious treats are individual cakes typically decorated with icing and frosting. They are fairly easy to make and appeal to people of all ages looking for a tasty treat in a small size.',
        2
    ),
    new Product(
        'p38',
        'u8',
        'x5',
        'Egg Red',
        'https://www.charismaticplanet.com/wp-content/uploads/2017/07/2-2-747x560.jpg',
        '4pcs, Price',
        'The Rhode Island Red is an American breed of domestic chicken. It is the state bird of Rhode, It was a dual-purpose breed, raised both for meat and for eggs',
        1.99
    ),
    new Product(
        'p39',
        'u8',
        'x5',
        'Egg White',
        'https://img1.exportersindia.com/product_images/bc-full/dir_15/449332/white-chicken-eggs-116269.jpg',
        '180g, Price',
        'Egg white is the clear liquid (also called the albumen or the glair/glaire) contained within an egg. In chickens it is formed from the layers of secretions of the anterior section of the hen is oviduct during the passage of the egg. It forms around fertilized or unfertilized egg yolks.',
        1.5
    ),
    new Product(
        'p40',
        'u8',
        'x5',
        'Egg Pasta',
        'https://www.missmysupermarket.com/user/products/large/Tesco%20Finest%20Egg%20Fettuccine%20Pasta%20250G.jpg',
        '30g, Price',
        'Pasta, in which beaten egg is mixed with the flour and water to make the dough. noun.',
        15.99
    ),
    new Product(
        'p41',
        'u8',
        'x5',
        'Egg Noodles',
        'https://static.toiimg.com/photo/52467119.cms',
        '2L, Price',
        'A type of flat pasta that differs from regular flour and water pasta in that eggs are added to enrich the dough. Several different widths are produced commercially and the noodles are available fresh or dried. They are most often used in soups and casseroles.',
        15.99
    ),
    new Product(
        'p42',
        'u8',
        'x5',
        'Mayonnaise',
        'https://images-na.ssl-images-amazon.com/images/I/41icQz4EMcL.jpg',
        '250g, Price',
        'Mayonnaise, informally mayo, is a thick cold sauce or dressing commonly used in sandwiches, hamburgers, composed salads, and on French fries.',
        3.4
    ),
    new Product(
        'p43',
        'u8',
        'x5',
        'Amul Shakti',
        'https://mahadevmilk.in/wp-content/uploads/2020/11/Amul-Shakti.jpg',
        '1L, Price',
        'Amul Milk is the most hygienic liquid milk available in the market. It is pasteurized in state-of-the-art processing plants and pouch-packed to make it conveniently available to consumers.',
        1.4
    ),
    new Product(
        'p44',
        'u8',
        'x5',
        'Amul Gold',
        'http://www.dudhsagardairy.coop/wp-content/uploads/2014/04/1-Amul_Gold-1.jpg',
        '1L, Price',
        'Amul Gold. Description. Pasteurised milk Amul milk meets the PFA standards for the respective type of milk. Packing.',
        1.5
    ),
    new Product(
        'p45',
        'u8',
        'x7',
        'Chana dal',
        'https://cdn.shopify.com/s/files/1/0489/5028/0356/products/split_bengal_gram_chana_dal_i_1920_1024x1024@2x.jpg?v=1602000961',
        '1Kg, Price',
        'Chana dal is a split lentil, also known as baby chickpeas, which is very popular in Indian Cuisine. It is highly nutritious, delicious and is used in both sweet and savory recipes due to its rich taste and aroma.',
        1.7
    ),
    new Product(
        'p46',
        'u8',
        'x7',
        'moong dal',
        'https://wp-public-fs.s3.ap-south-1.amazonaws.com/tasks/15f22af483edb9bd949848cfe1f749803592d2a81dcc01/images/859a5202-5f2818650c850.jpg',
        '1Kg, Price',
        'Yellow moong dal refers to moong beans that have been skinned and split, so that they are flat, yellow, and quick-cooking. They are relatively easy to digest. They can be made into moong bean paste by de-hulling, cooking, and pulverizing the beans to the consistency of a dry paste.',
        2.8
    ),
    new Product(
        'p47',
        'u8',
        'x7',
        'Urad dal',
        'https://5.imimg.com/data5/PJ/MD/OE/SELLER-42181057/manufacturer-and-exporter-of-organic-white-whole-urad-dal-white-pulses-500x500.jpg',
        '1Kg, Price',
        'Urad dal (split black lentils) is a very popular Indian dal used to make dals, snacks Try this off-beat Gujarati Style Urad Dal Recipe and try something different',
        2.5
    ),
    new Product(
        'p48',
        'u8',
        'x7',
        'Moong',
        'https://osiamart.com/image/cache/catalog/products/50product/LOOSE%20DESI%20MOONG%201%20kg-550x550.jpg',
        '1Kg, Price',
        'Moong or green gram is a small ¼-inch, round, olive-green bean that is mustard or off-white coloured inside. The beans have a sweet flavour, soft texture, and are easy to digest. Green gram is available in many forms including whole, split, de-husked (yellow) and ground.',
        2.2
    ),
    new Product(
        'p49',
        'u8',
        'x7',
        'Moong',
        'https://5.imimg.com/data5/IL/ZW/KI/SELLER-22139814/kabuli-chana-jpg-500x500.jpg',
        '1Kg, Price',
        'Chana or chickpea is one of the oldest legume or pulse known to mankind. It is popular in Europe, Northern Africa and Mediterranean countries, India, Pakistan and Afghanistan. It is high in protein content. ',
        2.4
    ),
    new Product(
        'p50',
        'u8',
        'x7',
        'Lentils',
        'https://www.jessicagavin.com/wp-content/uploads/2018/01/what-are-lentils-2-1200.jpg',
        '1Kg, Price',
        'Lentil, (Lens culinaris), small annual legume of the pea family (Fabaceae) and its edible seed. The seeds are used chiefly in soups and stews, and the herbage is used as fodder in some places. Lentils are a good source of protein, dietary fibre, vitamin B, iron, and phosphorus.',
        3
    ),
    new Product(
        'p51',
        'u8',
        'x8',
        'Basmati',
        'https://5.imimg.com/data5/EX/KO/XT/SELLER-2775740/kohinoor-basmati-rice-500x500.jpg',
        '1Kg, Price',
        'Basmati is long grain aromatic rice grown for many centuries in the specific geographical area, at the Himalayan foot hills of Indian sub-continent, blessed with characteristics extra- long slender grains that elongate at least twice of their original size with a characteristics soft and fluffy texture upon cooking',
        4.6
    ),
    new Product(
        'p52',
        'u8',
        'x8',
        'Rajamudi',
        'https://images-na.ssl-images-amazon.com/images/I/51wpP4CFokL.jpg',
        '1Kg, Price',
        'Rajamudi is a variety of red rice that was earlier grown exclusively for the Wadiyars or Maharajas of Mysore. It is a rich source of dietary fibre, antioxidants and iron.',
        5
    ),
    new Product(
        'p53',
        'u8',
        'x8',
        'Salem Sanna',
        'https://cholaa.in/wp-content/uploads/2020/08/salemsanna.jpg',
        '1Kg, Price',
        'Salem fave. The rice is high in nutrients and ideal for cooking, but also a number of states in the state means the consumer who is popular rice varieties.',
        4.8
    ),
    new Product(
        'p54',
        'u8',
        'x8',
        'Samba',
        'https://www.farmersgrainshop.in/wp-content/uploads/2020/11/Seeraga-Samba-Rice.jpg',
        '1Kg, Price',
        'Samba is a variety of rice grown in Tamil Nadu, some other parts of India and Sri Lanka, and has a small ovular grain, compared to the long grain of basmati rice. This rice is also very popular in West Bengal and there it is known as "Gobindo-bhog".',
        3.4
    )
];

export default PRODUCTS;