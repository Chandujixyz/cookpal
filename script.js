const product=[
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]

const container=document.getElementById("card-container");
function DisplayRecipes(RecipesToDisplay){
    container.innerHTML=""; 
    RecipesToDisplay.forEach((e)=>{
    
const div=document.createElement("div");
div.className="item";

const name=document.createElement("b");
name.innerText=e.name;

const type=document.createElement("h3");
type.innerText=e.type;

const but=document.createElement("button");
but.innerHTML = e.isLiked ? "Liked" : "Not Liked";
 
const time=document.createElement("p");
time.innerText=e.time;

const rating=document.createElement("p");
rating.innerText=e.rating;

const img=document.createElement("img");
img.src=e.imageSrc;
img.alt=e.imageSrc;

div.append(img,type,name,but,time,rating);
container.appendChild(div);

})
}

DisplayRecipes(product);
/////////////////////////////////////////////////////////////
  //search
// Get the search input element
const searchInput = document.getElementById("search");

// Add an event listener for input changes in the search bar
searchInput.addEventListener("input", function(event) {
    // Get the lowercase search text from the input
    const searchText = event.target.value.toLowerCase();

    // Filter recipes based on whether their name includes the search text
    const filteredRecipes = product.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchText)
    );

    // Display the filtered recipes
    DisplayRecipes(filteredRecipes);
});
////////////////////////////////////////////////////////////////////
 //filter recipes veg or non veg 

 document.getElementById("showAll").addEventListener('click',()=>filteredRecipesfn());
document.getElementById("showveg").addEventListener('click',()=>filteredRecipesfn('veg'));
document.getElementById("shownonveg").addEventListener('click',()=>filteredRecipesfn('non-veg'));
 function filteredRecipesfn(type="all"){
    if(type=="all"){
        DisplayRecipes(product);
    }else{
        let filteredRecipes=product.filter((recipe)=>recipe.type==type);
        DisplayRecipes(filteredRecipes);
    }
 }
  

 /////////////////////////////////////////////////////////////////////
//  radio button

document.querySelectorAll('input[name="rating"]').forEach((radio)=>{
    radio.addEventListener("change",filterByRating);
 });
 function filterByRating(){
    let ratingAbove=document.getElementById("ratingB").checked;
    let ratingBelow=document.getElementById("ratingA").checked;

   let filteredRecipes=product.filter((recipe)=>{
        if(ratingAbove && recipe.rating > 4.0) return true;
        if(ratingBelow && recipe.rating < 4.0) return true;
         return false;
    });
    DisplayRecipes(filteredRecipes);
 }


