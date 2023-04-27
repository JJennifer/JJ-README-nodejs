// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ""
  if (license === "Apache License 2.0"){
    badge = `![Apache license image](https://img.shields.io/badge/License-Apache-9cf.svg)`
  } else if (license === "MIT License"){
    badge = `![MIT license image](https://img.shields.io/badge/License-MIT-9cf.svg)`
  } else if (license === "Mozilla Public License 2.0"){
    badge = `![Mozilla license image](https://img.shields.io/badge/License-Mozilla-9cf.svg)`
  } else {
    badge = ``
  }
  return badge
}

// Function that returns the license link, if there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none"){
    return `\n*[License](#license)\n`
  }
  return ""
}

// Function that returns the license section of README, if there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "none") {
    return `## License
    ${license}`
  }
  return ""
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  *[Description](#description)
  *[Installation](#installation)
  *[Usage](#usage)
  *[Contribution](#contribution)
  *[Test](#test)
  *[Questions](#questions)

  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Test
  ${data.test}
  ## Questions
  * Github Username: ${data.questions}
  * Github Email: ${data.questions1}

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
