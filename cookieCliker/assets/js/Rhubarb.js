let activeBooster;
export default (nbRhubarb = 0, double = false, timer = false, booster = false ) =>({
    nbRhubarb: nbRhubarb,
    double: double,
    timer: timer,
    booster: booster,
    activeBooster: false,
    increment(){
        if(activeBooster && double){
            nbRhubarb += 4
        }
        if(double || activeBooster){
            nbRhubarb += 2
        }
        else{
            nbRhubarb ++
        }
        this.$refs.nb.innerText = nbRhubarb
    },

    time_increment(){
        if(timer){
            setInterval(()=>{
                if(activeBooster){
                    nbRhubarb += 2
                }
                else {
                    nbRhubarb++
                }
                this.$refs.nb.innerText = nbRhubarb
            },1000)
        }
    },

    boost(){
        if(booster){
            let count = 30
            let cooldown = 300
            activeBooster = true
            let x = setInterval(() =>{
                if(count > 0) {
                    this.$refs.boost_time.innerText = "boost time :" + count + "sec"
                    count--
                    console.log(count)
                    this.$refs.booster_button.disabled = true
                }
                else if(count == 0){
                    this.$refs.boost_time.innerText = "boost finished, next boost in :" + cooldown + "sec"
                    cooldown--
                    activeBooster = false
                    if(cooldown == 0){
                        this.$refs.boost_time.innerText = "boost available"
                        count = 5
                        cooldown = 5
                        this.$refs.booster_button.disabled = false
                        this.$refs.booster_button.enabled = true
                        clearInterval(x)
                    }
                }

            },1000)

        }
    },

    save(){
        fetch("/score", {
            method : "POST",
            body: JSON.stringify({count: nbRhubarb})
        })
    }
})