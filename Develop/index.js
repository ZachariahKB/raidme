const fs = require('fs');
const inquirer = require('inquirer');
const genMarkdown = require('./genMarkdown');

// Function to prompt user for data
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of your project:'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a brief description of your project:'
        },
        {
            type: 'input',
            name: 'licence',
            message: 'Enter the license information:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage information:'
        },
        {
            type: 'input',
            name: 'license',
            message: 'Provide license information:'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Explain how others can contribute to your project:'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide testing instructions:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username:'
        }
    ]);
}

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README.md generated successfully!');
    });
}

// Main function
async function init() {
    try {
        // Prompt user for data
        const userData = await promptUser();

        // Generate markdown using user data
        const markdown = genMarkdown(userData);

        // Write markdown to file
        writeToFile('README.md', markdown);
    } catch (error) {
        console.error('Error generating README:', error);
    }
}

// Call main function
init();