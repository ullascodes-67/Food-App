import React, { useEffect, useState } from "react";
import Card from "./Card";

const Food = () => {
  const [data, setData] = useState([]);
  const foodData = [
    {
      id: 1,
      name: "Classic Burger",
      category: "Burger",
      price: 199,
      rating: 4.8,
      deliveryTime: "20-25 min",
      image:
        "https://thetastefulpantry.com/wp-content/uploads/2024/02/Classic-Beef-Burger-feature-1200x628-2.png",
    },
    {
      id: 2,
      name: "Margherita Pizza",
      category: "Pizza",
      price: 299,
      rating: 4.9,
      deliveryTime: "25-30 min",
      image:
        "https://static.vecteezy.com/system/resources/previews/020/222/733/large_2x/italian-pizza-margherita-with-tomato-sauce-mozzarella-cheese-basil-on-a-dark-concrete-background-pizza-recipe-and-menu-free-photo.jpg",
    },
    {
      id: 3,
      name: "French Fries",
      category: "Sides",
      price: 129,
      rating: 4.6,
      deliveryTime: "15-20 min",
      image:
        "https://www.thespruceeats.com/thmb/IHKuXcx3uUI1IWkM_cnnQdFH-zQ=/3485x2323/filters:fill(auto,1)/how-to-make-homemade-french-fries-2215971-hero-01-02f62a016f3e4aa4b41d0c27539885c3.jpg",
    },
    {
      id: 4,
      name: "Chicken Wrap",
      category: "Wraps",
      price: 219,
      rating: 4.7,
      deliveryTime: "20-25 min",
      image:
        "https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Wrap.jpg",
    },
    {
      id: 5,
      name: "Jalebii",
      category: "Dessert",
      price: 199,
      rating: 4.9,
      deliveryTime: "15-20 min",
      image:
        "https://gustotv.com/wp-content/uploads/2025/10/GSE_1012_SyrupSoakedFriedDoughSpiralsIndia_4k_16x9.jpg",
    },
    {
      id: 6,
      name: "Pepperoni Pizza",
      category: "Pizza",
      price: 349,
      rating: 4.8,
      deliveryTime: "30-35 min",
      image:
        "https://thelionsroarmhsn.com/wp-content/uploads/2015/04/Pepperoni_1.jpg",
    },
    {
      id: 7,
      name: "Chicken Nuggets",
      category: "Sides",
      price: 189,
      rating: 4.8,
      deliveryTime: "20-25 min",
      image:
        "https://i.pinimg.com/originals/62/d1/d0/62d1d031a5ccc44f745e923f2d5d6997.jpg",
    },
    {
      id: 8,
      name: "Cheese Burger",
      category: "Burger",
      price: 229,
      rating: 4.7,
      deliveryTime: "20-25 min",
      image: "https://images3.alphacoders.com/138/thumb-1920-1386826.webp",
    },
    {
      id: 9,
      name: "Pasta Alfredo",
      category: "Pasta",
      price: 269,
      rating: 4.8,
      deliveryTime: "25-30 min",
      image:
        "https://res.cloudinary.com/norgesgruppen/images/c_scale,dpr_auto,f_auto,q_auto:eco,w_1600/tulcxcntmwnys5ndgqvk/pasta-alfredo",
    },
    {
      id: 10,
      name: "Chocolate Milkshake",
      category: "Drinks",
      price: 149,
      rating: 4.8,
      deliveryTime: "10-15 min",
      image:
        "https://www.robinage.com/wp-content/uploads/2023/05/CHOCOLATE-HAZELNUT-MILKSHAKE.jpg",
    },
    {
      id: 11,
      name: "BBQ Chicken Pizza",
      category: "Pizza",
      price: 379,
      rating: 4.9,
      deliveryTime: "30-35 min",
      image:
        "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2022/02/bbq-chicken-pizza-1.jpg",
    },
    {
      id: 12,
      name: "Caesar Salad",
      category: "Salad",
      price: 179,
      rating: 4.6,
      deliveryTime: "15-20 min",
      image:
        "https://www.inspiredtaste.net/wp-content/uploads/2025/01/Chicken-Caesar-Salad-Recipe.jpg",
    },
    {
      id: 13,
      name: "Double Patty Burger",
      category: "Burger",
      price: 299,
      rating: 4.9,
      deliveryTime: "25-30 min",
      image:
        "https://thumbs.dreamstime.com/b/cinematic-black-white-long-exposure-gourmet-double-burger-capturing-dramatic-nighttime-ambiance-captivating-360391250.jpg",
    },
    {
      id: 14,
      name: "Red Velvet Cake",
      category: "Dessert",
      price: 229,
      rating: 4.8,
      deliveryTime: "15-20 min",
      image:
        "https://noobrecipes.com/wp-content/uploads/2025/11/Red-Velvet-Cake.jpg",
    },
    {
      id: 15,
      name: "Peri Peri Fries",
      category: "Sides",
      price: 159,
      rating: 4.8,
      deliveryTime: "15-20 min",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/038/186/809/small_2x/ai-generated-crispy-french-fries-crunchy-salty-tasty-with-cinematic-light-and-blur-background-ai-generated-photo.jpg",
    },
    {
      id: 16,
      name: "Veg Supreme Pizza",
      category: "Pizza",
      price: 319,
      rating: 4.7,
      deliveryTime: "30-35 min",
      image:
        "https://harekrishnarecipes.com/wp-content/uploads/2024/08/Vegetable-Supreme-Pizza-Recipe.webp",
    },
    {
      id: 17,
      name: "Paneer Wrap",
      category: "Wraps",
      price: 209,
      rating: 4.6,
      deliveryTime: "20-25 min",
      image:
        "https://img.freepik.com/fotos-premium/kolkatastyle-paneer-kathi-roll-eine-klassische-cottage-kaese-wrap_861171-11514.jpg?semt=ais_hybrid&w=740",
    },
    {
      id: 18,
      name: "Greek Salad",
      category: "Salad",
      price: 189,
      rating: 4.7,
      deliveryTime: "15-20 min",
      image:
        "https://initiativenetwork.org/wp-content/uploads/2024/06/Origins-of-Greek-Salad.jpg",
    },
    {
      id: 19,
      name: "Spaghetti Bolognese",
      category: "Pasta",
      price: 289,
      rating: 4.9,
      deliveryTime: "25-30 min",
      image:
        "https://img.freepik.com/premium-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-table-cinematic-pasta-close-up_744422-13971.jpg",
    },
    {
      id: 20,
      name: "Chicken Wings",
      category: "Sides",
      price: 249,
      rating: 4.9,
      deliveryTime: "20-25 min",
      image:
        "https://img.freepik.com/premium-photo/perfect-view-close-up-crispy-chicken-tenders-with-blur-background-cinematic_358001-12894.jpg",
    },
    {
      id: 21,
      name: "Chocolate Donut",
      category: "Dessert",
      price: 99,
      rating: 4.7,
      deliveryTime: "10-15 min",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/027/718/090/small_2x/sweet-chocolate-donut-with-cherry-generative-ai-photo.jpg",
    },
    {
      id: 22,
      name: "Chicken Burger",
      category: "Burger",
      price: 249,
      rating: 4.8,
      deliveryTime: "20-25 min",
      image:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/air_fryer_cblt_burger_03517_16x9.jpg",
    },
    {
      id: 23,
      name: "Mac & Cheese",
      category: "Pasta",
      price: 249,
      rating: 4.7,
      deliveryTime: "25-30 min",
      image:
        "https://olivesandfeta.blog/wp-content/uploads/2025/04/macaroni-and-cheese-recipe-1744427001.jpg",
    },
    {
      id: 24,
      name: "Strawberry Smoothie",
      category: "Drinks",
      price: 159,
      rating: 4.9,
      deliveryTime: "10-15 min",
      image:
        "https://iliveforgreens.com/wp-content/uploads/2023/04/Strawberry-Smoothie-for-Weight-Loss-2048x1363.jpg",
    },
    {
      id: 25,
      name: "Cheese Fries",
      category: "Sides",
      price: 169,
      rating: 4.7,
      deliveryTime: "15-20 min",
      image:
        "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/08/chili-cheese-fries.jpg",
    },
  ];

  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-6
        justify-items-center
        px-4
        md:px-10
        py-6
      "
    >
      {foodData.map((item) => {
        return (
          <Card
            key={item.id}
            img={item.image}
            name={item.name}
            rating={item.rating}
            time={item.deliveryTime}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

export default Food;
