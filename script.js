let noCount = 0;

function yesClick() {
    document.getElementById("text").innerHTML =
        "Aaaaaa, I like you too ❤️";

    document.getElementById("gif").src =
        "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif";
}

function noClick() {
    noCount++;

    const noButton = document.querySelector(".no-btn");

    if (noCount == 1) {
        noButton.innerHTML = "Are you sure?";
    }
    else if (noCount == 2) {
        noButton.innerHTML = "Really? 😭";
    }
    else if (noCount == 3) {
        noButton.innerHTML = "Please 🥺";
    }
    else {
        noButton.innerHTML = "No";
    }
}
