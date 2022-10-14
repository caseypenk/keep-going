document.addEventListener("click", newMessage)

let reasons = [["sunny days", 48],
["making new friends", 95],
["travelling to a new country", 166],
["climbing a mountain", 47],
["facing your fears", 260],
["finding your inner confidence", 320],
["achieving all your goals", 43],
["spontaneous adventures", 182],
["warm showers", 193],
["warm baths", 193],
["feeling the warmth of the sun on your skin", 62],
["hikes in nature", 110],
["time with loved ones", 351],
["adopting an animal", 0],
["curiosity about the future", 188],
["looking up at the stars", 57],
["listening to your favorite music", 271],
["going to the museum", 278],
["browsing the book store", 15],
["puppies", 33],
["kittens", 278],
["sweater weather", 31],
["warm apple pie", 122],
["chocolate chip cookies", 45],
["the smell of a campfire", 8],
["the smell of pine trees", 106],
["fall leaves", 27],
["gently flowing rivers", 211],
["puffy white clouds", 198],
["forests", 140],
["hugs", 0]]

function newMessage() {
    // document.getElementById("container").style.height = document.body.scrollHeight
    let randomIndex = Math.floor(Math.random() * reasons.length)
    let reason = reasons[randomIndex][0]
    let bgColor = reasons[randomIndex][1]
    document.getElementById("current-reason").innerHTML = reason;
    document.body.style.backgroundColor = "hsl(" + bgColor + ", 75%, 70%)"
    document.getElementById("current-reason").style.color = "white"
}