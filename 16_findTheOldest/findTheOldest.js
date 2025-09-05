const findTheOldest = function(people) {
  // helper function to calculate age
  const getAge = function(person) {
    const deathYear = person.yearOfDeath || new Date().getFullYear();
    return deathYear - person.yearOfBirth;
  };

  // use reduce to find the oldest person 
  return people.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest);
    const currentAge = getAge(currentPerson);
    return currentAge > oldestAge ? currentPerson : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;