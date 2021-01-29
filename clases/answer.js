let correctas = localStorage.getItem('Correctas');
let incorrectas = localStorage.getItem('Incorrectas');

function results(){
   let container = document.getElementById('answers-container');
   
   container.innerHTML += `<div class="container mt-5">
                               <div class="row justify-content-center">
                                   <div class="col-md-6">
                                       <div class="card">
                                           <div class="card-body">
                                               <button type="submit" class="btn btn-success col-md-12 mt-2">Buenas ${correctas}</button>
                                               <button type="submit" class="btn btn-danger col-md-12 mt-2">Malas ${incorrectas}</button>
                                               <input type="button" class="btn btn-dark col-md-12 mt-2" value="Página anterior" onClick="history.go(-1);">
                                           </div>
                                       </div>
                                   </div>
                               </div>`
}