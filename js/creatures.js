
        
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
                el.computedStyleMap.backgroundColor = "green";
            break;

            case "water":
                el.computedStyleMap.backgroundColor = "blue";
            break;

            case "air":
                el.computedStyleMap.backgroundColor = "yellow";
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
    alert("showType()");
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