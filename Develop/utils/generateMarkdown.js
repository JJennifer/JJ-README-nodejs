// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// Function that returns the license link, if there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none"){
    return `\n*[License](#License)\n`
  }
  return " "
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "none") {
    return "## License"
  }
  return " "
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
