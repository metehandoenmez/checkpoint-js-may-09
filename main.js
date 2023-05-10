const people = [
    { name: 'Paul', year: 2 },
    { name: 'George', year: 2 },
    { name: 'Lucas', year: 2 },
    { name: 'Marco', year: 2 },
    { name: 'Peter', year: 2 },
    { name: 'Carl', year: 2 },
    { name: 'Simon', year: 2 },
    { name: 'Mark', year: 2 },
    { name: 'Sandra', year: 2 },
    { name: 'Alice', year: 2 }
];

// returns a random number betweem min and max
// for example, getRandomNumber(1, 3) will return either 1, 2 or 3, randomly.
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Person {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(val) {
        this._name = val;
    }
}

class Student extends Person {
    _year;
    _grade=0;
    constructor(name, year, grade) {
        super(name);
        this._year = year;
        this._grade = grade;
    }
    get year() {
        return this._year;
    }
    set year(val) {
        this._year = val;
    }
    get grade() {
        return this._grade;
    }
    set grade(val) {
        this._grade = val;
    }
}

let students = [];

for (let i = 0; i < people.length; i++) {
    const student = people[i];
    let studentArg = new Student(student.name, student.year)
    students.push(studentArg)
}

class Academy {
    static exam(students) {
        students.map(el => el.grade = getRandomNumber(1,10))
    }
    static graduate(students) {
        return students.filter((el) => el.grade > 6)
    }
    static studentLevels(students) {
        let result = [];
        students.map((el) => {
            for (let i = 0; i < students.length; i++) {
                const comment = students[i];
                if(comment.grade <5) {
                    result.push("Failed");
                }
                else if(comment.grade >= 6 && comment.grade <7) {
                    result.push("Average");
                }
                else if(comment.grade >= 7 && comment.grade <8) {
                    result.push("Above Average");
                }
                else if(comment.grade >= 8 && comment.grade <10) {
                    result.push("Great");
                }
            }
            
        })
        return result;
    }
    static studentInfo(students) {
        return students.map((el) => 
        `${el.name}, of year ${el.year}, has a grade of ${el.grade}`  )
    }

    static printStudents(students, callbackFc) {
        students.forEach(el => {
        callbackFc;
        });
    }

    static averageGrade(students) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
               resolve((students.reduce((a,b) => a + b.grade), 0) / students.length) 
            }, 2000);
            if(students.length < 3) {reject("Too few students!")}
        })
}
}

function callbackFunction1(student) {
    console.log(student);
}

/* Promise
.then(() => console.log(resolve)) */


Academy.exam(students);
console.log(students);

console.log(Academy.graduate(students));

Academy.studentLevels(students);

console.log(Academy.studentInfo(students));

console.log(Academy.studentLevels(students));


let jsonStr = JSON.stringify(students);
console.log(jsonStr);
let obj = JSON.parse(jsonStr);
console.log(obj);


