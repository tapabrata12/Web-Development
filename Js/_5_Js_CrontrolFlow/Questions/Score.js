// Write a function who accepts score and returns Grade:

let score = 100;

function getGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A+";
    } 
    
    else if (score >= 80 && score < 90) {
        return "A";
    }

    else if (score >= 70 && score < 80) {
        return "B+";
    }

        else if (score >= 60 && score < 70) {
        return "B";
    }

        else if (score >= 50 && score < 60) {
        return "C+";
    }

        else if (score >= 40 && score < 50) {
        return "C";
    }

        else if (score >= 30 && score < 40) {
        return "D+";
    }

        else if (score >= 25 && score < 30) {
        return "D";
    }

    else if(score <25){
        return "F";
    }
    else{
        return "Invalid Score";
    }
}

console.log(getGrade(score));