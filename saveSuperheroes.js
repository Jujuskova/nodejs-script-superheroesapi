
// const rp = require('request-promise'); // simplified HTTP request client - to get API (like fetch)
const fetch = require("node-fetch"); // fetch for node
const jsonfile = require('jsonfile'); // Easily read/write JSON files in Node.js

const file = './superheroes.json'
const file2 = './test.json'
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
    for (let i = 1; i < 200; i++) {
        if (i === 131 || i === 132 || i === 173 || i === 368 || i === 635 || i === 661) { continue; }
        let url = `http://www.superheroapi.com/api.php/10209955207355299/${i}`
        
        let sup = await getSuperheroes(url)
        characters = sup
        
    }
    //hop hop hop        
    let charactersFilterd = characters.filter((character)=>
    /\bMarvel Comics\b|\bDC Comics\b|\bSharon Carter\b|\bPhoenix\b|\bDark Horse Comics\b|\bWildstorm\b|\bGiant-Man\b|\bToxin\b|\bAngel\b|\bGoliath\b|\bSpectre\b|\bOracle\b|\bHawkfire\b|\bHanna-Barbera\b|\bIcon Comics\b|\bMeltdown\b|\bBinary\b|\bEvil Deadpool\b|\bIDW Publishing\b|\bGemini V\b|\bArchangel\b|\bTempest\b|\bCaptain Marvel\b/gi.test(character.biography.publisher) && !/\b18\b|\b46\b|\b54\b|\b65\b|\b67\b|\b74\b|\b77\b|\b101\b|\b117\b|\b124\b|\b128\b|\b131\b|\b132\b|\b133\b|\b134\b|\b139\b|\b143\b|\b164\b|\b173\b|\b176\b|\b184\b|\b193\b|\b205\b|\b244\b|\b245\b/gi.test(character.id) )


    // let charactersFilterd = characters.filter((character)=>character.biography.publisher.includes("Marvel"))

    //console.log(characters)
    //let obj = {characters}
    //let charactersjson = JSON.stringify(obj)
    jsonfile.writeFile(file2, charactersFilterd, function(err) {
        if (err) console.error(err)
    })
}

loopSup()