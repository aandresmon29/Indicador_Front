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
    <br><br>
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
      axios.get("https://indicadorb.herokuapp.com/Indicadores/Indicador10")
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
      if(this.$route.name != "indicadores"){
      let username = localStorage.getItem("current_indicadores")
      this.$router.push({name: "indicadores", params:{username:username}})
      }
    },
  },
}
</script>

<style>