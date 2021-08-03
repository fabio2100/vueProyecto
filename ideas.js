new Vue({
  el: '#app',
  data: {
    ideaTxt: '',
    prioridad: '',
    listaIdea: [],
    searchTxt : '',
    listaUsuarios : []
  },
  methods: {
    agregarIdea : function (){
      var idea = {
        'id':this.listaIdea.length,
        'ideaTxt':this.ideaTxt,
        'prioridad':this.prioridad
      };
      this.listaIdea.push(idea);
    },
    buscarIdeas: function (valor){
      this.listaIdea = this.listaIdea.filter(value=>{return value.idea.indexOf(valor)>=0})
    },
    eliminarIdea : function (id){
      let index = this.listaIdea.findIndex(e=>e.id===id);
      this.listaIdea.splice(index,1);
    },
    cargarDatosUsuarios : function(){
      var self = this;
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(
         function(response){
           self.listaUsuarios = response.data;
           console.log(self.listaUsuarios)
         }
      )
    },
    eliminarUsuario : function(email){
      let index = this.listaUsuarios.findIndex(e=>e.email===email);
      this.listaUsuarios.splice(index,1)
    }
    },
  watch: {
    searchTxt: function (val){
      this.buscarIdeas(val);
    }
  },

})