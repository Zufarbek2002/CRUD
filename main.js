const todoGet = document.querySelector('#get');
const todoList1 = document.querySelector('.box1');
const todoList2 = document.querySelector('.box2');
const todoList3 = document.querySelector('.box3');
const todoList4 = document.querySelector('.box4');
const API = 'https://jsonplaceholder.typicode.com/todos';

todoGet.addEventListener('submit', (e) => {
    e.preventDefault()
    const todoText = todoGet.text.value


 // 1-task  

    let a = todoText * 10; b = a-9;
        if (todoText > 20) {
            todoList1.innerHTML = `Ma'lumot topilmadi <br>`;
        } else {
        
    function getNumbersId() {
        fetch(API)
        .then((request) =>{
            return request.json()
        })
        .then((data) => {
            let data2 = data;
            data2.forEach(data => {
                for (let j = b; j <= a; j++) {
                    if (data.id == j) {
                        todoList1.innerHTML += `
                        <div class="single_box">
                        <div class="user_id">
                            userId: ${data.userId}
                        </div>
                        <div class="user_id">
                            id: ${data.id}
                        </div>
                        <div class="user_id">
                            title: ${data.title}
                        </div>
                        <div class="user_id">
                            completed: ${data.completed}
                        </div></div>`;                    
                    }
                }
            });
        })
        .catch((err) => {console.log(err);})
    }
        
    getNumbersId();    
    } 



 // 2-task

    function getComplete() {
        fetch(API)
        .then((request) =>{
            return request.json()
        })
        .then((data) => {
            let data2 = data;
            data2.forEach(data => {
                if (data.completed.toString() == todoText.toLowerCase()) {
                    todoList2.innerHTML += `
                    <div class="single_box">
                        <div class="user_id">
                            userId: ${data.userId}
                        </div>
                        <div class="user_id">
                            id: ${data.id}
                        </div>
                        <div class="user_id">
                            title: ${data.title}
                        </div>
                        <div class="user_id">
                            completed: ${data.completed}
                        </div></div>`;
                }
            
            });
                
        })
        .catch((err) => {console.log(err);})
    }
        
    getComplete(); 



 // 3-task

    function getUserId() {
        fetch(API)
        .then((request) =>{
            return request.json()
        })
        .then((data) => {
            let data2 = data;
            data2.forEach(data => {
                if (data.userId == todoText) {
                    todoList3.innerHTML += `
                    <div class="single_box">
                        <div class="user_id">
                            userId: ${data.userId}
                        </div>
                        <div class="user_id">
                            id: ${data.id}
                        </div>
                        <div class="user_id">
                            title: ${data.title}
                        </div>
                        <div class="user_id">
                            completed: ${data.completed}
                        </div></div>`;
                }
            });
                
        })
        .catch((err) => {console.log(err);})
    }
        
    getUserId(); 



 // 4-task

    function getId() {
        fetch(API)
        .then((request) =>{
            return request.json()
        })
        .then((data) => {
            let data2 = data;
            data2.forEach(data => {
                if (data.id == todoText) {
                    todoList4.innerHTML += `
                    <div class="single_box">
                        <div class="user_id">
                            userId: ${data.userId}
                        </div>
                        <div class="user_id">
                            id: ${data.id}
                        </div>
                        <div class="user_id">
                            title: ${data.title}
                        </div>
                        <div class="user_id">
                            completed: ${data.completed}
                        </div></div>`;
                }
                
            });
                
        })
        .catch((err) => {console.log(err);})
    }
        
    getId(); 


})