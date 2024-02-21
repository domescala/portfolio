// var counter = {
//     "counter": 0,
//     "time": 10
// }
// var last_checktime = [0,0, 0, 0]
// var inner = [true, true, true, true]
// var time_timeout = 1000
// var time_delay = 500

// function exit_page(n) {
//     inner[n] = false
    
// }
// function enter_page(n) {
//     inner[n] = true

//     last_checktime[n] =  get_counter("time") 
//     setTimeout(() => {
//         refresh(n)
//     }, time_timeout);
// }
// function refresh(n) {
   
    
//     setTimeout(() => {  check(n);    }, time_delay);
//     hit_counter("time");
//     setTimeout(() => {  if (inner[n]){refresh(n);    }  }, time_timeout);
// }


// function check(n) {
//     let time = get_counter("time") 
//     var difference = time - last_checktime[n]
    

//     if (time > 300){
//         set_counter("time", -1)
//     }

//     if (difference > 0) {
//         console.log("PC "+n+ " > numero utenti: "+difference, counter)
//     }
        


//         // difference sono gli utenti non più online
//         // RIMUOVERE!!!

//     // if(time > 20 && counter["counter"] == 1){
//     //     counter["time"] = 0
//     //     time = 0
//     // }
//     last_checktime[n] = time
// }


// function get_counter(c) {
//     return counter[c]
// }
// function hit_counter(c) {
//     counter[c]++;
// }
// function set_counter(c, n) {
//     counter[c] = n
// }

// function cl(t) {
//     console.log(t)
// }

