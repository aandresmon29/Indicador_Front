<template>
<div id="maindet">
  <h3>Rango de Medición</h3>
  <nav2> 
    <h4>>={{lgreen}}</h4>
    <label1 for="fgerencia"> </label1>
    <h5>>={{lyellow}}</h5>
    <label1 for="fgerencia"> </label1>
    <h6>Menor a {{lred}}</h6>
  </nav2>
  <h7>{{central}}</h7>
  <nav3>
    <h2>Datos</h2>
    <label1 for="fgerencia"> {{calculo}} </label1>
    <br>
    <h2>Observación</h2>
    <label1 for="fgerencia"> {{comentario}} </label1>
    <br>
    <form v-on:submit.prevent="ShowDetail">
      <button v-on:click="goto"><font face="Century Gothic">Volver</font></button>
    </form>
  </nav3>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'detallea',
  data: function (){
      return {
      formula: "",
      calculo: "",
      lgreen: 0.0,
      lyellow: 0.0,
      lred: 0.0,
      central: ""
      }
  },
  created: function(){
      this.formula = this.$route.params.formula
      this.calculo = this.$route.params.calculo
      this.comentario = this.$route.params.comentario
      this.lgreen = this.$route.params.lgreen
      this.lyellow = this.$route.params.lyellow
      this.lred = this.$route.params.lred
      this.central = this.$route.params.central
      let self = this
      axios.get("https://indicadorb.herokuapp.com/Indicadoresa/Indicador11")
      .then((result) => {
      self.formula = result.data.formula
      self.calculo = result.data.calculo
      self.comentario = result.data.comentario
      self.lgreen = result.data.lgreen
      self.lyellow = result.data.lyellow
      self.lred = result.data.lred
      self.central = result.data.central
      })
      .catch((error) => {
      alert("Sin informacion para mostrar");
      });
  },
  methods: {
    goto: function(){
      if(this.$route.name != "indicadoresa"){
      let username = localStorage.getItem("current_indicadoresa")
      this.$router.push({name: "indicadoresa", params:{username:username}})
      }
    },
  },
}
</script>

<style>
#maindet h3{
  display:inline-flex;
  justify-content:center;
  align-items:center;
  height: 10px;
  width: 100%;
}
#maindet h7{
  display:inline-flex;
  justify-content:center;
  align-items:center;
  text-align: center;
  width: 100%;
  height: 15px;
}
#maindet nav2{
  margin: 0px;
  width: 100%;
  height: 20vh;
  text-align: center;
  color: black;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  float: left;
}
#maindet nav2 label1{
  background: white;
  width:10px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align: left;
}
#maindet nav2 h4 {
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background:rgb(60, 255, 0);
  width:50px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
}
#maindet nav2 h5 {
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
#maindet nav2 h6 {
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
#maindet nav3{
  margin: 0px;
  width: 100%;
  height: 20px;
  min-height: 20px; 
  text-align: center;
  color: black;
  display: inline-block;
  align-items: center;
  justify-content: center;
}
#maindet nav3 h2{
  height: 20px;
}
#maindet nav3 h2{
  height: 20px;
}
#maindet nav3 form{
  margin: 20px;
}
</style>