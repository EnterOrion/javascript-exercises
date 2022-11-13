const findTheOldest = function(objArray) {
    return objArray.reduce((oldestPerson, currentPerson) => {
        const oldestAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
    
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    
        if (oldestAge < currentAge)
        { 
            return currentPerson;
        }
        else {
            return oldestPerson;
        }
      });

};

const getAge = function(birthDate, deathDate) {
    if (!deathDate) {
   deathDate = new Date().getFullYear();
   }
   return deathDate - birthDate;
}
// Do not edit below this line
module.exports = findTheOldest;
