function Hangman(word,attempt){

    arrayWord = word.split("");
    function array_filled(num,elm){
        if(typeof num==="number" && typeof elm != "object"){
            var arr = [];
            for(var i = 0;i<num;i++){
                arr.push(elm);
            }
            return arr;
        }else{
            return "You need to put number as first param and string or number as second";
        }
    }

    var guiones = array_filled(word.length,"_");// reutilizamos la funcion array filled
    var lettersTried = [];

    this.try = function(letter){
       
            if(word.indexOf(letter)===-1){
                console.log("no");
                attempt--;
                lettersTried.push(letter);
                console.log(guiones,attempt)
            }else{
                for(var i=0;i<arrayWord.length;i++){
                    if(word[i]===letter){
                        guiones[i] = letter;
                    } 
                }
                console.log(guiones,attempt);
            }       
    }
}