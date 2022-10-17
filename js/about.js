const urlAbout = "https://cecilieol.no/the-green-kitchen/wp-json/wp/v2/pages?_embed";

const aboutImage = document.querySelector(".about-image");
const aboutText = document.querySelector(".about-text");
const aboutLoader = document.querySelector(".loading");

async function getAbout() {
    try {
        const aboutResponse = await fetch(urlAbout);
        const about = await aboutResponse.json();

        console.log(about);

        aboutImage.innerHTML = "";
        aboutText.innerHTML = "";

        for (let i = 0; i < about.length; i++) {

            console.log(about[i]);

            aboutImage.innerHTML = `<img src="${about[i]._embedded['wp:featuredmedia']['0'].source_url}" alt="${about[i]._embedded['wp:featuredmedia']['0'].alt_text}">`;
            aboutText.innerHTML = `<p>${about[i].content.rendered}</p>
                                    <div class="explore-buttons">
                                        <a href="allrecipes.html"><button class="browse-recipes">Browse Recipes</button></a>
                                        <a href="contact.html"><button class="contact-us">Contact Us</button></a>
                                    </div>`;
            aboutLoader.innerHTML = "";

        }

    } catch(error) {
        console.log(error);
        aboutText.innerHTML = displayError("An error occurred fetching information from the API");     
    }
}

getAbout();