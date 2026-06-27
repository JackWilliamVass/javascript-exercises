const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        const oldAge = ("yearOfDeath" in oldest) ? oldest.yearOfDeath - oldest.yearOfBirth :
                        new Date().getFullYear() - oldest.yearOfBirth
        const newAge = ("yearOfDeath" in person) ? person.yearOfDeath - person.yearOfBirth :
                        new Date().getFullYear() - person.yearOfBirth

        return (newAge > oldAge) ? person : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
