const fs = require("fs")
const inquirer = require("inquirer")
const util = require("util")
const axios = require("axios")
const generateHTML2 = require("./Assets/generatehtml.js", "utf8")
const writeFilesAsync = util.promisify(fs.writeFile)
const readFileAsync = util.promisify(fs.readFile)
const htmlPdf = require("html-pdf")
var options = {format: "Letter"}
const userinput = {
  format: "Letter",
  orientation: "portrait",
  type: "pdf"
}

async function promptUser() {
  const response = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name"
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
  getGithubData(response)
}
const getGithubData = async res => {
  try {
    //using Inquirer answers to make api calls
    const queryURL = `https://api.github.com/users/${res.github}`
    const queryURLStar = `https://api.github.com/users/${res.github}/starred`
    //Making API calls with axios from above info
    const profile = await axios.get(queryURL)
    console.log(profile.data)
    const stars = await axios.get(queryURLStar)
    console.log(stars.data.length)
    const data = {
      color: res.color,
      profile: profile.data,
      stars: stars.data.length
    }
    console.log(data)
    //calling in seperate js file for the html-pdf
    const html = generateHTML2(data)
    await writeFilesAsync(`./assets/${res.username}.html`, html)
    console.log("success!")
    //html-pdf time!!!!
    htmlPdf
      .create(html, options)
      .toFile(`.assets/pdf/${res.username}.pdf`, function(err, res) {
        if (err) {
          console.log(err)
        }
        console.log(`success!`)
      })
  } catch (err) {
    console.log(err)
  }
}
promptUser()
