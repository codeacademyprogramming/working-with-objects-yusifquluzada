/*

Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.

*/


const user = {
    name: "John",
    surname: "Smith",
}

user.name = "Pete";
delete (user.name);

console.log(user);



// ----------------------------------------------------------------------------------------------------

/*

Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

Should work like that:

*/

function isEmpty(obj) {
    for (const key in obj) {
        return false;
    }
    return true;
}

let schedule = {
    name: "Yusif"
};

console.log(isEmpty(schedule));



// ----------------------------------------------------------------------------------------------------


/*

We have an object storing salaries of our team:
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.

*/

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

const sumOfAllSalaries = () => {
    let sum = 0;
    for (const key in salaries) {
        sum += salaries[key];
    }
    return sum;
}

console.log(sumOfAllSalaries(salaries));

// ----------------------------------------------------------------------------------------------------


/*

Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

*/

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

const multiplyNumeric = () => {
    for (const key in menu) {
        if (typeof menu[key] === "number") {
            menu[key] *= 2
        }
    }
    console.log(menu);
}

multiplyNumeric(menu);