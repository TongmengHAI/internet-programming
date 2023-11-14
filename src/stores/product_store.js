import { defineStore } from "pinia";

export const useProductStore = defineStore('product_store', {
    state: () => ({
            category:[
                {
                    id:1,
                    img: "./src/assets/img/humbeger.png",
                    name: "Cake & Milk",
                    num_item: "14",
                    bg_color: "#F2FCE4",
                    group: "Milks & Diaries",

                },
                {
                    id:2,
                    img: "./src/assets/img/persimmon.png",
                    name: "Peach",
                    num_item: "17",
                    bg_color: "#FFFCEB",
                    group: "Fruits",

                },
                {
                    id:3,
                    img: "./src/assets/img/kiwi.png",
                    name: "Oganic Kiwi",
                    num_item: "21",
                    bg_color: "#ECFFEC",
                    group: "Fruits",

                },
                {
                    id:4,
                    img: "./src/assets/img/apple.png",
                    name: "Red apple",
                    num_item: "68",
                    bg_color: "#FEEFEA",
                    group: "Fruits",
                },
                {
                    id:5,
                    img: "./src/assets/img/snack.png",
                    name: "Snack",
                    num_item: "34",
                    bg_color: "#FFF3EB",
                    group: "Coffees & Teas",

                },
                {
                    id:6,
                    img: "./src/assets/img/blueberry.png",
                    name: "Black plum",
                    num_item: "25",
                    bg_color: "#FFF3FF",
                    group: "Fruits",
                },
                {
                    id:7,
                    img: "./src/assets/img/cabbage.png",
                    name: "Vegetables",
                    num_item: "65",
                    bg_color: "#F2FCE4",
                    group: "Vegetable",
                },
                {
                    id:8,
                    img: "./src/assets/img/headphone.png",
                    name: "Headphone",
                    num_item: "33",
                    bg_color: "#FFFCEB",
                    group: "Accessory",

                },
                {
                    id:9,
                    img: "./src/assets/img/Biscuits.png",
                    name: "Cake & Milk",
                    num_item: "54",
                    bg_color: "#F2FCE4",
                    group: "Milks & Diaries",

                },
                {
                    id:10,
                    img: "./src/assets/img/orange.png",
                    name: "Orange",
                    num_item: "63",
                    bg_color: "#FFF3FF",
                    group: "Fruit",

                }
            ],

            promotion:[
                {   

                    id:1,
                    img: "./src/assets/img/oinoin.png",
                    title: "Everyday Fresh & Clean with Our Products",
                    bg_color: "#F0E8D5",
                    btn_color: '#3BB77E',
                },
                {
                    id:2,
                    img: "./src/assets/img/juice.png",
                    title: "Make your Breakfast Healthy and Easy",
                    bg_color: "#F3E8E8",
                    btn_color: '#3BB77E',
                },
                {
                    id:3,
                    img: "./src/assets/img/vegetables.png",
                    title: "The best Organic Products Online",
                    bg_color: "#E7EAF3",
                    btn_color: '#FDC040',
                }

            ],

            groups:[
                "Milks & Diaries", 
                "Coffees & Teas", 
                "Pet Foods", 
                "Meats",
                "Vegetable",
                "Fruit",
                "Accessory"
            ],

            products:[
                {
                    id: 1,
                    tag: "-17%",
                    image: './src/assets/img/mengo.png',
                    category: 1,
                    type:"Hodo Food",
                    name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
                    rate: 4,
                    description: "500 gram",
                    sellPrice: 2.80,
                    discountPercentage: 17,
                    discountPrice: 2.51
                },
                {
                    id: 2,
                    tag: "Hot",
                    image: './src/assets/img/corn.png',
                    category: 2,
                    type:"Hodo Food",
                    name: "All Natural Italian-Style Chicken Meatballs",
                    rate: 4,
                    description: "500 gram",
                    sellPrice: 2.80,
                    discountPercentage: 17,
                    discountPrice: 2.51
                },
                {
                    id: 3,
                    tag: "Sale",
                    image: './src/assets/img/oranges.png',
                    category: 2,
                    type:"Hodo Food",
                    name: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
                    rate: 4,
                    description: "500 gram",
                    sellPrice: 2.80,
                    discountPercentage: 17,
                    discountPrice: 2.51
                },
                {
                    id: 4,
                    tag: " ",
                    image: './src/assets/img/chilis.png',
                    category: 3,
                    type:"Hodo Food",
                    name: "Foster Farms Takeout Crispy Classic Buffalo Wings",
                    rate: 4,
                    description: "500 gram",
                    sellPrice: 2.80,
                    discountPercentage: 17,
                    discountPrice: 2.51
                },
                {
                    id: 5,
                    tag: " ",
                    image: './src/assets/img/lemons.png',
                    category: 3,
                    type:"Hodo Food",
                    name: "Blue Diamond Almonds Lightly Salted Vegetables",
                    rate: 4,
                    description: "500 gram",
                    sellPrice: 2.80,
                    discountPercentage: 17,
                    discountPrice: 2.51
                },
                {
                    id: 6,
                    tag: " ",
                    image: './src/assets/img/fish.png',
                    category: 3,
                    type:"Hodo Food",
                    name: "Chobani Complete Vanilla Greek Yogurt",
                    rate: 4,
                    description: "500 gram",
                    sellPrice: 2.80,
                    discountPercentage: 17,
                    discountPrice: 2.51
                },
                {
                    id: 7,
                    tag: "Sale",
                    image: './src/assets/img/fish_lemon.png',
                    category: 4,
                    type:"Hodo Food",
                    name: "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
                    rate: 4,
                    description: "500 gram",
                    sellPrice: 2.80,
                    discountPercentage: 17,
                    discountPrice: 2.51
                },
                {
                    id: 8,
                    tag: " ",
                    image: './src/assets/img/steak.png',
                    category: 5,
                    type:"Hodo Food",
                    name: "Encore Seafoods Stuffed Alaskan Salmon",
                    rate: 4,
                    description: "500 gram",
                    sellPrice: 2.80,
                    discountPercentage: 17,
                    discountPrice: 2.51
                },
                {
                    id: 9,
                    tag: " ",
                    image: './src/assets/img/fish_fille.png',
                    category: 6,
                    type:"Hodo Food",
                    name: "Gorton’s Beer Battered Fish Fillets with soft paper",
                    rate: 4,
                    description: "500 gram",
                    sellPrice: 2.80,
                    discountPercentage: 17,
                    discountPrice: 2.51
                },
                {
                    id: 10,
                    tag: "Hot",
                    image: './src/assets/img/vegetable.png',
                    category: 7,
                    type:"Hodo Food",
                    name: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
                    rate: 4,
                    description: "500 gram",
                    sellPrice: 2.80,
                    discountPercentage: 17,
                    discountPrice: 2.51
                },

                
            ],
        
    }),


    getters: {
        // countProductsByCategory: (state) => {
            
        //     const productCountsByCategory = {};
        //     for (const category of state.category) {
        //         productCountsByCategory[category] = state.products.filter(
        //             (product) => product.category === category
        //         ).length;
        //     }
        
        //     return productCountsByCategory;
        // },

    },
    // actions:{
    //     async fetchTodos(){
    //         const product_store = new Promise((resovle)=>{
    //             setTimeout(() => {
    //                 resovle([
    //                         {
    //                             id :1,
    //                             task:"do assignment",
    //                             status:"pending",
    //                             time:"11/1/2023 7:00"
    //                         },
    //                         {
    //                             id :2,
    //                             task:"homework",
    //                             status:"pending",
    //                             time:"11/1/2023 7:00"
    //                         }
    //                     ])
    //             }, 1000);
    //         }).then(this.product_store= product_store);
    //     }
    // }
})