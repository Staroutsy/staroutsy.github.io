document.addEventListener('DOMContentLoaded', () => {

    function addElement () {
        var i;
        for (i = 0; i < 10; i++){
            const newDiv = document.createElement("div");
            newDiv.className = "image";
            const newContent = document.createTextNode("UWUowoUWU");
            newDiv.appendChild(newContent);
            
            var currentDiv = document.getElementById("imageContent");
            currentDiv.appendChild(newDiv, currentDiv.nextSibling);
        };
    };

    addElement();
});