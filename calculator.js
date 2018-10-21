/* 
* Name: Brad Bosak
* Date: October 15, 2018
* Final Project Rules Page
*/

function calculate() {
    //initialize finalScore variable
    var finalScore = 0;

    //collect variables from user input
    var variableMap = getVariables()

    //collect the calculated scores for each part
    finalScoreMap = calculateScore(variableMap);
     for (var key in finalScoreMap) {
            finalScore += finalScoreMap[key];
        }

    //display total final score
    document.getElementById("finalScore").innerHTML = finalScore;
}

//get the input values from the form
function getVariables() {
    var variableMap = {};
    variableMap["fieldValue"]         = document.getElementById('fieldInput').value;
    variableMap["pastureValue"]       = document.getElementById('pastureInput').value;
    variableMap["grainValue"]         = document.getElementById('grainInput').value;
    variableMap["veggiesValue"]       = document.getElementById('veggiesInput').value;
    variableMap["sheepValue"]         = document.getElementById('sheepInput').value;
    variableMap["boarValue"]          = document.getElementById('boarInput').value;
    variableMap["cattleValue"]        = document.getElementById('cattleInput').value;
    variableMap["unusedValue"]        = document.getElementById('unusedInput').value;
    variableMap["fencedStablesValue"] = document.getElementById('fencedStablesInput').value;
    variableMap["roomsValue"]         = document.getElementById('roomsInput').value;
    variableMap["houseTypeValue"]     = document.getElementById('houseTypeInput').value;
    variableMap["familyMembersValue"] = document.getElementById('familyMembersInput').value;
    variableMap["cardPointsValue"]    = document.getElementById('cardPointsInput').value;
    variableMap["bonusPointsValue"]   = document.getElementById('bonusPointsInput').value;
    variableMap["beggarPointsValue"]  = document.getElementById('beggarPointsInput').value;
    return variableMap;
}

//function to call all individual calculation functions
function calculateScore(variableMap) {
    var scoreMap = {};
    var scoreMap = calculateFields(variableMap, scoreMap)        ;
    var scoreMap = calculatePastures(variableMap, scoreMap)      ;
    var scoreMap = calculateGrain(variableMap, scoreMap)         ;
    var scoreMap = calculateVeggies(variableMap, scoreMap)       ;
    var scoreMap = calculateSheep(variableMap, scoreMap)         ;
    var scoreMap = calculateBoar(variableMap, scoreMap)          ;
    var scoreMap = calculateCattle(variableMap, scoreMap)        ;
    var scoreMap = calculateUnused(variableMap, scoreMap)        ;
    var scoreMap = calculateFencedStables(variableMap, scoreMap) ;
    var scoreMap = calculateHouse(variableMap, scoreMap)         ;
    var scoreMap = calculateFamily(variableMap, scoreMap)        ;
    var scoreMap = calculateCardPoints(variableMap, scoreMap)    ;
    var scoreMap = calculateBonusPoints(variableMap, scoreMap)   ;
    var scoreMap = calculateBeggarPoints(variableMap, scoreMap)  ;
    return scoreMap;
}

//////////////////////////////////////////////////////////////////////////////

//field calculation function
function calculateFields(variableMap, scoreMap) {
    if (variableMap["fieldValue"] == 0 || variableMap["fieldValue"] == 1) {
        var fieldScore = -1;
    } else if (variableMap["fieldValue"] == 2) {
        var fieldScore = 1;
    } else if (variableMap["fieldValue"] == 3) {
        var fieldScore = 2;
    } else if (variableMap["fieldValue"] == 4) {
        var fieldScore = 3;
    } else {
        var fieldScore = 4;
    }
    scoreMap["fieldScore"] = fieldScore;
    return scoreMap;
}

//pasture calculation function
function calculatePastures(variableMap, scoreMap) {
    if (variableMap["pastureValue"] == 0) {
        var pastureScore = -1;
    } else if (variableMap["pastureValue"] == 1) {
        var pastureScore = 1;
    } else if (variableMap["pastureValue"] == 2) {
        var pastureScore = 2;
    } else if (variableMap["pastureValue"] == 3) {
        var pastureScore = 3;
    } else {
        var pastureScore = 4;
    }
    scoreMap["pastureScore"] = pastureScore;
    return scoreMap;
}

//grain calculation function
function calculateGrain(variableMap, scoreMap) {
    if (variableMap["grainValue"] == 0) {
        var grainScore = -1;
    } else if (variableMap["grainValue"] >= 1 && variableMap["grainValue"] <= 3) {
        var grainScore = 1;
    } else if (variableMap["grainValue"] >= 4 && variableMap["grainValue"] <= 5) {
        var grainScore = 2;
    } else if (variableMap["grainValue"] >= 6 && variableMap["grainValue"] <= 7) {
        var grainScore = 3;
    } else {
        var grainScore = 4;
    }
    scoreMap["grainScore"] = grainScore;
    return scoreMap;
}

//veggies calculation function
function calculateVeggies(variableMap, scoreMap) {
    if (variableMap["veggiesValue"] == 0) {
        var veggiesScore = -1;
    } else if (variableMap["veggiesValue"] == 1) {
        var veggiesScore = 1;
    } else if (variableMap["veggiesValue"] == 2) {
        var veggiesScore = 2;
    } else if (variableMap["veggiesValue"] == 3) {
        var veggiesScore = 3;
    } else {
        var veggiesScore = 4;
    }
    scoreMap["veggiesScore"] = veggiesScore;
    return scoreMap;
}

//sheep calculation function
function calculateSheep(variableMap, scoreMap) {
    if (variableMap["sheepValue"] == 0) {
        var sheepScore = -1;
    } else if (variableMap["sheepValue"] >= 1 && variableMap["sheepValue"] <= 3) {
        var sheepScore = 1;
    } else if (variableMap["sheepValue"] >= 4 && variableMap["sheepValue"] <= 5) {
        var sheepScore = 2;
    } else if (variableMap["sheepValue"] >= 6 && variableMap["sheepValue"] <= 7) {
        var sheepScore = 3;
    } else {
        var sheepScore = 4;
    }
    scoreMap["sheepScore"] = sheepScore;
    return scoreMap;
}

//boar calculation function
function calculateBoar(variableMap, scoreMap) {
    if (variableMap["boarValue"] == 0) {
        var boarScore = -1;
    } else if (variableMap["boarValue"] >= 1 && variableMap["boarValue"] <= 2) {
        var boarScore = 1;
    } else if (variableMap["boarValue"] >= 3 && variableMap["boarValue"] <= 4) {
        var boarScore = 2;
    } else if (variableMap["boarValue"] >= 5 && variableMap["boarValue"] <= 6) {
        var boarScore = 3;
    } else {
        var boarScore = 4;
    }
    scoreMap["boarScore"] = boarScore;
    return scoreMap;
}

//cattle calculation function
function calculateCattle(variableMap, scoreMap) {
    if (variableMap["cattleValue"] == 0) {
        var cattleScore = -1;
    } else if (variableMap["cattleValue"] == 1) {
        var cattleScore = 1;
    } else if (variableMap["cattleValue"] >= 2 && variableMap["cattleValue"] <= 3) {
        var cattleScore = 2;
    } else if (variableMap["cattleValue"] >= 4 && variableMap["cattleValue"] <= 5) {
        var cattleScore = 3;
    } else {
        var cattleScore = 4;
    }
    scoreMap["cattleScore"] = cattleScore;
    return scoreMap;
}

//unused spaces calculation function
function calculateUnused(variableMap, scoreMap) {
    var unusedScore = -(variableMap["unusedValue"]);
    scoreMap["unusedScore"] = unusedScore;
    return scoreMap;
}


//fenced stables calculation function
function calculateFencedStables(variableMap, scoreMap) {
    var fencedStableScore = variableMap["fencedStablesValue"];
    scoreMap["fencedStableScore"] = 1 * fencedStableScore;
    return scoreMap;
}

//house calculation function
function calculateHouse(variableMap, scoreMap) { 
    if (variableMap["houseTypeValue"] === "Clay") {
        scoreMap["houseScore"] = 1 * variableMap["roomsValue"];
    } else if (variableMap["houseTypeValue"] === "Stone") {
        scoreMap["houseScore"] = 2 * variableMap["roomsValue"];
    } else {
        scoreMap["houseScore"] = 0;
    }
    return scoreMap;
}

//family calculation function
function calculateFamily(variableMap, scoreMap) {
    var familyScore = 3 * variableMap["familyMembersValue"];
    scoreMap["familyScore"] = familyScore;
    return scoreMap;
}

function calculateCardPoints(variableMap, scoreMap) {
    var cardPointScore = 1 * variableMap["cardPointsValue"];
    scoreMap["cardPointScore"] = cardPointScore;
    return scoreMap;
}

//bonus points calculation function
function calculateBonusPoints(variableMap, scoreMap) {
    var bonusPointScore = 1 * variableMap["bonusPointsValue"];
    scoreMap["bonusPointScore"] = bonusPointScore;
    return scoreMap;
}

//beggar points calculation function
function calculateBeggarPoints(variableMap, scoreMap) {
    var beggarPointScore = -3 * variableMap["beggarPointsValue"];
    scoreMap["beggarPointsValue"] = beggarPointScore;
    return scoreMap;
}