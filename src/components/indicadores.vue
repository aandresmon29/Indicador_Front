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
  <nav2>
    <label1 for="fgerencia"> {{nombrein}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentaje}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderado}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="goto"><font face="Century Gothic">--</font></button>
    </form>
  </nav2>
  <nav3>
    <label1 for="fgerencia"> {{nombreinr}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajer}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderador}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotor"><font face="Century Gothic">--</font></button>
    </form>
  </nav3>
  <nav4>
    <label1 for="fgerencia"> {{nombreinc}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajec}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderadoc}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotoc"><font face="Century Gothic">--</font></button>
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
  name: 'indicadores',
  data: function (){
      return {
      gerencia: "",
      nombrein: "",
      porcentaje: 0.0,
      ponderado: 0.0,
      nombreinr: "",
      porcentajer: 0.0,
      ponderador: 0.0,
      nombreinc: "",
      porcentajec: 0.0,
      ponderadoc: 0.0,
      }
  },
  created: function(){
      this.gerencia = this.$route.params.gerencia
      this.nombrein = this.$route.params.name
      this.porcentaje = this.$route.params.porcentaje
      this.ponderado = this.$route.params.ponderado
      let self = this
      axios.get("https://indicadorb.herokuapp.com/Indicadores/Indicador1")
      .then((result) => {
      self.gerencia = result.data.gerencia
      self.nombrein = result.data.name
      self.porcentaje = result.data.porcentaje
      self.ponderado = result.data.ponderado
      })
      this.nombreinr = this.$route.params.name
      this.porcentajer = this.$route.params.porcentaje
      this.ponderador = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadores/Indicador2")
      .then((result) => {
      self.nombreinr = result.data.name
      self.porcentajer = result.data.porcentaje
      self.ponderador = result.data.ponderado
      })
      this.nombreinc = this.$route.params.name
      this.porcentajec = this.$route.params.porcentaje
      this.ponderadoc = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadores/Indicador3")
      .then((result) => {
      self.nombreinc = result.data.name
      self.porcentajec = result.data.porcentaje
      self.ponderadoc = result.data.ponderado
      })
  },
  methods: {
    goto: function(){
      if(this.$route.name != "detallea"){
      let username = localStorage.getItem("current_detallea")
      this.$router.push({name: "detallea", params:{username:username}})
      }
    },
    gotor: function(){
      if(this.$route.name != "detalleb"){
      let username = localStorage.getItem("current_detalleb")
      this.$router.push({name: "detalleb", params:{username:username}})
      }
    },
    gotoc: function(){
      if(this.$route.name != "detallec"){
      let username = localStorage.getItem("current_detallec")
      this.$router.push({name: "detallec", params:{username:username}})
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
  width:120px;
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
  background:rgb(60, 255, 0);
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
  background:rgb(60, 255, 0);
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
  min-height: 80px; 
  text-align: center;
  color: black;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  float: left;
}
#mainindi nav3 label1{
  background: rgb(241, 240, 233);
  width:120px;
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
  background:rgb(60, 255, 0);
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
  background: rgb(60, 255, 0);
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
  width:120px;
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
  width:120px;
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
</style>