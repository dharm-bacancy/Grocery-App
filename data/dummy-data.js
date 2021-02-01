import Product from '../models/product';

const PRODUCTS = [
    new Product(
        'p1',
        'u1',
        'Organic Bananas',
        'https://stokkist.in/wp-content/uploads/2020/11/Organic-Banana-2.jpg',
        '7pcs, Priceg',
        'Bananas can help regulate blood pressure and control the activity of the heart. Those who consume high amounts of potassium have up to 27% lower risk of heart disease.',
        4.99
    ),
    new Product(
        'p2',
        'u1',
        'Natural Red Apple',
        'https://blog.biohmhealth.com/wp-content/uploads/2019/06/ripe-red-apples-on-table-close-prebiotics-supplements-ss.jpg',
        '1kg, Price',
        'Apples are Nutritious. Apples may be good for weight loss. Apple may be good for your heart. As part of a healtful and varied diet.',
        5.99
    ),
    new Product(
        'p3',
        'u1',
        'Black Pepper',
        'https://cdn.downtoearth.org.in/library/large/2020-10-15/0.83996600_1602777023_9.jpg',
        '1Kg, Price',
        'pepper is a healthy food that may have some antimicrobial properties. There is no evidence that eating pepper has protected people from the new coronavirus.',
        5.62
    ),
    new Product(
        'p4',
        'u1',
        'Ginger',
        'https://static.toiimg.com/thumb/msid-68035301,width-800,height-600,resizemode-75,imgsize-1943897,pt-32,y_pad-40/68035301.jpg',
        '1Kg, Price',
        'Ginger is popularly used as a spice in cooking and can be used either fresh, dried or powdered. The fresh rhizome can be used to extract ginger essential oil. Ginger may also be used to flavor beverages. Ginger continues to be a popular folk remedy in China and India.',
        2.19
    ),
    new Product(
        'p5',
        'u1',
        'Tometo',
        'https://miro.medium.com/max/960/0*AZhhiA7beCRygMSd.jpg',
        '1kg, Price',
        'Tomato fruit can be eaten raw or cooked and is used in many dishes. The fruit may also be processed into juice, soup, ketchup, puree, paste or powder.',
        1.17
    ),
    new Product(
        'p6',
        'u3',
        'Chicken',
        'https://www.recipetineats.com/wp-content/uploads/2020/01/Fried-Chicken_2-SQ.jpg',
        '1kg, Price',
        'Chicken Provides Vitamins and Minerals Involved in Brain Function. Dark and white meat chicken contains vitamin B12 and choline, which together may promote brain development in children, help the nervous system function properly and aid cognitive performance in older adults.',
        3.5
    ),
    new Product(
        'p7',
        'u2',
        'Bell Pepper Red',
        'https://www.bazaarfresh.in/wp-content/uploads/2018/08/red-capsicum.png',
        '1kg, Price',
        'Technically a fruit, red peppers are more common as a staple in the vegetable produce section. They are also an excellent source of vitamins A and C. Each half cup of raw red pepper provides you with 47 percent of your daily recommended intake of vitamin A and 159 percent of your vitamin C.',
        4.99
    ),
    new Product(
        'p8',
        'u2',
        'Lemon',
        'https://s3.amazonaws.com/img.kh-labs.com/jo2qkB5c5f151b266e23.49344765',
        '1kg, Price',
        'Lemon is a type of citrus fruit. The fruit, juice, and peel are used to make medicine. People use lemon for conditions such as the common cold, a disease caused by vitamin C deficiency (scurvy), skin care, morning sickness, and many others.',
        1
    ),
    new Product(
        'p9',
        'u2',
        'Brinjal',
        'https://i.pinimg.com/originals/d5/a6/8a/d5a68ac3e3f5ee8316828340666c8973.jpg',
        '1kg, Price',
        'Brinjal, commonly called as Baingan and Vrintak in Ayurveda, is a nutritious food rich in minerals, vitamins and fibers and low in calories. Brinjal might help in weight management as it is low in calories and rich in dietary fibers that help improve digestion and metabolism.',
        1.5
    ),
    new Product(
        'p10',
        'u2',
        'Onion',
        'https://s3.india.com/wp-content/uploads/2020/08/red-onion.jpg',
        '1kg, Price',
        'Onions contain antioxidants and compounds that fight inflammation, decrease triglycerides and reduce cholesterol levels — all of which may lower heart disease risk. Their potent anti-inflammatory properties may also help reduce high blood pressure and protect against blood clots.',
        3.44
    ),
    new Product(
        'p11',
        'u4',
        'Frash Fruits & Vegetable',
        'https://lh3.googleusercontent.com/proxy/2YmDmFi1MSY0Fzc92mhdvBGxuk3lq0w95cWugO1KLOmGzq5kWl7Rzmv31-dCYTL3XahLT1QvjQYMuiL1hNfN7gMxyWytsh7Y8cMw4RLZEqSthJEjd8bwSiY',
        'nothing',
        'nothings',
        0
    ),
    new Product(
        'p12',
        'u4',
        'Cooking Oil & Ghee',
        'https://p7.hiclipart.com/preview/2/84/34/soybean-oil-cooking-oils-vegetable-oil-sunflower-oil-oil.jpg',
        'nothing',
        'nothings',
        0
    ),
    new Product(
        'p13',
        'u4',
        'Meat & Fish',
        'https://previews.123rf.com/images/magone/magone1502/magone150200094/36454292-fresh-raw-meat-products-on-wooden-table.jpg',
        'nothing',
        'nothings',
        0
    ),
    new Product(
        'p14',
        'u4',
        'Bakery & Snacks',
        'https://content3.jdmagicbox.com/comp/def_content/bakeries/default-bakeries-13.jpg',
        'nothing',
        'nothings',
        0
    ),
    new Product(
        'p15',
        'u4',
        'Dairy & Eggs',
        'https://www.dabiramagazine.com/wp-content/uploads/2019/05/PICTURE-2.jpg',
        'nothing',
        'nothings',
        0
    ),
    new Product(
        'p16',
        'u4',
        'Beverages',
        'https://www.saltnspice.in/wp-content/uploads/2019/09/soft-drinks.jpg',
        'nothing',
        'nothings',
        0
    ),
    new Product(
        'p17',
        'u4',
        'Pulses',
        'https://lh3.googleusercontent.com/proxy/vnD9br1v9VwwA5sOBeP6ikc-3O6IRuj5l_StrO04KAwvmYJpKyw53OhV98l0kCKvt39hkEaf0CaDXb5V1Nl9pc1dQMaNmOzkzN6vn15PedkigdIbDG4XiQ',
        'nothing',
        'nothings',
        0
    ),
    new Product(
        'p18',
        'u4',
        'Rices',
        'https://previews.123rf.com/images/zendograph/zendograph1812/zendograph181200044/114671402-top-view-of-jasmine-rice-in-a-bowl-on-dark-wooden-table-with-rice-plants-jasmine-flower-ear-of-rices.jpg',
        'nothing',
        'nothings',
        0
    ),
];

export default PRODUCTS;