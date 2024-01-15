const School = require('./School');

class HighSchool extends School {
    constructor(name,  numberOfStudents ,sportsTeams,averageTestScores,schoolOverview){
        super(name, 'high', numberOfStudents,averageTestScores,schoolOverview);
        this._sportsTeams=sportsTeams;
    }
    
    
    get sportsTeams() {
        console.log('Sports Teams:', this._sportsTeams);
        return this._sportsTeams;
    
    }

    
}


   // Create the alSmith HighSchool instance
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'], 88, "A high school with a strong sports program .");

alSmith.quickFacts();
alSmith.sportsTeams;













