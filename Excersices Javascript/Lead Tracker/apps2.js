const inputEl = document.querySelector('.input-el');
const btn = document.querySelector('.input-btn');
const ulEl = document.querySelector('.ul-el');
const deleteBtn = document.querySelector('.delete-btn');
let myLeads = [];
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);
const saveBtn = document.querySelector('.save-btn');


if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads)
}

function render(leads) {
    let listItems = '';
    for (let i = 0; i < leads.length; i++) {       
        listItems +=`
        <li>
            <a target = "_blank" href = ${leads[i]}>
                ${leads[i]}
            </a>
        </li>`;        
    }
    ulEl.innerHTML = listItems
}


btn.addEventListener('click', () => {
   myLeads.push(inputEl.value);
   inputEl.value = '';
   localStorage.setItem('myLeads', JSON.stringify(myLeads));   
   render(myLeads); 
})

saveBtn.addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tab) => {
        myLeads.push(tab[0].url);     
        localStorage.setItem('myLeads', JSON.stringify(myLeads));   
        render(myLeads);
     });
    
})
deleteBtn.addEventListener('dblclick', () => {
    localStorage.clear()
    myLeads = [];
    render(myLeads)
})
