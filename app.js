const shareIcons = document.getElementById("share-icons");
const shareIcon = document.getElementById("share-icon");
const shareIconInitial = document.getElementById("share-icon-initial");

const showShare = event => {
    event.preventDefault();
    shareIcons.style.visibility = "visible";
    shareIcon.classList.add("d-block");
    shareIconInitial.classList.add("d-none");
}

const hideShare = event => {
    event.preventDefault();
    shareIcons.style.visibility = "hidden";
    shareIcon.classList.remove("d-block");
    shareIconInitial.classList.remove("d-none");
}