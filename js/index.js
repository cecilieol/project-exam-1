/* API CALL */

const url = "https://cecilieol.no/the-green-kitchen/wp-json/wp/v2/posts?_embed&per_page=20";

const latestContainer = document.querySelector(".latest-slides");
const arrowContainer = document.querySelector(".arrow-container");
const dotContainer = document.querySelector(".dot-container");
const quickContainer = document.querySelector(".quick-recipes");
const weekendContainer = document.querySelector(".weekend-recipes");

async function getFeatured() {
    try {
        const response = await fetch(url);
        const recipe = await response.json();

        console.log(recipe);

        latestContainer.innerHTML = "";
        quickContainer.innerHTML = "";
        weekendContainer.innerHTML = "";

        for (let i = 0; i < recipe.length; i++) {

            console.log(recipe[i].name);

            latestContainer.innerHTML += `<div class="latest-item">
                                                <a href="recipe.html?id=${recipe[i].id}">
                                                    <img src="${recipe[i]._embedded['wp:featuredmedia']['0'].source_url}" alt="${recipe[i].title.rendered}">
                                                    <h3>${recipe[i].title.rendered}</h3>
                                                </a>
                                            </div>`;

            arrowContainer.innerHTML = `<button class="prev" onclick="prevRecipe(-1)">&#10094;</button>
                                        <button class="next" onclick="nextRecipe(1)">&#10095;</button>`;
            
            dotContainer.innerHTML = `<button class="dot current" onclick="currentRecipe(1)"></button>
                                      <button class="dot" onclick="currentRecipe(2)"></button>
                                      <button class="dot" onclick="currentRecipe(3)"></button>
                                      <button class="dot" onclick="currentRecipe(4)"></button>`;

            if (i === 3) {
                break;
            }

        }

        for (let i = 0; i < recipe.length; i++) {

          console.log(recipe[i].name);

          quickContainer.innerHTML = `<div class="quick-item">
                                            <a href="recipe.html?id=${recipe[0].id}">
                                              <img src="${recipe[0]._embedded['wp:featuredmedia']['0'].source_url}" alt="${recipe[0].title.rendered}">
                                              <h3>${recipe[0].title.rendered}</h3>
                                            </a>
                                        </div>
                                        <div class="quick-item">
                                            <a href="recipe.html?id=${recipe[3].id}">
                                              <img src="${recipe[3]._embedded['wp:featuredmedia']['0'].source_url}" alt="${recipe[3].title.rendered}">
                                              <h3>${recipe[3].title.rendered}</h3>
                                            </a>
                                        </div>
                                        <div class="quick-item">
                                            <a href="recipe.html?id=${recipe[5].id}">
                                              <img src="${recipe[5]._embedded['wp:featuredmedia']['0'].source_url}" alt="${recipe[5].title.rendered}">
                                              <h3>${recipe[5].title.rendered}</h3>
                                            </a>
                                        </div>
                                        <div class="quick-item">
                                            <a href="recipe.html?id=${recipe[7].id}">
                                              <img src="${recipe[7]._embedded['wp:featuredmedia']['0'].source_url}" alt="${recipe[7].title.rendered}">
                                              <h3>${recipe[7].title.rendered}</h3>
                                            </a>
                                        </div>`;
        }

        for (let i = 0; i < recipe.length; i++) {

          console.log(recipe[i].name);
          
          weekendContainer.innerHTML = `<div class="weekend-item">
                                            <a href="recipe.html?id=${recipe[4].id}">
                                              <img src="${recipe[4]._embedded['wp:featuredmedia']['0'].source_url}" alt="${recipe[4].title.rendered}">
                                              <h3>${recipe[4].title.rendered}</h3>
                                            </a>
                                        </div>
                                        <div class="weekend-item">
                                            <a href="recipe.html?id=${recipe[8].id}">
                                              <img src="${recipe[8]._embedded['wp:featuredmedia']['0'].source_url}" alt="${recipe[8].title.rendered}">
                                              <h3>${recipe[8].title.rendered}</h3>
                                            </a>
                                        </div>
                                        <div class="weekend-item">
                                            <a href="recipe.html?id=${recipe[10].id}">
                                              <img src="${recipe[10]._embedded['wp:featuredmedia']['0'].source_url}" alt="${recipe[10].title.rendered}">
                                              <h3>${recipe[10].title.rendered}</h3>
                                            </a>
                                        </div>
                                        <div class="weekend-item">
                                            <a href="recipe.html?id=${recipe[11].id}">
                                              <img src="${recipe[11]._embedded['wp:featuredmedia']['0'].source_url}" alt="${recipe[11].title.rendered}">
                                              <h3>${recipe[11].title.rendered}</h3>
                                            </a>
                                        </div>`;

        }

    } catch(error) {
        console.log(error);
        if (latestContainer.innerHTML = "") {
            latestContainer.innerHTML = displayError("An error occurred when calling the API");
        } else {
            latestContainer.innerHTML += displayError("An error occurred fetching all recipes from the API");
        }
        
    }
}

getFeatured();


/* SLIDESHOW */

var slideIndex = 1;
initSlides(slideIndex);

function nextRecipe(x) {
  initSlides(slideIndex += x);
}

function prevRecipe(x) {
  initSlides(slideIndex += x);
}

function currentRecipe(x) {
  initSlides(slideIndex = x);
}

function initSlides(x) {
  const slideItem = document.querySelectorAll(".latest-item");
  const slideDot = document.querySelectorAll(".dot");

  if (x < 1) {
    slideIndex = slideItem.length;
  } 

  if (x > slideItem.length) {
    slideIndex = 1;
  }

  for (i = 0; i < slideItem.length; i++) {
    slideItem[i].style.display = "none"; 
  }

  for (i = 0; i < slideDot.length; i++) {
    slideDot[i].className = slideDot[i].className.replace(" current", "");
  }
  
  slideItem[slideIndex-1].style.display = "block"; 
  slideDot[slideIndex-1].className += " current";
}