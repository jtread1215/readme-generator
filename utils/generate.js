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
    return `# ${data.repo}
    ${licenseBadge(data.license)}
## Description

${data.desc}

## Table of Contents 

* [Installation](#install)

* [Usage](#usage)
${licenseLink(data.license)}

* [Contribute](#contribute)

* [Test](#test)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

${data.install}

## Usage

${data.usage}

${licenseReadMe(data.license)}
  
## Contributing

${data.contribute}

## Tests

To run tests, run the following command:

${data.test}

## Questions

If you have any questions about this repository, please feel free to contact me at ${data.email}. 
You can also find all of my other repositories at [${data.userName}](https://github.com/${data.userName}/).`;
}

module.exports = generate;
