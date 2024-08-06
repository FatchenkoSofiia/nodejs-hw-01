import fs from 'fs';
import path from 'path';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = (num) => {
    const filePath = path.resolve(PATH_DB);
    const contacts = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    for (let i = 0; i < num; i++) {
        contacts.push(createFakeContact());
    }

    fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2));
};

generateContacts(5); // Згенеруйте 5 контактів за замовчуванням
