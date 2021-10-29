<template>
<div id="mainger">
  <h3>Gerencias</h3>
  <nav3>
     <h2>{{indicadorb}}</h2>
     <label for="fgerencia"> {{gerenciab}} </label>
     <form v-on:submit.prevent="ShowDetail">
     <button v-on:click="gotob"><font face="Century Gothic">--</font></button>
     </form>
  </nav3>
  <nav3>
     <h2>{{indicadora}}</h2>
     <label for="fgerencia"> {{gerenciaa}} </label>
     <form v-on:submit.prevent="ShowDetail">
     <button v-on:click="gotoa"><font face="Century Gothic">--</font></button>
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
      gerenciaa: "",
      indicadora: 0.0,
      colorina: "",
      gerenciab: "",
      indicadorb: 0.0,
      colorinb: "",
      gerenciac: "",
      indicadorc: 0.0,
      colorinc: ""
      }
  },
  created: function(){
      this.gerenciaa = this.$route.params.name
      this.indicadora = this.$route.params.indigen
      this.colorina = this.$route.params.color
      let self = this
      axios.get("https://indicadorb.herokuapp.com/Gerencia/Gerencia1")
      .then((result) => {
      self.gerenciaa = result.data.name
      self.indicadora = result.data.indigen
      self.colorina = result.data.color
      })
      this.gerenciab = this.$route.params.name
      this.indicadorb = this.$route.params.indigen
      this.colorinb = this.$route.params.color
      axios.get("https://indicadorb.herokuapp.com/Gerencia/Gerencia2")
      .then((result) => {
      self.gerenciab = result.data.name
      self.indicadorb = result.data.indigen
      self.b = result.data.color
      })
      this.gerenciac = this.$route.params.name
      this.indicadorc = this.$route.params.indigen
      this.colorinc = this.$route.params.color
      axios.get("https://indicadorb.herokuapp.com/Gerencia/Gerencia3")
      .then((result) => {
      self.gerenciac = result.data.name
      self.indicadorc = result.data.indigen
      self.b = result.data.color
      })
      .catch((error) => {
      alert("Sin informacion para mostrar");
      });
  },
  methods: {
    gotoa: function(){
      if(this.$route.name != "indicadoresa"){
      let username = localStorage.getItem("current_indicadoresa")
      this.$router.push({name: "indicadoresa", params:{username:username}})
      }
    },
    gotob: function(){
      if(this.$route.name != "indicadoresb"){
      let username = localStorage.getItem("current_indicadoresb")
      this.$router.push({name: "indicadoresb", params:{username:username}})
      }
    },
    gotoc: function(){
      if(this.$route.name != "indicadoresc"){
      let username = localStorage.getItem("current_indicadoresc")
      this.$router.push({name: "indicadoresc", params:{username:username}})
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
  min-height: 20px; 
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
    background:rgb(60, 255, 0);
    width:50px;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
}
#mainger nav3 label{
  background: white;
  width:170px;
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
  min-height: 20px; 
}
#mainger nav3 form button{
	background: url('../assets/ir.png');
  background-size: 100%;
  border: none;
  cursor: pointer;
  padding: 6px 10px;
  color: white;
  align-items: center;
}
</style>
