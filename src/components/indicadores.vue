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
  <nav7>
    <label1 for="fgerencia"> {{nombreinr}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajer}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderador}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotor"><font face="Century Gothic">--</font></button>
    </form>
  </nav7>
  <nav2>
    <label1 for="fgerencia"> {{nombreinc}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajec}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderadoc}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotoc"><font face="Century Gothic">--</font></button>
    </form>
  </nav2>
  <nav3>
    <label1 for="fgerencia"> {{nombreind}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajed}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderadod}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotod"><font face="Century Gothic">--</font></button>
    </form>
  </nav3>
  <nav3>
    <label1 for="fgerencia"> {{nombreine}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajee}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderadoe}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotoe"><font face="Century Gothic">--</font></button>
    </form>
  </nav3>
  <nav3>
    <label1 for="fgerencia"> {{nombreinf}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajef}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderadof}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotof"><font face="Century Gothic">--</font></button>
    </form>
  </nav3>
  <nav4>
    <label1 for="fgerencia"> {{nombreing}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajeg}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderadog}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotog"><font face="Century Gothic">--</font></button>
    </form>
  </nav4>
  <nav4>
    <label1 for="fgerencia"> {{nombreinh}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajeh}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderadoh}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotoh"><font face="Century Gothic">--</font></button>
    </form>
  </nav4>
  <nav4>
    <label1 for="fgerencia"> {{nombreini}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajei}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderadoi}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotoi"><font face="Century Gothic">--</font></button>
    </form>
  </nav4>
  <nav4>
    <label1 for="fgerencia"> {{nombreinj}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajej}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderadoj}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotoj"><font face="Century Gothic">--</font></button>
    </form>
  </nav4>
  <nav4>
    <label1 for="fgerencia"> {{nombreink}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajek}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderadok}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotok"><font face="Century Gothic">--</font></button>
    </form>
  </nav4>
  <nav4>
    <label1 for="fgerencia"> {{nombreinl}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajel}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderadol}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotol"><font face="Century Gothic">--</font></button>
    </form>
  </nav4>
  <nav4>
    <label1 for="fgerencia"> {{nombreinm}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajem}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderadom}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotom"><font face="Century Gothic">--</font></button>
    </form>
  </nav4>
  <nav4>
    <label1 for="fgerencia"> {{nombreinn}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajen}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderadon}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="goton"><font face="Century Gothic">--</font></button>
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
      ponderadog: 0.0,
      nombreinh: "",
      porcentajeh: 0.0,
      ponderadoh: 0.0,
      nombreini: "",
      porcentajei: 0.0,
      ponderadoi: 0.0,
      nombreinj: "",
      porcentajej: 0.0,
      ponderadoj: 0.0,
      nombreink: "",
      porcentajek: 0.0,
      ponderadok: 0.0,
      nombreinl: "",
      porcentajel: 0.0,
      ponderadol: 0.0,
      nombreinm: "",
      porcentajem: 0.0,
      ponderadom: 0.0,
      nombreinn: "",
      porcentajen: 0.0,
      ponderadon: 0.0,
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
      this.nombreind = this.$route.params.name
      this.porcentajed = this.$route.params.porcentaje
      this.ponderadod = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadores/Indicador4")
      .then((result) => {
      self.nombreind = result.data.name
      self.porcentajed = result.data.porcentaje
      self.ponderadod = result.data.ponderado
      })
      this.nombreine = this.$route.params.name
      this.porcentajee = this.$route.params.porcentaje
      this.ponderadoe = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadores/Indicador5")
      .then((result) => {
      self.nombreine = result.data.name
      self.porcentajee = result.data.porcentaje
      self.ponderadoe = result.data.ponderado
      })
      this.nombreinf = this.$route.params.name
      this.porcentajef = this.$route.params.porcentaje
      this.ponderadof = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadores/Indicador6")
      .then((result) => {
      self.nombreinf = result.data.name
      self.porcentajef = result.data.porcentaje
      self.ponderadof = result.data.ponderado
      })
      this.nombreing = this.$route.params.name
      this.porcentajeg = this.$route.params.porcentaje
      this.ponderadog = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadores/Indicador7")
      .then((result) => {
      self.nombreing = result.data.name
      self.porcentajeg = result.data.porcentaje
      self.ponderadog = result.data.ponderado
      })
      this.nombreinh = this.$route.params.name
      this.porcentajeh = this.$route.params.porcentaje
      this.ponderadoh = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadores/Indicador8")
      .then((result) => {
      self.nombreinh = result.data.name
      self.porcentajeh = result.data.porcentaje
      self.ponderadoh = result.data.ponderado
      })
      this.nombreini = this.$route.params.name
      this.porcentajei = this.$route.params.porcentaje
      this.ponderadoi = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadores/Indicador9")
      .then((result) => {
      self.nombreini = result.data.name
      self.porcentajei = result.data.porcentaje
      self.ponderadoi = result.data.ponderado
      })
      this.nombreinj = this.$route.params.name
      this.porcentajej = this.$route.params.porcentaje
      this.ponderadoj = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadores/Indicador10")
      .then((result) => {
      self.nombreinj = result.data.name
      self.porcentajej = result.data.porcentaje
      self.ponderadoj = result.data.ponderado
      })
      this.nombreink = this.$route.params.name
      this.porcentajek = this.$route.params.porcentaje
      this.ponderadok = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadores/Indicador11")
      .then((result) => {
      self.nombreink = result.data.name
      self.porcentajek = result.data.porcentaje
      self.ponderadok = result.data.ponderado
      })
      this.nombreinl = this.$route.params.name
      this.porcentajel = this.$route.params.porcentaje
      this.ponderadol = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadores/Indicador12")
      .then((result) => {
      self.nombreinl = result.data.name
      self.porcentajel = result.data.porcentaje
      self.ponderadol = result.data.ponderado
      })
      this.nombreinm = this.$route.params.name
      this.porcentajem = this.$route.params.porcentaje
      this.ponderadom = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadores/Indicador13")
      .then((result) => {
      self.nombreinm = result.data.name
      self.porcentajem = result.data.porcentaje
      self.ponderadom = result.data.ponderado
      })
      this.nombreinn = this.$route.params.name
      this.porcentajen = this.$route.params.porcentaje
      this.ponderadon = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadores/Indicador14")
      .then((result) => {
      self.nombreinn = result.data.name
      self.porcentajen = result.data.porcentaje
      self.ponderadon = result.data.ponderado
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
    gotod: function(){
      if(this.$route.name != "detalled"){
      let username = localStorage.getItem("current_detalled")
      this.$router.push({name: "detalled", params:{username:username}})
      }
    },
    gotoe: function(){
      if(this.$route.name != "detallee"){
      let username = localStorage.getItem("current_detallee")
      this.$router.push({name: "detallee", params:{username:username}})
      }
    },
    gotof: function(){
      if(this.$route.name != "detallef"){
      let username = localStorage.getItem("current_detallef")
      this.$router.push({name: "detallef", params:{username:username}})
      }
    },
    gotog: function(){
      if(this.$route.name != "detalleg"){
      let username = localStorage.getItem("current_detalleg")
      this.$router.push({name: "detalleg", params:{username:username}})
      }
    },
    gotoh: function(){
      if(this.$route.name != "detalleh"){
      let username = localStorage.getItem("current_detalleh")
      this.$router.push({name: "detalleh", params:{username:username}})
      }
    },
    gotoi: function(){
      if(this.$route.name != "detallei"){
      let username = localStorage.getItem("current_detallei")
      this.$router.push({name: "detallei", params:{username:username}})
      }
    },
    gotoj: function(){
      if(this.$route.name != "detallej"){
      let username = localStorage.getItem("current_detallej")
      this.$router.push({name: "detallej", params:{username:username}})
      }
    },
    gotok: function(){
      if(this.$route.name != "detallek"){
      let username = localStorage.getItem("current_detallek")
      this.$router.push({name: "detallek", params:{username:username}})
      }
    },
    gotol: function(){
      if(this.$route.name != "detallel"){
      let username = localStorage.getItem("current_detallel")
      this.$router.push({name: "detallel", params:{username:username}})
      }
    },
    gotom: function(){
      if(this.$route.name != "detallem"){
      let username = localStorage.getItem("current_detallem")
      this.$router.push({name: "detallem", params:{username:username}})
      }
    },
    goton: function(){
      if(this.$route.name != "detallen"){
      let username = localStorage.getItem("current_detallen")
      this.$router.push({name: "detallen", params:{username:username}})
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
</style>