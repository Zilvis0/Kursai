
window.onload = function() {

    function inputValue(e){
        return document.querySelector(e)
    }

    let leButton = inputValue(".send")

    let group = [{
        firstName: "Zilvinas",
        lastName: "Pusnys",
        age: 30
    },
    {
        firstName: "PastZilvinas",
        lastName: "PastPusnys",
        age: 29
    }
    ]

    leButton.addEventListener('click', createMember, false)

    function createMember(){

        let addName = inputValue(".name")
        let addSurname = inputValue(".surname")
        let addAge = inputValue(".age")

        let newMember = {
            firstName: addName.value,
            lastName: addSurname.value,
            age: addAge.value
        }
        group.push(newMember)
        console.log(newMember)
    }
}