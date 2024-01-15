const School = require('./School');

class PrimarySchool extends School  {

constructor(name,  numberOfStudents ,pickupPolicy,averageTestScores,schoolOverview){
    super(name, 'primary', numberOfStudents,averageTestScores,schoolOverview);
    this._pickupPolicy=pickupPolicy;
}


get pickupPolicy(){
    return this._pickupPolicy;

}


}



const lorraineHansbury = new  PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.',90,"Very good Primary school.");

lorraineHansbury.quickFacts();

const substitute = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
console.log(`Today's substitute teacher is: ${substitute}`);



