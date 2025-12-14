const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose
    .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/ecommerce")
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.log(error));

const productData = {
    men: [
        { title: "Classic Denim Jacket", image: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=800&q=80" },
        { title: "Oxford Cotton Shirt", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80" },
        { title: "Slim Fit Chinos", image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80" },
        { title: "Leather Biker Jacket", image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80" },
        { title: "Casual Linen Shorts", image: "https://images.unsplash.com/photo-1517445312882-6f2906411444?auto=format&fit=crop&w=800&q=80" },
        { title: "Thermal Hoodie", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80" },
        { title: "Formal Blazer", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80" },
        { title: "V-Neck T-Shirt", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80" },
        { title: "Cargo Pants", image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=800&q=80" },
        { title: "Woolen Sweater", image: "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=800&q=80" }
    ],
    women: [
        { title: "Summer Floral Dress", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80" },
        { title: "Silk Blouse", image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&w=800&q=80" },
        { title: "High-Waist Jeans", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80" },
        { title: "Maxi Skirt", image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80" },
        { title: "Leather Tote Bag", image: "https://images.unsplash.com/photo-1590874103328-3606713cac12?auto=format&fit=crop&w=800&q=80" },
        { title: "Evening Gown", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80" },
        { title: "Crop Top", image: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?auto=format&fit=crop&w=800&q=80" },
        { title: "Winter Coat", image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=800&q=80" },
        { title: "Yoga Leggings", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80" },
        { title: "Scarf", image: "https://images.unsplash.com/photo-1520903920248-0c653195bc77?auto=format&fit=crop&w=800&q=80" }
    ],
    kids: [
        { title: "Dinosaur T-Shirt", image: "https://images.unsplash.com/photo-1519238360142-6a6ffa394bf7?auto=format&fit=crop&w=800&q=80" },
        { title: "Denim Overalls", image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=800&q=80" },
        { title: "Party Dress", image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80" },
        { title: "School Backpack", image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80" },
        { title: "Sneakers for Kids", image: "https://images.unsplash.com/photo-1514989940723-e8872716f526?auto=format&fit=crop&w=800&q=80" },
        { title: "Winter Hat", image: "https://images.unsplash.com/photo-1535548677467-37caf4ec1f79?auto=format&fit=crop&w=800&q=80" },
        { title: "Cotton Pajamas", image: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?auto=format&fit=crop&w=800&q=80" },
        { title: "Rain Jacket", image: "https://images.unsplash.com/photo-1621452773781-0f992fd0f5d0?auto=format&fit=crop&w=800&q=80" },
        { title: "Toy Car Set", image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=800&q=80" },
        { title: "Building Blocks", image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80" }
    ],
    accessories: [
        { title: "Luxury Watch", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80" },
        { title: "Leather Belt", image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&q=80" },
        { title: "Sunglasses", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80" },
        { title: "Travel Backpack", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80" },
        { title: "Gold Necklace", image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&w=800&q=80" },
        { title: "Leather Wallet", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80" },
        { title: "Winter Scarf", image: "https://images.unsplash.com/photo-1584967918940-a7d51f06426e?auto=format&fit=crop&w=800&q=80" },
        { title: "Baseball Cap", image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80" },
        { title: "Wireless Earbuds", image: "https://images.unsplash.com/photo-1572569028738-411a197b83ea?auto=format&fit=crop&w=800&q=80" },
        { title: "Fitness Tracker", image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=800&q=80" }
    ],
    footwear: [
        { title: "Running Shoes", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80" },
        { title: "Leather Boots", image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80" },
        { title: "Casual Sneakers", image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80" },
        { title: "Formal Oxfords", image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=800&q=80" },
        { title: "Summer Sandals", image: "https://images.unsplash.com/photo-1603487742131-4160ec88a032?auto=format&fit=crop&w=800&q=80" },
        { title: "High Heels", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80" },
        { title: "Hiking Boots", image: "https://images.unsplash.com/photo-1520639888713-78db11c0dd26?auto=format&fit=crop&w=800&q=80" },
        { title: "Canvas Loafers", image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&w=800&q=80" },
        { title: "Sport Slides", image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?auto=format&fit=crop&w=800&q=80" },
        { title: "Chelsea Boots", image: "https://images.unsplash.com/photo-1605812853386-aa00a3881e58?auto=format&fit=crop&w=800&q=80" }
    ]
};

const brands = ["nike", "adidas", "puma", "levi", "zara", "h&m"];

const generateProducts = () => {
    const products = [];

    for (const [category, items] of Object.entries(productData)) {
        items.forEach(item => {
            const randomBrand = brands[Math.floor(Math.random() * brands.length)];
            const price = Math.floor(Math.random() * 5000) + 500;
            const salePrice = Math.random() > 0.5 ? price - Math.floor(Math.random() * 200) : 0;

            products.push({
                image: item.image,
                title: item.title,
                description: `Premium quality ${item.title.toLowerCase()} from ${randomBrand}. Perfect for your collection.`,
                category: category,
                brand: randomBrand,
                price: price,
                salePrice: salePrice > 0 ? salePrice : price,
                totalStock: Math.floor(Math.random() * 100) + 10,
                averageReview: (Math.random() * 2 + 3).toFixed(1),
            });
        });
    }

    return products;
};

const seedDB = async () => {
    try {
        await Product.deleteMany({});
        const products = generateProducts();
        await Product.insertMany(products);
        console.log(`Database seeded with ${products.length} products!`);
        mongoose.connection.close();
    } catch (error) {
        console.log(error);
    }
};

seedDB();
