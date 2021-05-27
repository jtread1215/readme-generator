//function for license badges if applicable
function licenseBadge(license) {
    if (license !== "none") {
        return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return "";
}

//function for license link if applicable
function licenseLink(license) {
    if(license !== "none") {
        return `\n* [License](#license)\n`;
    }
    return ''; 
}

//function for license in readMe if applicable
function licenseReadMe(license) {
    if(license !== "none") {
        return `## License 
    This project is licensed under the ${license} license.`;
    }
    return '';
}

//function for readMe
function generate(data) {
    return `# ${data.title}
    ${licenseBadge(data.license)}
## Description

${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)
${licenseLink(data.license)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${licenseReadMe(data.license)}
  
## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${
    data.email
  }. You can find more of my work at [${data.github}](https://github.com/${
    data.github
  }/).

`;
}

module.exports = generate;
