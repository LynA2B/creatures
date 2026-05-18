
        
function showHome()
{
    /*
        loop through all creatures
        
        if creature lives on land, background color green
        if creature lives in water, blue
        if creature lives in air, yellow
        
        */

    //get all creatures
    let creatures = document.querySelectorAll(".creature");

    //loop through each creature
    creatures.forEach(function(el){

        //read data-home attribute
        let home = el.dataset.home;

        //switch based on home
        switch(home) {
            case "land":
                el.style.backgroundColor = "green";
            break;

            case "water":
                el.style.backgroundColor = "blue";
            break;

            case "air":
                el.style.backgroundColor = "yellow";
            break;

            default:
                console.log("Unknown home:", home);
        }
    });
        // alert("showHome()");
    
}//end showHome()

function showType()
{
    /*
        loop through all creatures
        
        if creature is an animal, border color solid red
        if creature is an insect, border color is dashed orange
    */

    let creatures = document.querySelectorAll(".creature");

    creatures.forEach(function(el) {

        //read data-creature-type attribute
        let type = el.dataset.creatureType;

        switch(type) {

            case "animal":
                el.style.border = "3px solid red";
            break;

             case "insect":
                el.style.border = "3px dashed orange";
            break;

            default:
                console.log("Unknown type:", type);
        }
    });
    // alert("showType()");
}//end showType()

function clearAll()
{
    /*
        loop through all creatures
        
        clear border back to 1px solid black
        clear background color to white
        
    */
    alert("clearAll()");
}//end clearAll()