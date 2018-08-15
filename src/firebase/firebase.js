import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDdkydPCEbNZLbnRr0WnHJFjn8BKHZWAcU",
    authDomain: "almanaque-do-mercado.firebaseapp.com",
    databaseURL: "https://almanaque-do-mercado.firebaseio.com",
    projectId: "almanaque-do-mercado",
    storageBucket: "almanaque-do-mercado.appspot.com",
    messagingSenderId: "383236123055"
};

firebase.initializeApp(config);

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };


// database.ref('companies').on('value', (snapshot) => {
//     const companies = [];

//     snapshot.forEach((childSnapshot) => {
//         companies.push({
//             ...childSnapshot.val(),
//             id: childSnapshot.key
//         })
//     });

//     console.log(companies);
// });

// database.ref('companies')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 ...childSnapshot.val(),
//                 id: childSnapshot.key
//             });
//         });

//     console.log(expenses);    
//     });

// database.ref('companies').push({
//     id: '1',
//     name: 'Vale do Rio Doce',
//     activity: 'Empresa de Mineracao',
//     revenue: 1000000,
//     lastFinancialReport: 0,
// });

// database.ref('companies').push({
//     id: '2',
//     name: 'Petrobras',
//     activity: 'Empresa de Extracao de Petroleo',
//     revenue: 2000000,
//     lastFinancialReport: 1000,
// });

// database.ref('companies').push({
//     id: '3',
//     name: 'Banco do Brasil',
//     activity: 'Banco do Brasil',
//     revenue: 1500000,
//     lastFinancialReport: 3000,
// });

// database.ref('companies').push({
//     id: '4',
//     name: 'Celesc',
//     activity: 'Distribuiçãp de Energia Elétrica',
//     revenue: 500000,
//     lastFinancialReport: 1500,
// });

// database.ref('companies').push({
//     id: '5',
//     name: 'Riachuelo',
//     activity: 'Varejo',
//     revenue: 1200000,
//     lastFinancialReport: 500,
// });



// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// });


// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('fetching fail', e)
//     })


// database.ref().set({
//     name: 'Cesar',
//     age: 32,
//     stressLevel: 6, 
//     isSingle: false,
//     job: {
//         title: 'Software Developer',
//         company: 'Almanaque do Mercado'
//     }, 
//     location: {
//         city: 'Vancouver',
//         province: 'British Columbia',
//         country: 'Canada'
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((e) => {
//     console.log('this failed', e);
// });

// database.ref('attibutes').set({
//     height: 186,
//     weight: 95
// }).then(() => {
//     console.log('data is saved');
// }).catch((e) => {
//     console.log('process failed');
// });

// database.ref().update({
//     name: 'Cesar Augusto Dell Antonio junior',
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Toronto',
//     'location/province': 'Ontario', 
// });

// database.ref('inSingle').remove().then(() => {
//     console.log('isSingle removed');
// }).catch((e) => {
//     console.log('process failed'. e)
// });