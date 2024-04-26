document.addEventListener("DOMContentLoaded", function() {
    var redirectionMap = {
        "facebook": "https://www.facebook.com/comodorodepartamentos",
        "instagram": "https://www.instagram.com/679inn/"
    };

    document.querySelectorAll(".iconos").forEach(function(img) {
        var redirectUrl = redirectionMap[img.id];
        if (redirectUrl) {
            img.onclick = function() {
                window.location.href = redirectUrl;
            };
        }
    });
});