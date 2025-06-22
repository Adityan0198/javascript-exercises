const findTheOldest = function(people) {
    const age = (person) => {
        const referYear = person.yearOfDeath ? person.yearOfDeath : new Date().getFullYear();
        return referYear - person.yearOfBirth;
    };
    return people.reduce((oldest, person)=>
        age(person)>age(oldest) ? person : oldest
    );
};

// Do not edit below this line
module.exports = findTheOldest;
