import React from "react"
function coffeeCupNum(minutes) {
    let minutesInt = Object.values(minutes)
    let coffeeCups
   if (minutesInt < 5) coffeeCups = ""
   else if (minutesInt < 10) coffeeCups = "☕️"
   else if (minutesInt < 15) coffeeCups = "☕️☕️"
   else if (minutesInt < 20) coffeeCups = "☕️☕️☕️"
   else if (minutesInt < 25) coffeeCups = "☕️☕️☕️☕️"
   else if (minutesInt < 30) coffeeCups = "☕️☕️☕️☕️☕️"
   else if (minutesInt < 35) coffeeCups = "☕️☕️☕️☕️☕️☕️"
   else if (minutesInt < 40) coffeeCups = "☕️☕️☕️☕️☕️☕️☕️"
   else if (minutesInt < 45) coffeeCups = "☕️☕️☕️☕️☕️☕️☕️☕️"
   else if (minutesInt < 50) coffeeCups = "☕️☕️☕️☕️☕️☕️☕️☕️☕️"
   else coffeeCups = "☕️☕️☕️☕️☕️☕️☕️☕️☕️☕️"
    return coffeeCups;
}

function Article({title, date = "January 1, 1970", preview, minutes}) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <p>{minutes} minute read {coffeeCupNum({minutes})}</p>
        </article>
    )
}

export default Article