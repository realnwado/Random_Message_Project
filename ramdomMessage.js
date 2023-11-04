//Generate random number
function genRandomNum(num) {
    return Math.floor(Math.random()*num)
} 
//Declare object with arrays as values of properties
const weatherForecast = {
    day : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    weather : ["rainy", "cloudy", "sunny", "dry"],
    mode : ["lucky", "stressful", "difficult", "busy"]
}
//Put forecast values in an array
let dayForecast = []

//Iterate over weatherForecast object
for (let prop in weatherForecast) {
    let varIndex = genRandomNum(weatherForecast[prop].length)

    switch (prop) {
        case "day" : dayForecast.push(weatherForecast[prop][varIndex])
        break
        
        case "weather" : dayForecast.push(weatherForecast[prop][varIndex])
        break

        case "mode" : dayForecast.push(weatherForecast[prop][varIndex])
        break

        default : dayForecast.push("No forecast for this values")
    }
}
//Format output message
function messageFormat(message) {
    const messageOutput = `Next ${dayForecast[0]}, the weather will be ${dayForecast[1]} and it will be a ${dayForecast[2]} day for you.`

    console.log(messageOutput)
}
console.log(dayForecast);

messageFormat(dayForecast);
