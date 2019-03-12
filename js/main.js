const addSite = document.querySelector("#addSite");
const button = document.querySelector("#button");
const touristSiteList = document.querySelector(".touristSiteList");
const content = document.querySelector("#content");


function add() {
    if (addSite.value.trim() != "") {
        let dynamicList = document.createElement("li");
        dynamicList.textContent = addSite.value;
        dynamicList.className = "item";
        touristSiteList.appendChild(dynamicList);
        addSite.value = "";
        content.innerHTML = "Site Added";
        content.classList.add("done");
        setTimeout(function () {
            content.innerHTML = "";
            content.classList.remove("done")
        }, 2500);

    } else {
        content.innerHTML = "Enter a site";
        content.classList.add("error");
        setTimeout(function () {
            content.innerHTML = "";
            content.classList.remove("error")
        }, 2500);
    }


}

addSite.addEventListener("keyup", function () {
    if (event.keyCode === 13) {
        add()
    }
});
button.addEventListener("click", add);
