function genMarkdown(data) {
   // Construct the Markdown content using template literals
   return `
 # ${data.title}
 
 ${data.license} // Insert license information
 
 ### Description
 
 ${data.description} // Insert project description
 
 ### Table of Contents
 * Installation
 
 ## Installation
 To install, execute these commands:
 \`\`\`
 ${data.installation} // Insert installation instructions
 \`\`\`
 
 ## Usage
 ${data.usage} // Insert usage information
 
 ## License
 ${data.license} // Reiterate license information
 
 ## Contributing
 ${data.contributing} // Insert contribution guidelines
 
 ## Test
 ${data.test} // Insert test instructions
 
 ## Questions
 For any questions, you can reach out to:
 Email: ${data.email} // Insert email address for contacting
 GitHub: ${data.github} // Insert GitHub username for contacting
 `;
 }
 
 module.exports = genMarkdown; // Export the genMarkdown function for use in other modules