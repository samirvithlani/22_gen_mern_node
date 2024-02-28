
console.log("users.js is loaded")
const name = "royal"
const age = 25

const getUser = ()=>{

    console.log("getUser is called")
}

// module.exports = name;
// module.exports = age;

//module.exports = getUser;

module.exports = {
    name,age,getUser
}