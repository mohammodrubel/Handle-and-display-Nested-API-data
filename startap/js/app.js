const loadDataFunction = ()=>{
    fetch('https://randomuser.me/api/?results=5')
    .then (Response => Response.json())
    .then (friendsData => displayUser(friendsData))
}
loadDataFunction()
const displayUser = (friendsData)=>{
    // console.log(friendsData.results)
    const containerDiv = document.getElementById('information')
        for (friend of friendsData.results){
            console.log(friend)
            const p =document.createElement('p')
            // p.innerText= friend.email
            p.innerText=`
            Name: ${friend.name.first} ${friend.name.last} Email: ${friend.email} Phone: ${friend.phone} login: ${friend.login.username} location: ${friend.location.country}
            `
            containerDiv.appendChild(p)
        }
}