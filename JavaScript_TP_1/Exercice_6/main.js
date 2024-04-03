// Making a histogramme function :)
function histogramme(tab){
    let tabe_size = tab.length;
    let motif = "";
    for(let j = 0; j < tabe_size; j++){
        for(let i = 0; i < tab[j]; i++){
            motif +="@";
        }
        console.log(motif);
        motif = ""; 
    }
}

let my_array = [20,1,13,8,10,6,15,25,2,10,14,18,9];
histogramme(my_array);

