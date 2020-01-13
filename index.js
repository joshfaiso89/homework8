const fs = require("fs")
const inquirer = require("inquirer")
const util = require("util")

const writeFilesAsync = util.promisify(fs.writeFile)

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name"
    },
    {
      type: "input",
      name: "color",
      message: "What is your favorite color?"
    },
    {
      type: "input",
      name: "github",
      message: "What is your github username?"
    }
  ])
}

promptUser()
  .then(function(answers) {
    const pdf = generatePdf(answers)

    return
  })
  .catch(function(err) {
    console.log(err)
  })
