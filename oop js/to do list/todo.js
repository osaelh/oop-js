//ADD new To do
const search = document.querySelector('.search input');

const list = document.querySelector('.todos');  

const addForm = document.querySelector('.add'); 
const btn = document.querySelector('.btn');     

const gPop = document.querySelector('.popup-wrapper');
const popup = document.querySelector('.popup'); 

gPop.style.display = "none";
// console.log(list[])

class ToDo {
   constructor(name) {
      this.name = name;
   }
}

class UI {
   addToDotoList(toDo) {
      const html = `
      <li class="list-group-item d-flex justify-content-between align-items-center">
                 <span>${toDo.name}</span>
                 <i class="fas fa-trash delete"></i>
                </li>
      `;
      list.innerHTML += html;
      localStorage[''] = list.innerHTML
    }

    clearField () {
      addForm[0].value = '';
}

    create() {
   const div = document.createElement('div');
   div.classList.add('popup-close');
   div.setAttribute('id','closing');
   const text = document.createTextNode('X');
   div.appendChild(text);
   popup.append(div);
   const div2 = document.createElement('div');
   div2.classList.add('popup-content');
   const html = `
   <span id="sp">1</span>
   <h2>Fill the Input</h2>
   <p>Don't forget</p>
   <a href="#">Return</a>`;
   div2.innerHTML=html;
   popup.append(div2); 
   gPop.style.display ='block';
  setTimeout(function() {
   gPop.style.display = 'none';
  },3000)
   
}

}


btn.addEventListener('click',
  function(e) {
     const name = addForm[0].value;
   //   console.log(name);
   const toDo = new ToDo(name);
   // console.log(toDo);

   const ui = new UI();

   const number = 3;
   if(document.querySelector('.popup-content') == null){
      ui.create();
   }
   if (name == ''){
      ui.create();
      
      
   } else {
   
   ui.addToDotoList(toDo);


   ui.clearField();
 }
 

     e.preventDefault();
  }
)