function ageIndays(person) {
    const name = `${person.firstName} ${person.lastName}`;
    const ageIndays = person.age * 365;

    function loggedMessage() {
        console.log(`The person's full name is ${name} and their age is ${ageIndays}`);
    }
    return loggedMessage;
}

const person = {
   firstName : 'Raj',
   lastName : 'Mihir',
    age : 20,
};

const loggedMessageFn = ageIndays(person);
loggedMessageFn();
