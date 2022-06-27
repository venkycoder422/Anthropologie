let container = document.getElementById("backend-container");

let url = "http://localhost:3000/fashion";
function fetchData(){
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((response)=>{
        displayData(response);
    })
    .catch((error)=>{
        console.log(error);
    })
}

async function createNewElement(){
        // let id = document.getElementById("id").value;
        let title = document.getElementById("title").value;
        let price = document.getElementById("price").value;
        let image = document.getElementById("image").value; 
        let colorsimg = document.getElementById("colorsimg").value;
        
        let body = {
            
            title,
            price,
            image,
            color:[
                {
                    colorsimg
                }
            ]
           

        };
        let response = await fetch(url,{
            method : "POST",
            body : JSON.stringify(body),
            headers :{
                "Content-Type" : "application/json"
            }
        })
}

function displayData(data){
    console.log(data);
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    // let idHead = document.createElement("th");
    // idHead.innerText = "ID";
    let titleHead = document.createElement("th");
    titleHead.innerText = "TITLE";
    let priceHead = document.createElement("th");
    priceHead.innerText = "price";
    // let imageLinkHead = document.createElement("th");
    // imageLinkHead.innerText = "Image Link";
    // let categoryHead = document.createElement("th");
    // categoryHead.innerText = "C";
    let deleteHead = document.createElement("th");
    deleteHead.innerText = "DELETE";
    thead.append(titleHead,priceHead,deleteHead);
    data.forEach(element => {
        let tableRow = document.createElement("tr");
        // let id = document.createElement("td");
        // id.innerText = element.id;
        let title = document.createElement("td");
        title.innerText = element.title;
        let price = document.createElement("td");
        price.innerText = element.price;
        let img = document.createElement("td");
        img.innerText = element.image;
        let colorsimg = document.createElement("td");
        colorsimg.innerText = element.colorsimg;
        let del = document.createElement("td");
        let delBtn = document.createElement("button");
        delBtn.innerText = "DELETE";
        delBtn.addEventListener("click",(event)=>{
            event.preventDefault();
            deleteElement(element.id);
        });
        del.append(delBtn);
        tableRow.append(  title,price,del);
        tbody.append(tableRow);
    });
    table.append(thead,tbody);
    container.append(table);    
}

async function deleteElement(id){
    let response = await fetch(url + "/" + id,{
        method : "DELETE"
    });
    if(response.status === 200){
        fetchData();
    }
}

fetchData();
