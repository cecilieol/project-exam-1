const postList = "https://cecilieol.no/the-green-kitchen/wp-json/wp/v2/posts";

const latestList = document.querySelector(".latest-list");

async function getList() {
    try {
        const listResponse = await fetch(postList);
        const list = await listResponse.json();

        console.log(list);

        latestList.innerHTML = "";

        for (let i = 0; i < list.length; i++) { 
          
            console.log(list[i].name);
            
            latestList.innerHTML += `<a href="recipe.html?id=${list[i].id}">${list[i].title.rendered}</a>`
        
            if (i === 3) {
              break;
            }
          }

        } catch(error) {
            console.log(error);
            if (latestList.innerHTML = "") {
                latestList.innerHTML = displayError("An error occurred when calling the API");
            } else {
                latestList.innerHTML += displayError("An error occurred fetching latest posts from the API");
            }
            
        }
    }
    
    getList();