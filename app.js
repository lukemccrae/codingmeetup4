function getFirstPython(list) {
    var answer = list.find(function(element) {
        return element.language === 'Python'
    })
    if (answer) {
        return `${answer.firstName}, ${answer.country}`;
    } else {
        return 'There will be no Python developers'
    }
}


var list1 = [{
        firstName: 'Mark',
        lastName: 'G.',
        country: 'Scotland',
        continent: 'Europe',
        age: 22,
        language: 'JavaScript'
    },
    {
        firstName: 'Victoria',
        lastName: 'T.',
        country: 'Puerto Rico',
        continent: 'Americas',
        age: 30,
        language: 'Python'
    },
    {
        firstName: 'Emma',
        lastName: 'B.',
        country: 'Norway',
        continent: 'Europe',
        age: 19,
        language: 'Clojure'
    }
];

var list2 = [{
        firstName: 'Kseniya',
        lastName: 'T.',
        country: 'Belarus',
        continent: 'Europe',
        age: 29,
        language: 'JavaScript'
    },
    {
        firstName: 'Amar',
        lastName: 'V.',
        country: 'Bosnia and Herzegovina',
        continent: 'Europe',
        age: 32,
        language: 'Ruby'
    },
];

// console.log(list1[2].language);

console.log(getFirstPython(list1));
// Test.assertSimilar(getFirstPython(list1), 'Victoria, Puerto Rico');
// Test.assertSimilar(getFirstPython(list2), 'There will be no Python developers');
