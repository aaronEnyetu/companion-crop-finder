// Define companion and foe crops with details, benefits, and images for each crop
const cropsInfo = {
    carrot: {
        image: "images/carrot.jpg",
        companions: [
            { name: "Lettuce", image: "images/lettuce.jpg" },
            { name: "Onion", image: "images/onion.jpg" },
            { name: "Radish", image: "images/radish.jpg" }
        ],
        foes: [
            { name: "Fennel", image: "images/fennel.jpg" }
        ],
        details: {
            hardiness: "Hardy",
            soilType: "Well-drained",
            height: "Medium",
            plantingZone: "3-10"
        },
        benefits: {
            "Improves Soil": "Carrots break up soil and improve its structure.",
            "Companion Planting": "Planting carrots with onions can help repel pests."
        }
    },
    tomato: {
        image: "images/tomato.jpg",
        companions: [
            { name: "Basil", image: "images/basil.jpg" },
            { name: "Carrot", image: "images/carrot.jpg" },
            { name: "Celery", image: "images/celery.jpg" }
        ],
        foes: [
            { name: "Potato", image: "images/potato.jpg" },
            { name: "Fennel", image: "images/fennel.jpg" }
        ],
        details: {
            hardiness: "Tender",
            soilType: "Loamy, well-drained",
            height: "Tall",
            plantingZone: "4-10"
        },
        benefits: {
            "Rich in Nutrients": "Tomatoes are a good source of vitamins and antioxidants.",
            "Companion Planting": "Basil planted nearby can enhance tomato growth and flavor."
        }
    },
    cucumber: {
        image: "images/cucumber.jpg",
        companions: [
            { name: "Corn", image: "images/corn.jpg" },
            { name: "Lettuce", image: "images/lettuce.jpg" },
            { name: "Beans", image: "images/beans.jpg" }
        ],
        foes: [
            { name: "Potato", image: "images/potato.jpg" },
            { name: "Fennel", image: "images/fennel.jpg" }
        ],
        details: {
            hardiness: "Tender",
            soilType: "Rich, well-drained",
            height: "Medium",
            plantingZone: "4-10"
        },
        benefits: {
            "Hydration": "Cucumbers are mostly water, making them a hydrating snack.",
            "Companion Planting": "Planting cucumbers near corn can provide shade and support."
        }
    }
    // Add more crops and their companions/foes/details/benefits/images as needed
};

// Mapping object to handle singular and plural crop names
const cropNameVariants = {
    tomatoes: "tomato",
    carrots: "carrot",
    cucumbers: "cucumber"
    // Add more variants as needed
};

// Function to find and display companion and foe crops
function findCompanionsAndFoes() {
    const inputCrop = document.getElementById("crop-input").value.toLowerCase().trim();
    const mainCropImageContainer = document.getElementById("main-crop-image");
    const companionListElem = document.getElementById("companion-list");
    const foeListElem = document.getElementById("foe-list");
    const detailsTable = document.getElementById("details-table");
    const companionImagesList = document.getElementById("companion-images-list");
    const foeImagesList = document.getElementById("foe-images-list");
    const benefitsTable = document.getElementById("benefits-table");

    // Clear previous content
    mainCropImageContainer.innerHTML = "";
    companionListElem.innerHTML = "";
    foeListElem.innerHTML = "";
    detailsTable.innerHTML = "";
    companionImagesList.innerHTML = "";
    foeImagesList.innerHTML = "";
    benefitsTable.innerHTML = "";

    if (inputCrop === "") {
        const message = document.createElement("p");
        message.textContent = "Please enter a crop name.";
        mainCropImageContainer.appendChild(message);
        return;
    }

    // Check if inputCrop is in the mapping, and use the mapped value if so
    const cropName = cropNameVariants[inputCrop] || inputCrop;

    const cropInfo = cropsInfo[cropName];

    if (cropInfo) {
        // Display main crop image
        const mainCropImage = document.createElement("img");
        mainCropImage.src = cropInfo.image;
        mainCropImage.alt = cropName;
        mainCropImage.title = cropName;
        mainCropImage.classList.add("crop-image");
        mainCropImageContainer.appendChild(mainCropImage);

        // Display companion crops
        const companionList = cropInfo.companions;
        if (companionList && companionList.length > 0) {
            companionList.forEach(companion => {
                const li = document.createElement("li");
                li.textContent = companion.name;
                companionListElem.appendChild(li);

                // Display companion crop images
                const img = document.createElement("img");
                img.src = companion.image;
                img.alt = companion.name;
                img.title = companion.name;
                img.classList.add("companion-image");
                companionImagesList.appendChild(img);
            });
        } else {
            const companionLi = document.createElement("li");
            companionLi.textContent = "No companion crops found.";
            companionListElem.appendChild(companionLi);
        }

        // Display foe crops
        const foeList = cropInfo.foes;
        if (foeList && foeList.length > 0) {
            foeList.forEach(foe => {
                const li = document.createElement("li");
                li.textContent = foe.name;
                foeListElem.appendChild(li);

                // Display foe crop images
                const img = document.createElement("img");
                img.src = foe.image;
                img.alt = foe.name;
                img.title = foe.name;
                img.classList.add("foe-image");
                foeImagesList.appendChild(img);
            });
        } else {
            const foeLi = document.createElement("li");
            foeLi.textContent = "No foe crops found.";
            foeListElem.appendChild(foeLi);
        }

        // Display details as a table
        const details = cropInfo.details;
        for (const [key, value] of Object.entries(details)) {
            const row = document.createElement("tr");
            const th = document.createElement("th");
            th.textContent = key;
            const td = document.createElement("td");
            td.textContent = value;
            row.appendChild(th);
            row.appendChild(td);
            detailsTable.appendChild(row);
        }

        // Display benefits as a table
        const benefits = cropInfo.benefits;
        for (const [key, value] of Object.entries(benefits)) {
            const row = document.createElement("tr");
            const th = document.createElement("th");
            th.textContent = key;
            const td = document.createElement("td");
            td.textContent = value;
            row.appendChild(th);
            row.appendChild(td);
            benefitsTable.appendChild(row);
        }

    } else {
        const message = document.createElement("p");
        message.textContent = "Crop information not found. Please enter a valid crop name.";
        mainCropImageContainer.appendChild(message);
    }


    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Event listener to clear results when input is cleared
document.getElementById("crop-input").addEventListener("input", function() {
    const inputCrop = this.value.trim();
    if (inputCrop === "") {
        const mainCropImageContainer = document.getElementById("main-crop-image");
        const companionListElem = document.getElementById("companion-list");
        const foeListElem = document.getElementById("foe-list");
        const detailsTable = document.getElementById("details-table");
        const companionImagesList = document.getElementById("companion-images-list");
        const foeImagesList = document.getElementById("foe-images-list");
        const benefitsTable = document.getElementById("benefits-table");

        mainCropImageContainer.innerHTML = "";
        companionListElem.innerHTML = "";
        foeListElem.innerHTML = "";
        detailsTable.innerHTML = "";
        companionImagesList.innerHTML = "";
        foeImagesList.innerHTML = "";
        benefitsTable.innerHTML = "";
    }
});
