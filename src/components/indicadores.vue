<template>
<div id="mainindi">
   <h3>Indicadores</h3>
   <h4>{{gerencia}}</h4>
   <nav2>
    <h2>{{porcentaje}}</h2>
    <label for="fgerencia"> {{nombrein}} </label>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="goto"><font face="Century Gothic">Ir</font></button>
    </form>
   </nav2>
   <nav3>
    <h2>{{porcentajer}}</h2>
    <label for="fgerencia"> {{nombreinr}} </label>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="goto"><font face="Century Gothic">Ir</font></button>
    </form>
   </nav3>
   <nav4>
    <h2>{{porcentajec}}</h2>
    <label for="fgerencia"> {{nombreinc}} </label>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="goto"><font face="Century Gothic">Ir</font></button>
    </form>
   </nav4>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'indicadores',
  data: function (){
      return {
      gerencia: "",
      nombrein: "",
      porcentaje: 0.0,
      nombreinr: "",
      porcentajer: 0.0,
      nombreinc: "",
      porcentajec: 0.0
      }
  },
  created: function(){
      this.gerencia = this.$route.params.gerencia
      this.nombrein = this.$route.params.name
      this.porcentaje = this.$route.params.porcentaje
      let self = this
      axios.get("https://indicadorb.herokuapp.com/Indicadores/Indicador1")
      .then((result) => {
      self.gerencia = result.data.gerencia
      self.nombrein = result.data.name
      self.porcentaje = result.data.porcentaje
      })
      this.nombreinr = this.$route.params.name
      this.porcentajer = this.$route.params.porcentaje
      axios.get("https://indicadorb.herokuapp.com/Indicadores/Indicador2")
      .then((result) => {
      self.nombreinr = result.data.name
      self.porcentajer = result.data.porcentaje
      })
      this.nombreinc = this.$route.params.name
      this.porcentajec = this.$route.params.porcentaje
      axios.get("https://indicadorb.herokuapp.com/Indicadores/Indicador3")
      .then((result) => {
      self.nombreinc = result.data.name
      self.porcentajec = result.data.porcentaje
      })
},
  methods: {
      goto: function(){
      if(this.$route.name != "User"){
      let username = localStorage.getItem("User")
      this.$router.push({name: "User", params:{username:username}})
      }
    },
  },
}
</script>

<style>
#mainindi h3{
  display:flex;
  justify-content:center;
  align-items:center;
  padding-left:20px;
}
#mainindi h4{
  display:flex;
  justify-content:center;
  align-items:center;
  padding-left:20px;
}
#mainindi nav3{
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
#mainindi nav3 h2 {
     -moz-border-radius: 50%;
     -webkit-border-radius: 50%;
     border-radius: 50%;
     background: #5cb85c;
    width:50px;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
}
#mainindi nav3 label{
  padding-left:20px;
  padding-right:20px;
}
#mainindi nav2{
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
#mainindi nav2 h2 {
     -moz-border-radius: 50%;
     -webkit-border-radius: 50%;
     border-radius: 50%;
     background: #5cb85c;
    width:50px;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
}
#mainindi nav2 label{
  padding-left:20px;
  padding-right:20px;
}
#mainindi nav4{
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
#mainindi nav4 h2 {
     -moz-border-radius: 50%;
     -webkit-border-radius: 50%;
     border-radius: 50%;
     background: #5cb85c;
    width:50px;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
}
#mainindi nav4 label{
  padding-left:20px;
  padding-right:20px;
}
</style>