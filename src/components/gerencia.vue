<template>
<div id="mainger">
   <h3>Rangos de Medición</h3>
  <nav2> 
       <h4>>=95</h4>
      <h5>>=90</h5>
      <h6>Menor a 90</h6>
  </nav2>
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
      let username = localStorage.getItem("indicadore")
      this.$router.push({name: "indicadores", params:{username:username}})
      }
    },
  },
}
</script>

<style>
#mainger nav2{
  margin: 0px;
  width: 100%;
  height: 5vh;
  min-height: 5px; 
  text-align: center;
  color: black;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  float: left;
}
#mainger nav2 h4 {
     -moz-border-radius: 50%;
     -webkit-border-radius: 50%;
     border-radius: 50%;
     background: green;
    width:50px;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
}
#mainger nav2 h5 {
     -moz-border-radius: 50%;
     -webkit-border-radius: 50%;
     border-radius: 50%;
     background: yellow;
    width:50px;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
}
#mainger nav2 h6 {
     -moz-border-radius: 50%;
     -webkit-border-radius: 50%;
     border-radius: 50%;
     background: red;
    width:50px;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
}
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
  padding-left:20px;
  padding-right:20px;
}
#mainger h3{
  display:flex;
  justify-content:center;
  align-items:center;
  padding-left:20px;
}
</style>