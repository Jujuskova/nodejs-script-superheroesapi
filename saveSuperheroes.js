
// const rp = require('request-promise'); // simplified HTTP request client - to get API (like fetch)
const fetch = require("node-fetch"); // fetch for node
const jsonfile = require('jsonfile'); // Easily read/write JSON files in Node.js

const file = './superheroes.json'
let characters = [];

/** 
for (let i = 1; i <= 10; i++) {
    let options = {
        url: `http://www.superheroapi.com/api.php/10209955207355299/${i}`,
        json: true, // Automatically parses the JSON string in the response
    }
    
    rp(options)
        .then(data => {
            characters = [...characters, data]
            console.log(characters.name)
        })
        .catch( error => {
            console.log(error)
        })
}
*/

const getSuperheroes = async url => {
    try {
        const response = await fetch(url);
        const data = await response.json(); 
        return [...characters, data];
        
    } catch (error) {
    console.log(error);
    }
};

const loopSup = async () => {
    for (let i = 1; i <= 732; i++) {
        if (i === 131 || i === 132 || i === 173 || i === 368 || i === 635 || i === 661) { continue; }
        let url = `http://www.superheroapi.com/api.php/10209955207355299/${i}`
    
        let sup = await getSuperheroes(url)
        characters = sup
        
    }
    //console.log(characters)
    //let obj = {characters}
    //let charactersjson = JSON.stringify(obj)
    jsonfile.writeFile(file, characters, function(err) {
        if (err) console.error(err)
    })
}

loopSup()

