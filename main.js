// navbar script start

let btt = document.getElementById("btt");
let spans = document.querySelectorAll("nav button span");
let icon = document.querySelector("nav button i");
let container = document.querySelector("nav .container-fluid");
let searchCard = document.getElementById("searchCard");

let searchClose = document.getElementById("searchClose");
let main = document.querySelector("main");
let btns = document.querySelectorAll(".carsize .btn-group button");


btt.onclick = function () {
    if (btt.getAttribute("aria-expanded") == "true") {
        for (let i = 0; i < spans.length; i++) {
            spans[i].style.height = "230%";
        }
        icon.style.cssText = "transform: rotate(180deg);"
        container.style.cssText = "border-radius: 10px !important;background: #1b1b1e !important; border: 1px solid white;"
    } else {
        for (let i = 0; i < spans.length; i++) {
            spans[i].style.height = "0%";
        }
        icon.style.cssText = "transform: rotate(-180deg);"
        if (window.scrollY >= 100) {
            container.style.cssText = "border-radius: 50rem !important;background: #1b1b1e !important; border: 1px solid white;"
        } else {
            container.style.cssText = "border-radius: 50rem  !important"
        }
    }
}

window.onscroll = () => {
    // convert nav background color
    if (this.scrollY >= 100) {
        if (btt.getAttribute("aria-expanded") == "true") {
            container.style.cssText = "border-radius: 10px !important;background: #1b1b1e !important; border: 1px solid white;"
        } else {
            container.style.cssText = "background: #1b1b1e !important; border: 1px solid white;border-radius: 50rem  !important"
        }
    } else {
        if (btt.getAttribute("aria-expanded") == "true") {
            container.style.cssText = "border-radius: 10px !important;background: #1b1b1e !important; border: 1px solid white;"
        } else {
            container.style.cssText = "background: transparent; border: none;"
        }
    }

}


// navbar script end



searchClose.addEventListener("click", function () {
    searchCard.classList.remove("search-show");
    main.classList.toggle("main-opacity");
    main.style.cssText = "height: auto; overflow: scroll;"
})

// search end

// section 1 start
let h1 = document.querySelector(".carcontent h1");
let h3 = document.querySelector(".carcontent h3");
let inventor = document.querySelector(".carcontent h2:nth-child(1) span");
let history = document.querySelector(".carcontent h2:nth-child(2) span");
let p = document.querySelector(".carcontent p");
let img = document.querySelector(".carcontent img");
let a = document.querySelector(".carcontent a");

function updateContent(title, subtitle, inventorName, year, description, link, imageSrc) {
    h1.innerHTML = title;
    h3.innerHTML = subtitle;
    inventor.innerHTML = inventorName;
    history.innerHTML = year;
    p.innerHTML = description;
    a.href = link;
    img.src = imageSrc;
}

btns.forEach((x) => {
    x.addEventListener("click", () => {
        btns.forEach((r) => r.classList.remove("active"));
        x.classList.add("active");
        console.log(x.dataset.name);

        switch (x.dataset.name) {
            case "suv":
                updateContent(
                    "SUV",
                    "Four-wheel drive car",
                    "Brooks Stevens",
                    "1946",
                    "A sport utility vehicle (SUV) combines elements of road-going passenger cars with features from off-road vehicles, such as raised ground clearance and four-wheel drive.",
                    "https://en.wikipedia.org/wiki/SUV",
                    "images/cars/suv.webp"
                );
                break;

            case "sedan":
                updateContent(
                    "Sedan",
                    "Car with a closed body",
                    "Panhard et Levassor",
                    "1899",
                    "A sedan is a passenger car with a three-box configuration with separate compartments for the engine, passengers, and cargo.",
                    "https://en.wikipedia.org/wiki/Sedan_(automobile)",
                    "images/cars/sedan.webp"
                );
                break;

            case "electric":
                updateContent(
                    "Electric",
                    "Rechargeable electric vehicle",
                    "Robert Anderson",
                    "1832 and 1839",
                    "An electric car (EV) is propelled by an electric motor, using energy stored in rechargeable batteries.",
                    "https://en.wikipedia.org/wiki/Electric_car",
                    "images/cars/electric.webp"
                );
                break;

            case "4x4":
                updateContent(
                    "4x4",
                    "Four-wheel drive vehicle",
                    "Daimler-Motoren-Gesellschaft",
                    "1903",
                    "A 4×4 vehicle has a drivetrain capable of providing power to all its wheels simultaneously for improved off-road capability.",
                    "https://en.wikipedia.org/wiki/Four-wheel_drive",
                    "images/cars/4x4.webp"
                );
                break;

            case "hybrid":
                updateContent(
                    "Hybrid",
                    "Car combining gasoline and electric power",
                    "Ferdinand Porsche",
                    "1900",
                    "A hybrid vehicle uses two or more types of power, such as an internal combustion engine and an electric motor.",
                    "https://en.wikipedia.org/wiki/Hybrid_vehicle",
                    "images/cars/hybrid.webp"
                );
                break;

            case "luxury":
                updateContent(
                    "Luxury",
                    "High-end comfort and performance",
                    "Various (Mercedes-Benz, Rolls-Royce)",
                    "Early 1900s",
                    "Luxury vehicles offer increased levels of comfort, quality, performance, and status compared to regular cars.",
                    "https://en.wikipedia.org/wiki/Luxury_vehicle",
                    "images/cars/luxury.webp"
                );
                break;

            case "crossover":
                updateContent(
                    "Crossover",
                    "Combination of SUV and car",
                    "Nissan (Murano)",
                    "2003",
                    "A crossover SUV is built on a car platform but combines features of a traditional SUV with those of a passenger car, especially a hatchback.",
                    "https://en.wikipedia.org/wiki/Crossover_SUV",
                    "images/cars/crossover.webp"
                );
                break;

            case "coupe":
                updateContent(
                    "Coupe",
                    "Two-door stylish car",
                    "Unknown (early 1900s)",
                    "Early 1900s",
                    "A coupe is traditionally a two-door car often designed with a sporty style and a sleek profile.",
                    "https://en.wikipedia.org/wiki/Coup%C3%A9",
                    "images/cars/coupe.webp"
                );
                break;

            case "minivans":
                updateContent(
                    "Minivans",
                    "Family vehicle with large space",
                    "Chrysler (Dodge Caravan)",
                    "1983",
                    "Minivans are designed for personal use with a focus on passenger comfort and cargo capacity, typically with sliding doors.",
                    "https://en.wikipedia.org/wiki/Minivan",
                    "images/cars/minivans.webp"
                );
                break;

            case "hatchback":
                updateContent(
                    "Hatchback",
                    "Compact car with rear door",
                    "Renault 4",
                    "1961",
                    "A hatchback is a car body configuration with a rear door that swings upward to provide access to the cargo area.",
                    "https://en.wikipedia.org/wiki/Hatchback",
                    "images/cars/hatchback.webp"
                );
                break;
        }
    });
});


// section 1 end
checkbox.onclick = function myFunction() {
    // Get the checkbox
    let checkbox = document.getElementById("checkbox")
    // Get the output text
let petrolContent = document.getElementById("petrolContent")
let dieselContent = document.getElementById("dieselContent")
    // If the checkbox is checked, display the output text
    if (checkbox.checked == true) {
        console.log("yes")
        petrolContent.style.display = "none"
        dieselContent.style.display = "block"
    } else {
        console.log("no")
        petrolContent.style.display = "block"
        dieselContent.style.display = "none"
    }
}