

function colors() {
    const red = document.getElementById("red").value;
     
     
    const green = document.getElementById("green").value;
     
     
    const blue = document.getElementById("blue").value;

        document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue +')';
    
        document.getElementById("setting").innerHTML = 'rgb(' + red + ',' + green + ',' + blue +')'
    }