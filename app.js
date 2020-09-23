const inquirer = require('inquirer');

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));

/*
const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;
const fs = require('fs');
const generatePage = require('./src/page-template.js');

fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);
    console.log('Portfolio complete! Checkout index.html to see the output!')
});
*/