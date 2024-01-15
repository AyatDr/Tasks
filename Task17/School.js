 class School {
    
    constructor(name, level, numberOfStudents,averageTestScores,schoolOverview) {
        this._name = name;               // Name of the school, a string
        this._level = level;             // Level of the school, a string ('primary', 'middle', or 'high')
        this._numberOfStudents = numberOfStudents; // Number of students, a number
        this._averageTestScores=averageTestScores;
        this._schoolOverview=schoolOverview;
    }

    // Getter for the name property
    get name() {
        return this._name;
    }
   
    // Getter for the level property
    get level() {
        return this._level;
    }

    // Getter for the numberOfStudents property
    get numberOfStudents() {
        return this._numberOfStudents;
    }

    // Getter for the averageTestScores property
    get averageTestScores() {
        return this._averageTestScores;
    }

    // Getter for the schoolOverview property
    get schoolOverview() {
        return this._schoolOverview;
    }

    
      // Setter for the numberOfStudents property
      set numberOfStudents(newNumberOfStudents) {
        if (typeof newNumberOfStudents === 'number' ) {
            this._numberOfStudents = newNumberOfStudents;
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }


     /* Displays a summary of the school's basic information.*/
     quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} level.`);
    }

    /*Selects a substitute teacher randomly from a provided list.*/ 
    static pickSubstituteTeacher(substituteTeachers){
        if (substituteTeachers.length === 0) {
            return null;
        }

      return substituteTeachers[(Math.floor(Math.random() * substituteTeachers.length))];
    }



}

module.exports = School;