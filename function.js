document.getElementById("all").addEventListener("click", FunctionOne);
function FunctionOne() {
  document.createElement('');
};

document.getElementById("vegetarian").addEventListener("click", FunctionTwo);
function FunctionTwo() {
  document.getElementById("beanFetaSalad").remove();
  document.getElementById("redCurry").remove();
};

document.getElementById("vegan").addEventListener("click", FunctionThree);
function FunctionThree() {
  document.getElementById("macAndCheese").remove();
  document.getElementById("redCurry").remove();
  document.getElementById("parsnipGratin").remove();
};

document.getElementById("gluten").addEventListener("click", FunctionFour);
function FunctionFour() {
  document.getElementById("macAndCheese").remove();
  document.getElementById("redCurry").remove();
  document.getElementById("scallionPancakes").remove();
  document.getElementById("scallionPancakes").remove();
};

document.getElementById("nut").addEventListener("click", FunctionFive);
function FunctionFive() {
  document.getElementById("beanFetaSalad").remove();
  document.getElementById("macAndCheese").remove();
  document.getElementById("redCurry").remove();
  document.getElementById("scallionPancakes").remove();
  document.getElementById("chickpeaCurry").remove();
  document.getElementById("parsnipGratin").remove();
};


// use the toggle function but that's alos not really what we wanted
// function allfunction() {
//   var food1 = document.getElementById("macAndCheese");
//   food1.style.display == "block" ? food1.style.display = "none" :
// food1.style.display = "block";
// var food2 = document.getElementById("redCurry");
//   food2.style.display == "block" ? food2.style.display = "none" :
// food2.style.display = "block";
// var food3 = document.getElementById("scallionPancakes");
//   food3.style.display == "block" ? food3.style.display = "none" :
// food3.style.display = "block";
// var food4 = document.getElementById("chickpeaCurry");
//   food4.style.display == "block" ? food4.style.display = "none" :
// food4.style.display = "block";
// var food5 = document.getElementById("beanFetaSalad");
//   food5.style.display == "block" ? food5.style.display = "none" :
// food5.style.display = "block";
// var food6 = document.getElementById("parsnipGratin");
//   food6.style.display == "block" ? food6.style.display = "none" :
// food6.style.display = "block";
// }

// function vegetarianfunction() {
//   var food1 = document.getElementById("beanFetaSalad");
//   food1.style.display == "block" ? food1.style.display = "none" :
// food1.style.display = "block";
// var food2 = document.getElementById("redCurry");
//   food2.style.display == "block" ? food2.style.display = "none" :
// food2.style.display = "block";
// }

// function veganfunction() {
//   var food1 = document.getElementById("macAndCheese");
//   food1.style.display == "block" ? food1.style.display = "none" :
// food1.style.display = "block";
// var food2 = document.getElementById("redCurry");
//   food2.style.display == "block" ? food2.style.display = "none" :
// food2.style.display = "block";
// var food3 = document.getElementById("parsnipGratin");
//   food3.style.display == "block" ? food3.style.display = "none" :
// food3.style.display = "block";
// }


// function glutenfunction() {
//   var food1 = document.getElementById("macAndCheese");
//   food1.style.display == "block" ? food1.style.display = "none" :
// food1.style.display = "block";
// var food2 = document.getElementById("redCurry");
//   food2.style.display == "block" ? food2.style.display = "none" :
// food2.style.display = "block";
// var food3 = document.getElementById("scallionPancakes");
//   food3.style.display == "block" ? food3.style.display = "none" :
// food3.style.display = "block";
// var food4 = document.getElementById("chickpeaCurry");
//   food4.style.display == "block" ? food4.style.display = "none" :
// food4.style.display = "block";
// }



// No clue how this works
// filterSelection("all")
// function w3AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
//   }
// }

// function w3RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);
//     }
//   }
//   element.className = arr1.join(" ");
// }


/*
let data = [
  {
    name: "Warm Broad Bean and Feta Salad"
    ingredients: ["bean","tomato","garlic","feta","cheese","parsley","olive"]
    diet: ["meat","dairy"]
    locale: "home"
    time: "30"
  },
  {
    name: "Mac and Cheese"
    ingredients: ["cheese","pasta","milk","butter"]
    diet: ["dairy","gluten"]
    locale: "home"
    time: "25"
  },
  {
    name: "Thai Red Curry with Vegetables"
    ingredients: ["rice","coconut","onion","ginger","garlic","pepper","carrot","curry","kale","lime","basil","sriracha","soy"]
    diet: ["dairy","meat","gluten","soy"]
    locale: "home"
    time: "40"
  },
  {
    name: "Scallion Pancakes"
    ingredients: ["flour","sesame","scallion","soy","pepper"]
    diet: ["gluten","soy","sesame"]
    locale: "home"
    time: "45"
  },
  {
    name: "Curry Chickpea and Cauliflower"
    ingreients: ["potato","cauliflower","chickpea","curry"]
    diet: "all"
    locale: "home"
    time: "45"
  },
  {
    name: "Parsnip Gratin with Gruyere and Thyme"
    ingredients: ["parsnip","onion","cream","butter","nutmeg","thyme","flour","garlic","gruyere","cheese"]
    diet: ["dairy","gluten"]
    locale: "home"
    time: "100"
  },
  {
    name: "Harira"
    ingredients: ["lamb","onion","garlic","tomato","cumin","paprika","clove","bay","beef","coriander","chickpea","lentil"]
    diet: "meat"
    locale: "home"
    time: "145"
  },
  {
    name: "French Bread Pizza"
    ingredients: ["tomato","mushroom","bread","cheese"]
    diet: ["dairy","gluten"]
    locale: "home"
    time: "25"
  },
  {
    name: "West African Stew with Sweet Poato and Greens"
    ingredients: ["onion","ginger","pepper","tomato","peanut","coriander","cumin","coconut","yam","okra","kale","lime","rice"]
    diet: "nut"
    locale: "home"
    time: "60"
  },
  {
    name: "Peanut Butter and Jelly Sandwich"
    ingredients: ["peanut","jelly","bread"]
    diet: ["nut","gluten"]
    locale: "home"
    time: "5"
  },
  {
    name: "Garlicky Spaghetti"
    ingredients: ["garlic","bread","pepper","pasta","butter","anchovy","lemon","parmesan","parsley"]
    diet: "gluten"
    locale: "home"
    time: "10"
  },
  {
    name: "Creamy Lemon Garlic Salmon"
    ingredients: ["salmon","fish","pepper","butter","garlic","flour","cream","lemon","dill"]
    diet: ["fish","meat","dairy"]
    locale: "home"
    time: "10"
  },
  {
    name: "Grilled Cheese"
    ingredients: ["butter","bread","cheddar","cheese"]
    diet: ["dairy","gluten"]
    locale: "home"
    time: "5"
  },
  {
    name: "Baked Pineapple Salmon"
    ingredients: ["pineapple","salmon","fish","pepper","butter","cilantro","garlic","ginger","sesame","lime"]
    diet: ["sesame","fish","meat"]
    locale: "home"
    time: "55"
  },
  {
    name: "Reese Witherspoon's Corn Bread Chili Pie"
    ingredients: ["onion","garlic","beef","pork","pepper","tomato","egg","milk","corn","cheddar","cheese","bean"]
    diet: ["meat","dairy"]
    locale: "home"
    time: "60"
  },
  {
    name: "Chicken Fajitas"
    ingredients: ["lime","cumin","pepper","chicken","onion","tortilla"]
    diet: ["meat","gluten"]
    locale: "home"
    time: "50"
  },
  {
    name: "Farmer's Omelet"
    ingredients: ["bacon","bierwurst","potato","crouton","egg","milk","emmenntaler","cheese","pepper"]
    diet: ["dairy","gluten"]
    locale: "home"
    time: "30"
  },
  {
    name: "Spatzle"
    ingredients: ["flour","egg","pepper","cream","milk"]
    diet: ["dairy","gluten"]
    locale: "home"
    time: "20"
  },
  {
    name: "Jamaican Beef Patties"
    ingredients: ["beef","pepper","onion","curry","bread","empanadaDiscos"]
    diet: ["meat","gluten"]
    locale: "home"
    time: "40"
  },
  {
    name: "Jerk Chicken with Rice and Peas"
    ingredients: ["chicken","onion","clove","nutmeg","allspice","soy","sugar","thyme","lime","pepper","rice","coconut","bean"]
    diet: ["meat","soy"]
    locale: "home"
    time: "400"
  },
  {
    name: "Goulash Soup"
    ingredients: ["beef","potato","butter","onion","paprika","pepper","caraway","garlic","tomato"]
    diet: "meat"
    locale: "home"
    time: "400"
  },
  {
    name: "Potato Dumplings with Bryndza"
    ingredients: ["potato","byrndza","bacon","cheese"]
    diet: ["meat","dairy"]
    locale: "home"
    time: "30"
  },
  {
    name: "Corn and Melon Soup"
    ingredients: ["pork,","melon","corn"]
    diet: "meat"
    locale: "home"
    time: "120"
  },
  {
    name: "Zosui"
    ingredients: ["dashi","soy","chicken","carrot","mushroom","onion","rice","egg","sesame","pepper"]
    diet: ["soy","meat","sesame"]
    locale: "home"
    time: "30"
  },
  {
    name: "Instant Ramen"
    ingredients: "ramen"
    diet: "gluten"
    locale: "home"
    time: "10"
  },
  {
    name: "Panera Bread"
    ingredients: "none"
    diet: "all"
    locale: "takeout"
    time: "30"
  },
  {
    name: "Chipotle"
    ingredients: "none"
    diet: "all"
    locale: "takeout"
    time: "30"
  },
  [
    name: "Starbucks"
    ingredients: "none"
    diet: "all"
    locale: "takeout"
    time: "30"
  ],
  {
    name: "Cheesecake Factory"
    ingredients: "none"
    diet: "all"
    locale: "takeout"
    time: "30"
  },
  {
    name: "Taco Bell"
    ingredients: "none"
    diet: "all"
    locale: "takeout"
    time: "30"
  },
  {
    name: "McDonalds"
    ingredients: "none"
    diet: "all"
    locale: "takeout"
    time: "30"
  },
  {
    name: "Panda Express"
    ingredients: "none"
    diet: "all"
    locale: "takeout"
    time: "30"
  },
  {
    name: "Chick-fil-a"
    ingredients: "none"
    diet: "all"
    locale: "takeout"
    time: "30"
  },
  {
    name: "In-n-Out Burger"
    ingredients: "none"
    diet: "all"
    locale: "takeout"
    time: "30"
  },
  {
    name: "Domino's"
    ingredients: "none"
    diet: "all"
    locale: "takeout"
    time: "30"*/
