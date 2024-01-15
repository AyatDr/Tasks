const School = require('./School');

class Middle extends School {
    constructor(name,  numberOfStudents ,averageTestScores,schoolOverview){
        super(name, 'middle', numberOfStudents,averageTestScores,schoolOverview);
       
    }
}

const middleSchool = new Middle("TechScholl", 300, 85 ,"An outstanding school with a focus on science and technology.");

middleSchool.quickFacts();