document.addEventListener('DOMContentLoaded', () => {

    function displayImages () {
        var i;
        for (i = 0; i < 10; i++){
            //const newDiv = document.createElement("div");
            //newDiv.className = "image";
            //const newContent = document.createTextNode("UWUowoUWU");
            //newDiv.appendChild(newContent);
            
            //var currentDiv = document.getElementById("imageContent");
            //currentDiv.appendChild(newDiv);

            var img = document.createElement("img");
            img.className = "image"
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5PSVuJ7bzi34RvCYyTZTvuEd0eHD3Mt574g&usqp=CAU";
            var src = document.getElementById("imageContent");
            src.appendChild(img);
        };
    };

    displayImages();
});