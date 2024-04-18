function genMarkdown(data) {
   return `
# ${data.title}

${data.licence}

### Description

${data.description}

### Table of Contents
* Installation

## Installation
To install, execute these commands:
\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Test
${data.test}

## Questions
For any questions, you can reach out to:
Email: ${data.email}
GitHub: ${data.github}
`;
}

module.exports = genMarkdown;