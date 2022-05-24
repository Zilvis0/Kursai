let addBtn = document.getElementById("addBtn")
let switchBtn = document.getElementById("switchBtn")
let deleteBtn = document.getElementById("deleteBtn")
let inputEl = document.getElementById("inputEl")
let toDoArea = document.getElementById("toDoArea")
let doneArea = document.getElementById("doneArea")
let testArray = ["a", "b", "c", "d"]
let testArray2 = ["1", "2", "3", "4"]

class ToDo {
    constructor({_el, _array}){
        this.isWorkDone = _el;
        this.arrayA = _array;
        }   
        renderMethod(_area){
            _area.innerHTML = ""
            for (let i = 0; i <this.arrayA.length; i++){
                let listEl = document.createElement("li")
                listEl.innerHTML = this.arrayA[i]
                _area.appendChild(listEl)
            }
            return _area
        }

        addMethod(_array){
            if (!testArray.includes(inputEl.value) && !testArray2.includes(inputEl.value) && inputEl.value != "")
            _array.push(inputEl.value)
        };

        deleteMethod({_choseArray, _inputValue, _area}){
                let returnedIndex = _choseArray.map((object, index) =>{
                    for (let x=0; x<_choseArray.length; x++){
                        if (object == _inputValue){
                            return index
                        }
                    }
                })
                console.log(returnedIndex)
                _choseArray.splice(returnedIndex, 1)
                this.renderMethod(_area)
        };

        swapToDone(_inputValue){
            let returnedIndex = testArray.map((object, index) =>{
                for (let x=0; x<testArray.length; x++){
                    if (object == _inputValue){
                        return index
                    }
                }
            })
            testArray.splice(returnedIndex, 1)
            testArray2.push(inputEl.value)
            this.renderMethod(toDoArea)
            trying2.renderMethod(doneArea)
            console.log(testArray2)

        };
}
let trying1 = new ToDo({_el: false, _array: testArray })
let trying2 = new ToDo({_el: true, _array: testArray2})
trying1.renderMethod(toDoArea)
trying2.renderMethod(doneArea)
addBtn.onclick = () => {
    trying1.addMethod(testArray)
    trying1.renderMethod(toDoArea)
    inputEl.value = ""
}
deleteBtn.onclick = () => {
    console.log("delete")
    if(testArray.includes(inputEl.value)){
    trying1.deleteMethod({_choseArray: testArray, _inputValue: inputEl.value, _area: toDoArea})
    } else if(testArray2.includes(inputEl.value)){
    trying2.deleteMethod({_choseArray: testArray2, _inputValue: inputEl.value, _area: doneArea})
    }
}

switchBtn.onclick = () => {
    console.log("switch")
    if(testArray.includes(inputEl.value)){
        trying1.swapToDone()
    }
}