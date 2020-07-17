/* feetTomile */ 

function feetToMile(feet){
    if(feet < 0){
        feet = Math.abs(feet);
    }
    var gaz = feet / 3;
    var mile = gaz / 1760;
    return mile;
}

// var result = feetToMile(10560);
// console.log(result);

/* woodcalculator */

function woodCalculator(bed, chair, table){
   var bedWoodCount = bed * 5;
   var chairWoodCount = chair * 1;
   var tableWoodCount = table * 3;
   var totalWoodCount = bedWoodCount + chairWoodCount + tableWoodCount;
   return totalWoodCount;
}

// // var result = woodCalculator(1, 1, 1);
// // console.log(result);

// /* brickCalculator */ 

function brickCalculator(floor){
    var feet = 1000;
    var step1 = feet * 15 * floor;
    var step2 = feet * 12 * floor;
    var step3 = feet * 10 * floor; 
    var total2 = step1 + step2;
    var total3 = step1 + step2 + step3;

             if(floor <= 10){
               return step1;
        }
            else if(floor >= 11 && floor <= 20){
                return total2
            }
            else if(floor >= 21){
                return total3
                } 
}

// var result = brickCalculator(50);
// console.log(result);


// /* tinyFriend */

function tinyFriend(friends){
    return friends.reduce(function(prevFriend, currFriend){
        if(currFriend.length < prevFriend.length){
            return currFriend;
        }else{
            return prevFriend;
        }
    })
}

// var result =  tinyFriend(['Shihab','Asaduzzaman','Salauddin','Mou','Rafi','afsari']);
// console.log(result);













