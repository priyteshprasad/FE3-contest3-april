function OpeningCeremoney(callbackFunction1){ //race100M

    //do some work inside set time out
    setTimeout(()=>{
        console.log("Let the game begains")
        let scores = {red: 0, blue: 0, green: 0, yellow: 0}
        console.log("Initial Score: ", scores)
        callbackFunction1(scores, LongJump) //Race100M
    }, 1000)

}

function Race100M(scores, callbackFunction2){ //LongJump is recieved as function
    //do some work in set time out 
    setTimeout(()=>{
        console.log("Race 100M started");
        console.log("Previous score: ",scores);
        let redTime = getRandomInt(10, 15)
        let blueTime = getRandomInt(10, 15)
        let greenTime = getRandomInt(10, 15)
        let yellowTime = getRandomInt(10, 15)

        let times = { red: redTime, blue: blueTime, green: greenTime, yellow: yellowTime };

        let sortedColors = Object.keys(times).sort((a, b) => times[a] - times[b]); //array of houses sorted in acc order of time
        scores[sortedColors[0]] += 50
        scores[sortedColors[1]] += 25
        console.log("Updated Score: ", scores);
        console.log(`${sortedColors[0]} won the Race 100M`);
        callbackFunction2(scores, HighJump) //LongJump
    }, 3000)
}

function LongJump(scores, callbackFunction3){ 
    setTimeout(()=>{
        console.log("Long Jump started");
        console.log("Previous score: ",scores);
        let randomColor = Object.keys(scores)[getRandomInt(0, 3)]
        scores[randomColor] += 150

        console.log("Updated Score: ", scores);
        console.log(`${randomColor} won the Race 100M`);


        callbackFunction3(scores, AwardCeremoney) //Hijump
    }, 2000)

}

function HighJump(scores, callbackFunction4){ //AwardCeremoney
    console.log("High Jump started");
    console.log("Previous score: ",scores);
    let userHouse = prompt("What colour secured the highest jump?")
    if(userHouse && scores.hasOwnProperty(userHouse.toLowerCase())){
        scores[userHouse.toLowerCase()]+=100;
        console.log("Updated Score: ", scores);
        console.log(`${userHouse} won the High Jump`);
        callbackFunction4(scores);
    }else{
        console.log("Event was cancelled");
        callbackFunction4(scores); //AwardCeremoney
    }

    
}

function AwardCeremoney(scores){
    let rankList = Object.keys(scores).sort((a, b)=> scores[b] - scores[a]) 

    console.log(`${rankList[0]} came first with score ${scores[rankList[0]]}` )
    console.log(`${rankList[1]} came second with score ${scores[rankList[1]]}` )
    console.log(`${rankList[2]} came third with score ${scores[rankList[2]]}` )
    console.log(`${rankList[3]} came fourth with score ${scores[rankList[3]]}` )
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
OpeningCeremoney(Race100M)