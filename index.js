// const contacts= require("./db/contacts.json")
// const {getAll} = require("./contacts")
// // const argv = require('yargs').argv;

// // TODO: рефакторить
// const invokeAction = async ({ action, id, name, email, phone }) => {
//     switch (action) {
//         case 'list':
//             const allContacts = await contacts.getAll();
//             return console.log(allContacts)
//         break;

//         case 'get':
//       // ... id
//         break;

//         case 'add':
//       // ... name email phone
//         break;

//         case 'remove':
//       // ... id
//         break;

//     default:
//         console.warn('\x1B[31m Unknown action type!');
//     }
// }

// invokeAction({action: "list"});