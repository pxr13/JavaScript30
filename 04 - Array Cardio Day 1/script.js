// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
function challenge1 () {
  const filteredArr =
    inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
  return filteredArr;
}

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
function challenge2 () {
  const mappedArr =
    inventors.map(inventor => `${inventor.first} ${inventor.last}`);
  return mappedArr;
}

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
function challenge3() {
  const sortedArr =
    inventors.sort((prev, curr) => prev.year - curr.year);
  return sortedArr;
}

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const getAge = (inventor) => {
  return inventor.passed - inventor.year;
}

const totalYears = inventors.reduce((total, inventor) => total + getAge(inventor), 0);

// 5. Sort the inventors by years lived
function challenge5() {
  const sortedArr =
    inventors.sort((prev, curr) => getAge(curr) - getAge(prev));
  return sortedArr;
}

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
  const streets = ["Boulevards of Paris", "City walls of Paris", "Thiers wall", "Wall of Charles V", "Wall of Philip II Augustus", "City gates of Paris", "Haussmann's renovation of Paris", "Boulevards of the Marshals", "Boulevard Auguste-Blanqui", "Boulevard Barbès", "Boulevard Beaumarchais", "Boulevard de l'Amiral-Bruix", "Boulevard des Capucines", "Boulevard de la Chapelle", "Boulevard de Clichy", "Boulevard du Crime", "Boulevard Haussmann", "Boulevard de l'Hôpital", "Boulevard des Italiens", "Boulevard de la  Madeleine", "Boulevard de Magenta", "Boulevard Montmartre", "Boulevard du Montparnasse", "Boulevard Raspail", "Boulevard Richard-Lenoir", "Boulevard de Rochechouart", "Boulevard Saint-Germain", "Boulevard Saint-Michel", "Boulevard de Sébastopol", "Boulevard de Strasbourg", "Boulevard du Temple", "Boulevard Voltaire", "Boulevard de la Zone"]

function listCriteria(street) {
  return street.includes('de');
}

const filteredList = (streets) => {
  return streets.filter(street => listCriteria(street));
}

  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// 7. sort Exercise
// Sort the people alphabetically by last name
function getLastName(fullName) {
  let [lastName, firstName] = fullName.toLowerCase().split(', ');
  return lastName;
}

function sortStrings(prev, curr) {
  return getLastName(prev) > getLastName(curr) ? 1 : -1;
}

const sortByLastName = (people) => {
  const sortedArr =
    people.sort((prev, curr) => {
      return sortStrings(prev, curr);
    });
  return sortedArr;
}

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const addToObj = (obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}

const transportation = (data) => {
  const finalObj =
    data.reduce((obj, item) => {
      return addToObj(obj, item);
    }, {});
  return finalObj;
}

console.log(transportation(data));
