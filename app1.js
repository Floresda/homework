
let inputEle = document.createElement("input");
inputEle.placeholder="Name..."

let inputElePass = document.createElement("input");
inputElePass.placeholder="Password..."
inputElePass.setAttribute("type","password");

let messageEle =document.createElement("h3");


let button =document.createElement("button");
button.innerHTML="Click me";

let clearEle =document.createElement("div");

button.addEventListener("click",function(){
    if(inputEle.value==="coolStudent123"){
        messageEle.innerHTML="Logged in"
        pages =[
            {
                page:"Home",
                navigate: homePage
            },
            {
                page: "View",
                navigate: view
            }

        ]

        function navButton(pg, pr, nv){
            let button = document.createElement("button");
            button.innerHTML =pg;
            button.addEventListener("click",function(){
                document.body.querySelector(".wrapper").innerHTML=""
                nv();
            })
            pr.appendChild(button);
        }

        function navigation(){
            let nav= document.createElement("nav");
            let wrapper=document.createElement("div");
            wrapper.classList.add("wrapper");
            nav.style.height="80px";
            nav.style.backgroundColor="blue";
            for(obj of pages){
                navButton(obj.page, nav, obj.navigate);
            }
            document.body.appendChild(nav);
            document.body.appendChild(wrapper);
        }

        function homePage(){
            let home = document.createElement("div");
            document.body.appendChild(home);
            const h1 = document.createElement("H1");
            const textNode= document.createTextNode("Home Page");
            h1.appendChild(textNode);
            document.body.appendChild(h1);
            clearEle.document.body.innerHTML="";
        }

        function view(){
            let view = document.createElement("div");
            document.body.querySelector(".wrapper").appendChild(view);
            const h1 = document.createElement("H1");
            const textNode= document.createTextNode("View Notes");
            h1.appendChild(textNode);
            document.body.appendChild(h1);

            let button1 =document.createElement("button");
            button1.innerHTML="Submit Note";

            button1.addEventListener("click",function(){
                list.push(inputEle.value);
                renderList();
            })
            let listEle =document.createElement("div");
            function renderList(){
                listEle.innerHTML="";
                for(let i=0; i<list.length;i++){
                    let ele=document.createElement("div");
                    ele.innerHTML=list[i];
                    listEle.appendChild(ele);
                }
            }
            renderList();

        }
        navigation();
        homePage();
    }else{
        messageEle.innerHTML="Password is incorrect"
    }

})

document.body.appendChild(inputEle);
document.body.appendChild(inputElePass);
document.body.appendChild(messageEle);
document.body.appendChild(button);


