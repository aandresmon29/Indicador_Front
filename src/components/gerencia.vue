<template>
<div id="mainger">
   <h3>Gerencias</h3>
   <nav3>
     <h2>{{indicador}}</h2>
     <label for="fgerencia"> {{gerencia}} </label>
     <form v-on:submit.prevent="ShowDetail">
     <button v-on:click="goto"><font face="Century Gothic">Ir</font></button>
     </form>
   </nav3>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'gerencia',
  data: function (){
      return {
      gerencia: "",
      indicador: 0.0,
      colorin: ""
      }
  },
  created: function(){
      this.gerencia = this.$route.params.name
      this.indicador = this.$route.params.indigen
      this.colorin = this.$route.params.color
      let self = this
      axios.get("https://indicadorb.herokuapp.com/Gerencia/Gerencia1")
      .then((result) => {
      self.gerencia = result.data.name
      self.indicador = result.data.indigen
      self.colorin = result.data.color
      })
      .catch((error) => {
      alert("Sin informacion para mostrar");
      });
  },
  methods: {
    goto: function(){
      if(this.$route.name != "indicadores"){
      let username = localStorage.getItem("current_indicadores")
      this.$router.push({name: "indicadores", params:{username:username}})
      }
    },
  },
}
</script>

<style>
#mainger nav3{
  margin: 0px;
  width: 100%;
  height: 10vh;
  min-height: 100px; 
  text-align: center;
  color: black;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  float: left;
}
#mainger nav3 h2 {
     -moz-border-radius: 50%;
     -webkit-border-radius: 50%;
     border-radius: 50%;
     background:red;
    width:50px;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
}
#mainger nav3 label{
  background: white;
  width:150px;
  height:50px;
  display:flex;
  align-items:center;
  text-align: left;
  border-radius: 10%;
  padding-left:10px;
  padding-right:20px;
}
#mainger h3{
  display:flex;
  justify-content:center;
  align-items:center;
  padding-left:20px;
}
</style>