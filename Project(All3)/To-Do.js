console.log("to do");
function myfunction()
{
    let userData=document.getElementById('usertext');
    let listData=document.getElementById('list');
    let newListData=document.createElement('li');

    let button = '<button  onclick="elerem()">Remove</button>';
    let load= '<button onclick="Store()">Store</button>';
    let msg= userData.value + button + load;
    userData.value="";
    newListData.innerHTML=msg;
    listData.appendChild(newListData);

}

function Store(){
    let newListData=document.createElement('li');
    //checking browser support
    if(typeof(Storage)!== "undefined"){
        //storing
        localStorage.setItem("To-do-list",newListData);
        alert('Item stored to local Storage');
        // //retriving
        //document.getElementById("list").innerHTML="This browser does not support storing";
        let data=localStorage.getItem("To-do-list");

        //removing
        localStorage.removeItem('To-do-list');
    }
}

function removeEle(){
    this.remove();
}

function elerem(){
    let symbol = document.getElementsByTagName("li");
    for(let i=0;i<symbol.length;i++){
        symbol[i].addEventListener("click", removeEle,false);

    }
}