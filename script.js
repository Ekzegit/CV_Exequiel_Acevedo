document.addEventListener("DOMContentLoaded", () => {
    const profileImage = document.querySelector(".profile-img");

    profileImage.addEventListener("mouseover", () => {
        profileImage.style.borderColor = "#ffca28";
    });

    profileImage.addEventListener("mouseout", () => {
        profileImage.style.borderColor = "#fff";
    });
});

