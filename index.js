//globals

const fs = require("fs")
const inquirer = require("inquirer")
const util = require("util")
const axios = require("axios")
const generateHTML = require("./Assets/generateHTML.js")
const writeFilesAsync = util.promisify(fs.writeFile)
const readFileAsync = util.promisify(fs.readFile)
const htmlPdf = require("html-pdf")
const userinput = {
  format: "Letter",
  orientation: "portrait",
  type: "pdf"
}
//inquirer functinon

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
    },
    {
      type: "list",
      name: "color",
      choices: ["green", "blue", "pink", "red"]
    }
  ])
}

//pushing the users input into a variable for pdf/errors

//promptUser()
//.then(function(answers) {
//const pdf = generatePdf(answers)

//return
//})
//.catch(function(err) {
//console.log(err)
//})

//function for command line

async function initialize() {
  try {
    //storing answers from inquirer
    const answers = await promptUser()
    //using Inquirer answers to make api calls
    const queryURL = `https://api.github.com/users/&${answers.github}`
    const queryURLStar = `https://api.github.com/uses/&${answers.github}/starred`

    //Making API calls with axios from above info
    const profile = await axios.get(queryURL)
    //console.log(profile)
    const stars = await axios.get(queryURLStar)

    //collecting data into an object
    const data = {
      color: answers.color,
      answers: answers,
      profile: profile,
      stars: stars
    }
    //console.log(data)

    //calling in seperate js file for the html-pdf
    const html = generatehtml(data)

    await writeFilesAsync(`./assets/${answers.username}.html`, html)
    console.log("success!")

    //html-pdf time!!!!
    htmlPdf
      .create(html, userinput)
      .toFile(`.assets/pdf/${answers.username}.pdf`, function(err, res) {
        if (err) {
          console.log(err)
        }
        console.log(`success!`)
      })
  } catch (err) {
    console.log(err)
  }
}

initialize()
