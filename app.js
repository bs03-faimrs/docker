console.log("Hello from node...currently running from inside a docker container")

let name = "Benjamin"
const helloWorld = (name)=>{
    console.log(`Hello guys! I'm ${name}! and this is my first docker container file..`)
}

helloWorld(name)

console.log("Here is the end of app.js")