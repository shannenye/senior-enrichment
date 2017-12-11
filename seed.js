const db = require('./server/db/index');
const Students = require('./server/db/models/students.model');
const Campuses = require('./server/db/models/campuses.model');

const studentsForPostico = [
    {
        firstName: 'Stud',
        lastName: 'McDudley',
        email: 'StudleyMcDudley@random.com',
        gpa: 1.3,
        campusId: 1
    },
    {
        firstName: 'Sophie',
        lastName: 'Moore',
        email: 'SophMoore@random.com',
        gpa: 3.2,
        campusId: 2
    },
    {
        firstName: 'Freshie',
        lastName: 'Mann',
        email: 'FreshieIsSoMannly@random.com',
        gpa: 1.3,
        campusId: 3
    },
    {
        firstName: 'David',
        lastName: 'Tenant',
        email: 'BestDocEver@random.com',
        gpa: 4.0,
        campusId: 4
    },
    {
        firstName: 'Booger',
        lastName: 'Monster',
        email: 'OogaBooga@random.com',
        gpa: 0.1,
        campusId: 1
    },
    {
        firstName: 'Catsio',
        lastName: 'Beleza',
        email: 'somethingInPt@random.com',
        gpa: 3.5,
        campusId: 3
    },
    {
        firstName: 'Omreow',
        lastName: 'StoleCatsiosPuppyBowl',
        email: 'catiospuppyBowl@random.com',
        gpa: 3.5,
        campusId: 2
    },
    {
        firstName: 'Billy',
        lastName: 'Bob',
        email: 'BillyBob@random.com',
        gpa: 1.6,
        campusId: 1
    },
    {
        firstName: 'Pooh',
        lastName: 'Bear',
        email: 'poohBear@random.com',
        gpa: 2.7,
        campusId: 3
    },
    {
        firstName: 'Woody',
        lastName: 'Woodpacker',
        email: 'LmaoWoodyWoodpacker@random.com',
        gpa: 3.1,
        campusId: 2
    },
    {
        firstName: 'Fuzzy',
        lastName: 'Potato',
        email: 'fuzzyPotato@random.com',
        gpa: 0,
        campusId: 2
    },
    {
        firstName: 'Rotten',
        lastName: 'Tomato',
        email: 'RottenTomato@random.com',
        gpa: 3.9,
        campusId: 4
    }
]

const campusesForPostico = [
    {
        name: 'Mars',
        imageUrl: 'https://www.nasa.gov/sites/default/files/thumbnails/image/journey_to_mars.jpeg',
        description: 'Mars Space Academy'
    },
    {
        name: 'Jupiter',
        imageUrl: 'http://www.slate.com/content/dam/slate/blogs/bad_astronomy/2016/02/08/Jupiter_muscles.jpg.CROP.original-original.jpg',
        description: 'Gains Academy'
    },
    {
        name: 'Pluto',
        imageUrl: 'https://www.factslides.com/imgs/sad-pluto.jpg',
        description: 'Existential Crisis Academy'
    },
    {
        name: 'Gallifrey',
        imageUrl: 'https://vignette.wikia.nocookie.net/tardis/images/e/e6/The_Legends_of_Gallifrey_-_Doctor_Who_-_The_Sound_of_Drums_-_BBC/revision/latest/scale-to-width-down/350?cb=20141113061705',
        description: 'Time Lord Academy'
    }
];

const seed = () => {
    return Campuses.bulkCreate(campusesForPostico)
    .then(() => Students.bulkCreate(studentsForPostico))
}

seed()
.then(() => {
process.exit();
});
