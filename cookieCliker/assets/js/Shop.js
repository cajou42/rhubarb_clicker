export default (nbRhubarb = 0, double = false, timer = false, booster = false)=>({
    nbRhubarb: nbRhubarb,
    double: double,
    timer: timer,
    booster: booster,

    active_double(){
        if(nbRhubarb >= 10000 && !double){
            double = true;
            nbRhubarb = nbRhubarb - 10000;
        }
        fetch("/double", {
            method: "POST",
            body: JSON.stringify({sdouble: double})
        })
        fetch("/score", {
            method: "POST",
            body: JSON.stringify({count: nbRhubarb})
        })
    },

    active_timer(){
        if(nbRhubarb >= 7000 && !timer){
            timer = true;
            nbRhubarb -= 7000;
        }
        fetch("/timer", {
            method: "POST",
            body: JSON.stringify({stimer: timer})
        })
        fetch("/score", {
            method: "POST",
            body: JSON.stringify({count: nbRhubarb})
        })
    },

    active_booster(){
        if(nbRhubarb >= 100000 && !booster){
            booster = true;
            nbRhubarb -= 100000;
        }
        fetch("/booster", {
            method: "POST",
            body: JSON.stringify({sbooster: booster})
        })
        fetch("/score", {
            method: "POST",
            body: JSON.stringify({count: nbRhubarb})
        })
    },
})