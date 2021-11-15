

const app = new Vue({

  el: '#app',
  
  data:{
    todoList:[
      {
        text:'Fare la spesa',
        done:false
      },
      {
        text:'Prendere la pappa di Artù',
        done:true
      },
      {
        text:'Pagare le bollette',
        done:false
      },
      {
        text:'Andare all\'Ikea',
        done:false
      },
      
    ],
    todostr: '',
    error:false
   
  },

  methods:{

    insertTodo(){
      // 1. leggere il contenuto del compo di input
      // 2. fare i controlli di validità del campo
      // 3. creare un nuovo oggetto da inserire nell'array
      // 4. fare il push dell'oggetto nell'array
      // 5. resettare il campo
      // trim() toglie il caratte "spazio" all'inizio e fine della stringa
      if(this.todostr.length < 3){
        this.error = true;
        setTimeout(()=>{
          // dopo 3 secondi facciamo scomparire il messaggio di errore
          this.error = false;
        },3000)
      }else{
         const newTodoItem = {
            text:this.todostr,
            done:false
         }
         this.todoList.push(newTodoItem);
         this.todostr = '';
      }
    },
    removeTodo(index){
     // richiesta di conferma proima dell'eliminazione dell'elemento
      if(confirm(`Sei sicuro di eliminare: "${this.todoList[index].text}"`)){
        this.todoList.splice(index,1);
      }
    },
    toggleDone(index){
      /*if(this.todoList[index].done === true){
        this.todoList[index].done = false;
      }else{
        this.todoList[index].done = true;
      }*/
      this.todoList[index].done = !this.todoList[index].done;
    }
    
  }

});
