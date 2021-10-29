<template>
<div id="mainindi">
  <h2>Indicadores</h2>
  <h3>{{gerencia}}</h3>
  <nav5>
    <label1 for="fgerencia"> Nombre Indicador </label1>
    <label2 for="fgerencia"> </label2>
    <label3 for="fgerencia"> Semana </label3>    
    <label2 for="fgerencia"> </label2>
    <label4 for="fgerencia"> Acum </label4>
  </nav5>  
  <nav4>
    <label1 for="fgerencia"> {{nombreina}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajea}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderadoa}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotoa"><font face="Century Gothic">--</font></button>
    </form>
  </nav4>
  <nav6>
    <button v-on:click="gerencias"><font face="Century Gothic">Ir a Gerencias</font></button>
  </nav6>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'indicadoresd',
  data: function (){
      return {
      gerencia: "",
      nombreina: "",
      porcentajea: 0.0,
      ponderadoa: 0.0,
      nombreinb: "",
      porcentajeb: 0.0,
      ponderadob: 0.0,
      nombreinc: "",
      porcentajec: 0.0,
      ponderadoc: 0.0,
      nombreind: "",
      porcentajed: 0.0,
      ponderadod: 0.0,
      nombreine: "",
      porcentajee: 0.0,
      ponderadoe: 0.0,
      nombreinf: "",
      porcentajef: 0.0,
      ponderadof: 0.0,
      nombreing: "",
      porcentajeg: 0.0,
      ponderadog: 0.0
      }
  },
  created: function(){
      this.gerencia = this.$route.params.gerencia
      this.nombreina = this.$route.params.name
      this.porcentajea = this.$route.params.porcentaje
      this.ponderadoa = this.$route.params.ponderado
      let self = this
      axios.get("https://indicadorb.herokuapp.com/Indicadoresd/Indicador1")
      .then((result) => {
      self.gerencia = result.data.gerencia
      self.nombreina = result.data.name
      self.porcentajea = result.data.porcentaje
      self.ponderadoa = result.data.ponderado
      })
      this.nombreinb = this.$route.params.name
      this.porcentajeb = this.$route.params.porcentaje
      this.ponderadob = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadoresd/Indicador2")
      .then((result) => {
      self.nombreinb = result.data.name
      self.porcentajeb = result.data.porcentaje
      self.ponderadob = result.data.ponderado
      })
      this.nombreinc = this.$route.params.name
      this.porcentajec = this.$route.params.porcentaje
      this.ponderadoc = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadoresd/Indicador3")
      .then((result) => {
      self.nombreinc = result.data.name
      self.porcentajec = result.data.porcentaje
      self.ponderadoc = result.data.ponderado
      })
      this.nombreind = this.$route.params.name
      this.porcentajed = this.$route.params.porcentaje
      this.ponderadod = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadoresd/Indicador4")
      .then((result) => {
      self.nombreind = result.data.name
      self.porcentajed = result.data.porcentaje
      self.ponderadod = result.data.ponderado
      })
      this.nombreine = this.$route.params.name
      this.porcentajee = this.$route.params.porcentaje
      this.ponderadoe = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadoresd/Indicador5")
      .then((result) => {
      self.nombreine = result.data.name
      self.porcentajee = result.data.porcentaje
      self.ponderadoe = result.data.ponderado
      })
      this.nombreinf = this.$route.params.name
      this.porcentajef = this.$route.params.porcentaje
      this.ponderadof = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadoresd/Indicador6")
      .then((result) => {
      self.nombreinf = result.data.name
      self.porcentajef = result.data.porcentaje
      self.ponderadof = result.data.ponderado
      })
      this.nombreing = this.$route.params.name
      this.porcentajeg = this.$route.params.porcentaje
      this.ponderadog = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadoresb/Indicador7")
      .then((result) => {
      self.nombreing = result.data.name
      self.porcentajeg = result.data.porcentaje
      self.ponderadog = result.data.ponderado
      })
  },
  methods: {
    gotoa: function(){
      if(this.$route.name != "detalleda"){
      let username = localStorage.getItem("current_detalleda")
      this.$router.push({name: "detalleda", params:{username:username}})
      }
    },
    gotob: function(){
      if(this.$route.name != "detallebb"){
      let username = localStorage.getItem("current_detallebb")
      this.$router.push({name: "detallebb", params:{username:username}})
      }
    },
    gotoc: function(){
      if(this.$route.name != "detallebc"){
      let username = localStorage.getItem("current_detallebc")
      this.$router.push({name: "detallebc", params:{username:username}})
      }
    },
    gotod: function(){
      if(this.$route.name != "detallebd"){
      let username = localStorage.getItem("current_detallebd")
      this.$router.push({name: "detallebd", params:{username:username}})
      }
    },
    gotoe: function(){
      if(this.$route.name != "detallebe"){
      let username = localStorage.getItem("current_detallebe")
      this.$router.push({name: "detallebe", params:{username:username}})
      }
    },
    gotof: function(){
      if(this.$route.name != "detallebf"){
      let username = localStorage.getItem("current_detallebf")
      this.$router.push({name: "detallebf", params:{username:username}})
      }
    },
    gotog: function(){
      if(this.$route.name != "detallebg"){
      let username = localStorage.getItem("current_detallebg")
      this.$router.push({name: "detallebg", params:{username:username}})
      }
    },
    gerencias: function(){
      if(this.$route.name != "gerencia"){
      let username = localStorage.getItem("current_gerencia")
      this.$router.push({name: "gerencia", params:{username:username}})
      }
    }
  },
}
</script>

<style>
#mainindi h2{
  display:flex;
  justify-content:center;
  align-items:center;
}
#mainindi h3{
  display:flex;
  justify-content:center;
  align-items:center;
}
#mainindi nav2{
  margin: 0px;
  width: 100%;
  height: 10vh;
  min-height: 50px; 
  text-align: center;
  color: black;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  float: left;
}
#mainindi nav2 label1{
  background: rgb(241, 240, 233);
  width:140px;
  height:50px;
  display:flex;
  align-items:center;
  text-align: justify;
  border-radius: 10%;
  padding-left: 5px;
  padding-right:20px;
  font-size: 9pt;
}
#mainindi nav2 h4 {
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background:red;
  width:50px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 14pt;
}
#mainindi nav2 label2{
  background: white;
  width:10px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align: left;
}
#mainindi nav2 h5 {
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background:red;
  width:50px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 14pt;
  }
#mainindi nav2 form button{
	background: url('../assets/ir.png');
  background-size: 100%;
  border: none;
  cursor: pointer;
  padding: 6px 10px;
  color: white;
  align-items: center;
}
#mainindi nav3{
  margin: 0px;
  width: 100%;
  height: 10vh;
  min-height: 50px; 
  text-align: center;
  color: black;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  float: left;
}
#mainindi nav3 label1{
  background: rgb(241, 240, 233);
  width:140px;
  height:50px;
  display:flex;
  align-items:center;
  text-align: justify;
  border-radius: 10%;
  padding-left: 5px;
  padding-right:20px;
  font-size: 9pt;
}
#mainindi nav3 h4 {
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background:yellow;
  width:50px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 14pt;
}
#mainindi nav3 label2{
  background: white;
  width:10px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align: left;
}
#mainindi nav3 h5 {
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background: yellow;
  width:50px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 14pt;
}
#mainindi nav3 form button{
	background: url('../assets/ir.png');
  background-size: 100%;
  border: none;
  cursor: pointer;
  padding: 6px 10px;
  color: white;
  align-items: center;
}
#mainindi nav4{
  margin: 0px;
  width: 100%;
  height: 10vh;
  min-height: 50px; 
  text-align: center;
  color: black;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  float: left;
}
#mainindi nav4 label1{
  background: rgb(241, 240, 233);
  width:140px;
  height:50px;
  display:flex;
  align-items:center;
  text-align: justify;
  border-radius: 10%;
  padding-left: 5px;
  padding-right:20px;
  font-size: 9pt;
}
#mainindi nav4 h4 {
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background:rgb(60, 255, 0);
  width:50px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 14pt;
}
#mainindi nav4 label2{
  background: white;
  width:10px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align: left;
}
#mainindi nav4 h5 {
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background:rgb(60, 255, 0);
  width:50px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 14pt;
}
#mainindi nav4 form button{
	background: url('../assets/ir.png');
  background-size: 100%;
  border: none;
  cursor: pointer;
  padding: 6px 10px;
  color: white;
  align-items: center;
}
#mainindi nav5{
  margin: 0px;
  width: 100%;
  height: 10vh;
  min-height: 0px; 
  text-align: center;
  color: black;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  float: left;
  font-size: 8pt;
  font-weight: bold;
}
#mainindi nav5 label1{
  background: white;
  width:140px;
  height:50px;
  display:flex;
  align-items:center;
  border-radius: 10%;
  padding-left: 15px;
  padding-right:5px;
}
#mainindi nav5 label2{
  background: white;
  width:10px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
}
#mainindi nav5 label3{
  background: white;
  width:50px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align: Center;
}
#mainindi nav5 label4{
  background: white;
  width:50px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align: Center;
  padding-right:35px;
}
#mainindi nav6{
  margin: 0px;
  width: 100%;
  height: 10vh;
  min-height: 80px; 
  text-align: center;
  color: black;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  float: left;
}
#mainindi nav7{
  margin: 0px;
  width: 100%;
  height: 10vh;
  min-height: 50px; 
  text-align: center;
  color: black;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  float: left;
}
#mainindi nav7 label1{
  background: rgb(241, 240, 233);
  width:140px;
  height:50px;
  display:flex;
  align-items:center;
  text-align: justify;
  border-radius: 10%;
  padding-left: 5px;
  padding-right:20px;
  font-size: 9pt;
}
#mainindi nav7 h4 {
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background:red;
  width:50px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 14pt;
}
#mainindi nav7 label2{
  background: white;
  width:10px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align: left;
}
#mainindi nav7 h5 {
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background: rgb(60, 255, 0);
  width:50px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 14pt;
  }
#mainindi nav7 form button{
	background: url('../assets/ir.png');
  background-size: 100%;
  border: none;
  cursor: pointer;
  padding: 6px 10px;
  color: white;
  align-items: center;
}
#mainindi nav8{
  margin: 0px;
  width: 100%;
  height: 10vh;
  min-height: 50px; 
  text-align: center;
  color: black;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  float: left;
}
#mainindi nav8 label1{
  background: rgb(241, 240, 233);
  width:140px;
  height:50px;
  display:flex;
  align-items:center;
  text-align: justify;
  border-radius: 10%;
  padding-left: 5px;
  padding-right:20px;
  font-size: 9pt;
}
#mainindi nav8 h4 {
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background:red;
  width:50px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 14pt;
}
#mainindi nav8 label2{
  background: white;
  width:10px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align: left;
}
#mainindi nav8 h5 {
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background: yellow;
  width:50px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 14pt;
  }
#mainindi nav8 form button{
	background: url('../assets/ir.png');
  background-size: 100%;
  border: none;
  cursor: pointer;
  padding: 6px 10px;
  color: white;
  align-items: center;
}
#mainindi nav9{
  margin: 0px;
  width: 100%;
  height: 10vh;
  min-height: 50px; 
  text-align: center;
  color: black;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  float: left;
}
#mainindi nav9 label1{
  background: rgb(241, 240, 233);
  width:140px;
  height:50px;
  display:flex;
  align-items:center;
  text-align: justify;
  border-radius: 10%;
  padding-left: 5px;
  padding-right:20px;
  font-size: 9pt;
}
#mainindi nav9 h4 {
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background:yellow;
  width:50px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 14pt;
}
#mainindi nav9 label2{
  background: white;
  width:10px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align: left;
}
#mainindi nav9 h5 {
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background: red;
  width:50px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 14pt;
  }
#mainindi nav9 form button{
	background: url('../assets/ir.png');
  background-size: 100%;
  border: none;
  cursor: pointer;
  padding: 6px 10px;
  color: white;
  align-items: center;
}
#mainindi nav10{
  margin: 0px;
  width: 100%;
  height: 10vh;
  min-height: 50px; 
  text-align: center;
  color: black;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  float: left;
}
#mainindi nav10 label1{
  background: rgb(241, 240, 233);
  width:140px;
  height:50px;
  display:flex;
  align-items:center;
  text-align: justify;
  border-radius: 10%;
  padding-left: 5px;
  padding-right:20px;
  font-size: 9pt;
}
#mainindi nav10 h4 {
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background:yellow;
  width:50px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 14pt;
}
#mainindi nav10 label2{
  background: white;
  width:10px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align: left;
}
#mainindi nav10 h5 {
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background: rgb(60, 255, 0);
  width:50px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 14pt;
  }
#mainindi nav10 form button{
	background: url('../assets/ir.png');
  background-size: 100%;
  border: none;
  cursor: pointer;
  padding: 6px 10px;
  color: white;
  align-items: center;
}
#mainindi nav11{
  margin: 0px;
  width: 100%;
  height: 10vh;
  min-height: 50px; 
  text-align: center;
  color: black;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  float: left;
}
#mainindi nav11 label1{
  background: rgb(241, 240, 233);
  width:140px;
  height:50px;
  display:flex;
  align-items:center;
  text-align: justify;
  border-radius: 10%;
  padding-left: 5px;
  padding-right:20px;
  font-size: 9pt;
}
#mainindi nav11 h4 {
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background:rgb(60, 255, 0);
  width:50px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 14pt;
}
#mainindi nav11 label2{
  background: white;
  width:10px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align: left;
}
#mainindi nav11 h5 {
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background: red;
  width:50px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 14pt;
  }
#mainindi nav11 form button{
	background: url('../assets/ir.png');
  background-size: 100%;
  border: none;
  cursor: pointer;
  padding: 6px 10px;
  color: white;
  align-items: center;
}
#mainindi nav12{
  margin: 0px;
  width: 100%;
  height: 10vh;
  min-height: 50px; 
  text-align: center;
  color: black;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  float: left;
}
#mainindi nav12 label1{
  background: rgb(241, 240, 233);
  width:140px;
  height:50px;
  display:flex;
  align-items:center;
  text-align: justify;
  border-radius: 10%;
  padding-left: 5px;
  padding-right:20px;
  font-size: 9pt;
}
#mainindi nav12 h4 {
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background:rgb(60, 255, 0);
  width:50px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 14pt;
}
#mainindi nav12 label2{
  background: white;
  width:10px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align: left;
}
#mainindi nav12 h5 {
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background: yellow;
  width:50px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 14pt;
  }
#mainindi nav12 form button{
	background: url('../assets/ir.png');
  background-size: 100%;
  border: none;
  cursor: pointer;
  padding: 6px 10px;
  color: white;
  align-items: center;
}
</style>
