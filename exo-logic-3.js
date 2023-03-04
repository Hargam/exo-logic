// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.


function convert_color(color) {
    // Vérifie si le format est HEX
    if (color.startsWith("#")) {
        // Convertit HEX en RGB
        let r = parseInt(color.slice(1, 3), 16);
        let g = parseInt(color.slice(3, 5), 16);
        let b = parseInt(color.slice(5, 7), 16);
        return `rgb(${r}, ${g}, ${b})`;
    }
    // Vérifie si le format est RGB
    else if (color.startsWith("rgb(")) {
        // Convertit RGB en HEX
        let values = color.slice(4, -1).split(",");
        let r = parseInt(values[0].trim());
        let g = parseInt(values[1].trim());
        let b = parseInt(values[2].trim());
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    }
    // Si ni HEX ni RGB, renvoie la couleur d'origine
    else {
        return color;
    }
}


console.log(convert_color("#FF0000")); // rgb(255, 0, 0)
console.log(convert_color("rgb(255, 0, 0)")); // #ff0000
console.log(convert_color("blue")); // blue