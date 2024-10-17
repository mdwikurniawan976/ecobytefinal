export const FoodData = [

    {
        id: 2,
        category: ['breakfast'],
        name: 'Fried Rice',
        description: 'Transform leftover rice into a delicious fried rice delight, packed with veggies and simple spices!',
        ingredients: [
            "cup cooked rice (preferably day-old)",
            "tablespoons oil (vegetable or any cooking oil)",
            "pcs onion, chopped",
            "cloves garlic, minced",
            "pcs carrot, diced (optional)",
            "cup frozen peas (or any vegetables you have)",
            "eggs (optional)",
            "tablespoons soy sauce", "Salt and pepper to taste",
            "Green onions or herbs for garnish (optional)"],
        ingredientsValue: [
            "2", 
            "2", 
            "1", 
            "2", 
            "1", 
            "1", 
            "2", 
            "3",
            
        ],
        kalVallue: ["400", "240", "45", "10", "10", "60", "140", "30"],
        link: './images/food2.png',
        kal: '940',
       image: ['/images/recipe/friedRice1.jpg','/images/recipe/friedRice2.jpg','/images/recipe/friedRice3.jpg'],
        htc: [
            "Heat 2 tablespoons of oil in a large skillet over medium heat.",
            "Add chopped onion and minced garlic. Cook until fragrant and golden brown.",
            "Stir in diced carrots (if using) and cook until softened.",
            "Add frozen peas (or other vegetables) and cook for 2 minutes.",
            "Move the vegetables to the side of the pan and crack the eggs into the empty space. Scramble them until fully cooked.",
            "Add the day-old cooked rice and soy sauce. Stir well to combine everything evenly.",
            "Season with salt and pepper to taste. Cook for another 5-7 minutes, stirring occasionally.",
            "Garnish with chopped green onions or herbs before serving."
        ]
     
    },
    {
        id: 3,
        category: ['breakfast','vegetable'],
        name: 'Vegetable Pasta',
        description: 'Pasta mixed with leftover vegetables and a simple tomato sauce for a quick meal.',
        ingredients: ["cups of cooked pasta (penne, spaghetti, or any type)",
                      "cup of leftover vegetables (zucchini, carrots, bell peppers, broccoli, etc.)",
                      "tablespoon olive oil",
                      "clove garlic, minced",
                      "cup tomato sauce (or any leftover sauce)",
                      "cup grated Parmesan cheese (optional)",
                      "Salt and pepper to taste",
                      "Fresh herbs like basil or parsley for garnish (optional)"],
        ingredientsValue: [ "2 ", 
                            "1", 
                            "1 ",
                            "1", 
                            "0.5", 
                            "0.25"],
        kalVallue : ["400",
                    "100",
                    "120",
                    "40",
                    "110"],

        htc : [
            "In a large pot, heat olive oil over medium heat.",
            "Add minced garlic and sauté for about 1 minute until fragrant.",
            "Stir in the leftover vegetables and cook for 3-5 minutes until heated through.",
            "Add the cooked pasta and tomato sauce, mixing well.",
            "Cook for an additional 2-3 minutes, allowing everything to heat evenly.",
            "Season with salt and pepper to taste.",
            "If desired, sprinkle grated Parmesan cheese on top.",
            "Garnish with fresh herbs like basil or parsley before serving.",
            "Serve warm."
        ],                    
        link: './images/food3.png',
        kal: '550',
        image: ['/images/recipe/vegetablePasta1.jpg','/images/recipe/vegetablePasta2.jpg','/images/recipe/vegetablePasta3.jpg']
    },
    {
        id: 4,
        category: ['breakfast','vegetable'],
        name: 'Vegetable Soup',
        description: 'A warm and comforting soup made from leftover vegetables and broth.',
        ingredients: [
            "cups of leftover vegetables (carrots, potatoes, zucchini, spinach, bell peppers, etc.)",
            "tablespoon olive oil",
            "onion, chopped",
            "cloves garlic, minced",
            "cups vegetable broth",
            "can diced tomatoes (14.5 oz)",
            "teaspoon dried herbs (basil, thyme, or oregano)",
            "Salt and pepper to taste",
            "Fresh parsley or other herbs for garnish (optional)"
        ],
        ingredientsValue: [
            "2",
            "1",
            "1",
            "2",
            "4",
            "1",
            "1"
        ],
        kalVallue: [
            "150",
            "120",
            "45",
            "10",
            "60",
            "70",
            "0"
        ],        
        htc : ["Heat olive oil in a large pot over medium heat.",
        "Add chopped onion and minced garlic, sauté until softened.",
        "Stir in leftover vegetables and cook for a few minutes.",
        "Add vegetable broth and diced tomatoes, bring to a boil.",
        "Add dried herbs, salt, and pepper to taste. Simmer for 15-20 minutes.",
        "Serve hot, garnished with fresh parsley if desired."],
        link: './images/food4.png',
        kal: '550',
        image: ['/images/recipe/vegetableSoup1.jpg','/images/recipe/vegetableSoup2.jpg']
    },
    {
        id: 5,
        category: ['breakfast'],
        name: 'Toast Bread',
        description: 'Toasted bread topped with leftover spreads and fresh fruits.',
        ingredients: [
            "slices of bread (whole wheat or any type)",
            "tablespoon butter or oil",
            "leftover vegetables (any type, chopped)",
            "egg (optional)",
            "slice of cheese (optional)",
            "Salt and pepper to taste"
        ],
        ingredientsValue: [
            "2",
            "1",
            "1",
            "1",
            "1",
        ],
        kalVallue: [
            "160",
            "120",
            "50",
            "70",
            "100",
            "0"
        ],        
        htc : [
            "Heat butter or oil in a skillet over medium heat.",
            "Place slices of bread in the skillet and toast until golden brown.",
            "Add leftover vegetables on top of the toasted bread.",
            "If using, crack an egg on top and cook until the egg is done.",
            "Top with cheese if desired and season with salt and pepper.",
            "Serve warm."
        ],
        link: './images/food5.png',
        kal: '550',
        image: ['/images/recipe/toast1.jpg','/images/recipe/toast2.jpg']
    },
    {
        id: 6,
        category: ['desert'],
        name: 'Fruit Smoothie',
        description: 'A refreshing smoothie made with leftover fruits and yogurt for a healthy treat.',
        ingredients: [
            "cup leftover fruits (bananas, berries, apples, etc.)",
            "cup yogurt (plain or flavored)",
            "cup milk (or any plant-based milk)",
            "tablespoon honey or any sweetener (optional)",
            "ice cubes (optional)"
        ],
        ingredientsValue: [
            "1",
            "0.5",
            "0.5",
            "1",
            
        ],
        kalVallue: [
            "80",
            "75",
            "60",
            "20",
            "0"
        ],        
        htc : [
            "In a blender, combine leftover fruits, yogurt, and milk.",
            "Add honey or sweetener if desired, and blend until smooth.",
            "Add ice cubes if you prefer a colder smoothie and blend again.",
            "Pour into a glass and enjoy!"
        ],
        link: './images/food6.png',
        kal: '550',
        image: ['/images/recipe/fruitSmoothie1.jpg']
    },
    {
        id: 7,
        category: ['breakfast','desert'],
        name: 'Pancakes',
        description: 'Fluffy pancakes made with leftover ingredients, perfect for breakfast.',
        ingredients: [
            "cup leftover pancakes",
            "tablespoon butter or oil (for reheating)",
            "tablespoon maple syrup (optional)",
            "slice of fruit (banana, berries, etc., optional)",
            "tablespoon peanut butter or any spread (optional)"
        ],
        ingredientsValue: [
            "2",
            "1",
            "2",
            "1",
            "1"
        ],
        kalVallue: [
            "200",
            "120",
            "100",
            "50",
            "90"
        ],    
        htc : [
            "Reheat leftover pancakes in a skillet over medium heat with butter or oil.",
            "Serve warm with maple syrup and slices of fruit if desired.",
            "You can also spread peanut butter or any spread on top."
        ],    
        link: './images/food7.png',
        kal: '550',
        image: ['/images/recipe/pancakes1.jpg','/images/recipe/pancakes2.jpg','/images/recipe/pancakes3.jpg']
    },
    {
        id: 8,
        category: ['breakfast','vegetable'],
        name: 'Stir-Fried Vegetables',
        description: 'A quick stir-fry featuring various leftover vegetables and a flavorful sauce.',
        ingredients: [
            "cups leftover vegetables (broccoli, carrots, bell peppers, etc.)",
            "tablespoon vegetable oil",
            "cloves garlic, minced",
            "tablespoons soy sauce",
            "teaspoon sesame oil (optional)",
            "Green onions or herbs for garnish (optional)"
        ],
        ingredientsValue: [
            "2",
            "1",
            "2",
            "2",
            "1",
            
        ],
        kalVallue: [
            "100",
            "120",
            "10",
            "20",
            "40",
            "5"
        ],  
        htc : [
            "Heat vegetable oil in a large pan over medium-high heat.",
            "Add minced garlic and sauté for about 30 seconds.",
            "Add leftover vegetables and stir-fry for 5-7 minutes until heated through.",
            "Stir in soy sauce and sesame oil (if using).",
            "Garnish with green onions or herbs before serving."
        ],      
        link: './images/food8.png',
        kal: '550',
        image: ['/images/recipe/stirFriedVegetables1.jpg']
    },
    {
        id: 9,
        category: ['desert'],
        name: 'Oven Bread Pudding',
        description: "A delicious and simple dessert made with leftover bread, milk, eggs, and sweet toppings. Baked to golden perfection, it's perfect for a warm, comforting treat!",
        ingredients: [
            "unused or unconsumed slices of bread",
            "ml liquid milk ",
            "grams granulated sugar",
            "eggs",
            "teaspoon ground cinnamon ",
            "teaspoon salt",
            "grams raisins",
            "grams sliced ​​almonds",
        ],
        ingredientsValue: [
            "8",
            "250",
            "100",
            "3",
            "1",
            "1",
            "100",
            "100",
            
        ],
        kalVallue: [
            "640",
            "155",
            "387",
            "210",
            "7",
            "0",
            "299",
            "223",
        ],  
        htc : [
            "Preheat the oven to 180°C (350°F).",
            "Prepare a baking dish by greasing it lightly with butter or oil to prevent sticking.",
            "In a large bowl, mix together milk, sugar, eggs, cinnamon, and salt. Stir until well combined.",
            "Add the bread cubes into the milk mixture, making sure the bread is fully soaked. Let it sit for 10-15 minutes to absorb the liquid.",
            "Once the bread has absorbed the mixture, gently stir in the raisins and sliced almonds.",
            "Pour the mixture into the prepared baking dish.",
            "Bake for 30-40 minutes, or until the top is golden brown and the pudding is set.",
            "Once done, remove from the oven and let it cool slitly before serving.",
            "Enjoy your Oven Bread Pudding!",
        ],      
        link: './images/food8.png',
        kal: '1921',
        image: ['/images/recipe/breadpuding1.webp']
    },
    {
        id: 10,
        category: ['snack'],
        name: 'Soft and Crispy Rice Cireng',
        description: 'A savory snack made from leftover rice and tapioca flour, fried until crispy on the outside and soft on the inside. Perfect for a light, flavorful bite!',
        ingredients: [
            "grams of cooked rice",
            "tablespoon tapioca flour",
            "stalks of scallions, thinly sliced",
            "teaspoon garlic powder",
            "tablespoon salt",
            "teaspoon ground pepper",
           
        ],
        ingredientsValue: [
            "200",
            "12",
            "2",
            "2",
            "0.5",
            "0.5",
           
            
        ],
        kalVallue: [
            "100",
            "120",
            "10",
            "20",
            "40",
            "5"
        ],  
        htc : [
            "Sprinkle the rice with a little water, just enough to moisten it, and let it sit until the rice slightly expands.",
            "Blend the rice until it becomes somewhat smooth, then transfer it to a bowl.",
            "Add the tapioca flour, salt, garlic powder, ground pepper, and scallions, then mix until well combined.",
            "Add the tapioca flour, salt, garlic powder, ground pepper, and scallions, then mix until well combined.",
            "Shape the dough into small circles, dusting your hands with tapioca flour. Repeat until all the dough is shaped.",
            "Fry the cireng until it turns white and the outer layer becomes slightly hard and crispy.",
            "Remove from oil and drain.",
            "Enjoy with a sprinkle of chili powder or dipping sauce. Happy cooking!",
        ],      
        link: './images/food8.png',
        kal: '650',
        image: ['/images/recipe/cirengkacang1.webp']
    },
    {
        id: 11,
        category: ['snack'],
        name: 'Puli Crackers',
        description: "Crispy and crunchy crackers made from leftover rice and tapioca flour, dried and fried to perfection. A tasty, zero-waste snack that's light and delicious!",
        ingredients: [
            "plates of leftover rice (not spoiled)",
            "bsp tapioca flour",
            "cloves of garlic",
            "tsp coriander seeds",
            "tablespoon salt",
            "tsp stock powder",
            "Water as needed",
           
        ],
        ingredientsValue: [
            "3",
            "4",
            "4",
            "2",
            "2",
            "1",
           
            
        ],
        kalVallue: [
            "780",
            "142",
            "18",
            "12",
            "0",
            "2.5"
        ],  
        htc : [
            "Rinse the rice until the starch is removed.",
            "Steam the rice for about 15 minutes, then remove from heat.",
            "While still warm, mash the rice using a mortar and pestle until smooth.",
            "Grind the garlic, coriander, and salt until smooth.",
            "Mix the mashed rice, tapioca flour, and the ground spices together. Stir until well combined.",
            "Gradually add the stock powder and water, ensuring the dough is not too soft.",
            "Steam the rice mixture for about 10 minutes, then remove from heat.",
            "Take a portion of the dough, flatten it with a rolling pin.",
            "Sun-dry the flattened dough for two days under hot sunlight.",
            "Once dried, the crackers are ready to be fried.",
        ],      
        link: './images/food8.png',
        kal: '954.5 ',
        image: ['/images/recipe/krupukpuli1.jpg']
    },
    {
        id: 12,
        category: ['desert','breakfast'],
        name: 'Mango Smoothie Bowl',
        description: 'A creamy, refreshing smoothie bowl made with frozen mango and topped with fresh fruits and crunchy toppings. Perfect for a healthy and delicious breakfast!',
        ingredients: [
            "ripe mangoes (Harum Manis or Indramayu variety), frozen",
            "tablespoons Greek Yogurt",
            "Chia seeds, granola, bananas, strawberries, pistachios (as desired)",
            
           
        ],
        ingredientsValue: [
            "2",
            "4",
           
           
            
        ],
        kalVallue: [
            "240",
            "65",
            "120",
            
        ],  
        htc : [
            "Blend the frozen mango pieces and Greek yogurt until smooth.",
            "Pour into a bowl.",
            "Slice bananas and strawberries as desired.",
            "Add the banana slices, strawberries, and granola on top of the blended mango.",
            "Add additional toppings like chia seeds, granola, or pistachios for crunch as desired.",
            
        ],      
        link: './images/food8.png',
        kal: '665',
        image: ['/images/recipe/mangosmootiebowl1.jpeg']
    },
    {
        id: 13,
        category: ['breakfast'],
        name: 'Avocado Toast with Eggs',
        description: 'Mashed avocado on gluten-free toast, topped with cherry tomatoes, olive oil, and a sprinkle of salt and pepper.',
        ingredients: [
            "pieces gluten-free bread (Canyon Bakehouse, ~60g)",
            "gr ripe avocado",
            "eggs",
            "tablespoon coconut oil",
            "tablespoon Trader Joe's Everything But the Bagel Seasoning",
            "Hot sauce or Tabasco (optional)",
            "Salt & pepper",
            
            
           
        ],
        ingredientsValue: [
            "2",
            "70",
            "2",
            "1",
            "1",
           
           
            
        ],
        kalVallue: [
            "160",
            "115",
            "140",
            "120",
            "5",
            "5",
            "0",
            
            
        ],  
        htc : [
            "Heat 1 tablespoon coconut oil in a frying pan over medium heat.",
            "When the oil is hot, add the 2 eggs.",
            "Season lightly with salt and pepper.",
            "Set bread to toast so both items are done cooking around the same time.",
            "Fry eggs to desired doneness (I like mine over-hard).",
            "Remove toast to a plate.",
            "Spread mashed avocado on both pieces of toast, then top with one egg on each.",
            "Sprinkle Everything But The Bagel Seasoning on top of everything.",
            "Dash a little hot sauce if you want extra kick. Enjoy!",
            
        ],      
        link: ['https://www.thenomadicfitzpatricks.com/wp-content/uploads/2021/05/IMG_8023.jpg','https://images.pexels.com/photos/7936658/pexels-photo-7936658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
        kal: '610',
        image: ['/images/recipe/avocadotoast1.jpeg','/images/recipe/avocadotoast2.jpeg']
    },
  

]

