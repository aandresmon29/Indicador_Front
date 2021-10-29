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
  <nav7>
    <label1 for="fgerencia"> {{nombreina}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajea}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderadoa}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotoa"><font face="Century Gothic">--</font></button>
    </form>
  </nav7>
  <nav7>
    <label1 for="fgerencia"> {{nombreinb}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajeb}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderadob}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotob"><font face="Century Gothic">--</font></button>
    </form>
  </nav7>
  <nav10>
    <label1 for="fgerencia"> {{nombreinc}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajec}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderadoc}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotoc"><font face="Century Gothic">--</font></button>
    </form>
  </nav10>
  <nav4>
    <label1 for="fgerencia"> {{nombreind}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajed}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderadod}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotod"><font face="Century Gothic">--</font></button>
    </form>
  </nav4>
  <nav4>
    <label1 for="fgerencia"> {{nombreine}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajee}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderadoe}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotoe"><font face="Century Gothic">--</font></button>
    </form>
  </nav4>
  <nav4>
    <label1 for="fgerencia"> {{nombreinf}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajef}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderadof}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotof"><font face="Century Gothic">--</font></button>
    </form>
  </nav4>
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
  <nav11>
    <label1 for="fgerencia"> {{nombreink}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajek}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderadok}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotok"><font face="Century Gothic">--</font></button>
    </form>
  </nav11>
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
  <nav4>
    <label1 for="fgerencia"> {{nombreino}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajeo}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderadoo}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotoo"><font face="Century Gothic">--</font></button>
    </form>
  </nav4>
  <nav4>
    <label1 for="fgerencia"> {{nombreinp}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajep}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderadop}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotop"><font face="Century Gothic">--</font></button>
    </form>
  </nav4>
  <nav4>
    <label1 for="fgerencia"> {{nombreinq}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajeq}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderadoq}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotoq"><font face="Century Gothic">--</font></button>
    </form>
  </nav4>
  <nav12>
    <label1 for="fgerencia"> {{nombreinr}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajer}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderador}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotor"><font face="Century Gothic">--</font></button>
    </form>
  </nav12>
  <nav11>
    <label1 for="fgerencia"> {{nombreins}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajes}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderados}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotos"><font face="Century Gothic">--</font></button>
    </form>
  </nav11>
  <nav11>
    <label1 for="fgerencia"> {{nombreint}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajet}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderadot}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotot"><font face="Century Gothic">--</font></button>
    </form>
  </nav11>
  <nav4>
    <label1 for="fgerencia"> {{nombreinu}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajeu}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderadou}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotou"><font face="Century Gothic">--</font></button>
    </form>
  </nav4>
  <nav4>
    <label1 for="fgerencia"> {{nombreinv}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajev}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderadov}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotov"><font face="Century Gothic">--</font></button>
    </form>
  </nav4>
  <nav4>
    <label1 for="fgerencia"> {{nombreinw}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajew}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderadow}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotow"><font face="Century Gothic">--</font></button>
    </form>
  </nav4>
  <nav4>
    <label1 for="fgerencia"> {{nombreinx}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajex}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderadox}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotox"><font face="Century Gothic">--</font></button>
    </form>
  </nav4>
  <nav4>
    <label1 for="fgerencia"> {{nombreiny}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajey}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderadoy}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotoy"><font face="Century Gothic">--</font></button>
    </form>
  </nav4>
  <nav4>
    <label1 for="fgerencia"> {{nombreinz}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajez}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderadoz}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotoz"><font face="Century Gothic">--</font></button>
    </form>
  </nav4>
  <nav4>
    <label1 for="fgerencia"> {{nombreinaa}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajeaa}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderadoaa}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotoaa"><font face="Century Gothic">--</font></button>
    </form>
  </nav4>
  <nav4>
    <label1 for="fgerencia"> {{nombreinab}}  </label1>
    <label2 for="fgerencia"> </label2>
    <h4>{{porcentajeab}}</h4>
    <label2 for="fgerencia"> </label2>
    <h5>{{ponderadoab}}</h5>
    <label2 for="fgerencia"> </label2>
    <form v-on:submit.prevent="ShowDetail">
    <button v-on:click="gotoab"><font face="Century Gothic">--</font></button>
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
  name: 'indicadoresc',
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
      nombreino: "",
      porcentajeo: 0.0,
      ponderadoo: 0.0,
      nombreinp: "",
      porcentajep: 0.0,
      ponderadop: 0.0,
      nombreinq: "",
      porcentajeq: 0.0,
      ponderadoq: 0.0,
      nombreinr: "",
      porcentajer: 0.0,
      ponderador: 0.0,
      nombreins: "",
      porcentajes: 0.0,
      ponderados: 0.0,
      nombreint: "",
      porcentajet: 0.0,
      ponderadot: 0.0,
      nombreinu: "",
      porcentajeu: 0.0,
      ponderadou: 0.0,
      nombreinv: "",
      porcentajev: 0.0,
      ponderadov: 0.0,
      nombreinw: "",
      porcentajew: 0.0,
      ponderadow: 0.0,
      nombreinx: "",
      porcentajex: 0.0,
      ponderadox: 0.0,
      nombreiny: "",
      porcentajey: 0.0,
      ponderadoy: 0.0,
      nombreinz: "",
      porcentajez: 0.0,
      ponderadoz: 0.0,
      nombreinaa: "",
      porcentajeaa: 0.0,
      ponderadoaa: 0.0,
      nombreinab: "",
      porcentajeab: 0.0,
      ponderadoab: 0.0,
      }
  },
  created: function(){
      this.gerencia = this.$route.params.gerencia
      this.nombreina = this.$route.params.name
      this.porcentajea = this.$route.params.porcentaje
      this.ponderadoa = this.$route.params.ponderado
      let self = this
      axios.get("https://indicadorb.herokuapp.com/Indicadoresc/Indicador1")
      .then((result) => {
      self.gerencia = result.data.gerencia
      self.nombreina = result.data.name
      self.porcentajea = result.data.porcentaje
      self.ponderadoa = result.data.ponderado
      })
      this.nombreinb = this.$route.params.name
      this.porcentajeb = this.$route.params.porcentaje
      this.ponderadob = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadoresc/Indicador2")
      .then((result) => {
      self.nombreinb = result.data.name
      self.porcentajeb = result.data.porcentaje
      self.ponderadob = result.data.ponderado
      })
      this.nombreinc = this.$route.params.name
      this.porcentajec = this.$route.params.porcentaje
      this.ponderadoc = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadoresc/Indicador3")
      .then((result) => {
      self.nombreinc = result.data.name
      self.porcentajec = result.data.porcentaje
      self.ponderadoc = result.data.ponderado
      })
      this.nombreind = this.$route.params.name
      this.porcentajed = this.$route.params.porcentaje
      this.ponderadod = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadoresc/Indicador4")
      .then((result) => {
      self.nombreind = result.data.name
      self.porcentajed = result.data.porcentaje
      self.ponderadod = result.data.ponderado
      })
      this.nombreine = this.$route.params.name
      this.porcentajee = this.$route.params.porcentaje
      this.ponderadoe = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadoresc/Indicador5")
      .then((result) => {
      self.nombreine = result.data.name
      self.porcentajee = result.data.porcentaje
      self.ponderadoe = result.data.ponderado
      })
      this.nombreinf = this.$route.params.name
      this.porcentajef = this.$route.params.porcentaje
      this.ponderadof = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadoresc/Indicador6")
      .then((result) => {
      self.nombreinf = result.data.name
      self.porcentajef = result.data.porcentaje
      self.ponderadof = result.data.ponderado
      })
      this.nombreing = this.$route.params.name
      this.porcentajeg = this.$route.params.porcentaje
      this.ponderadog = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadoresc/Indicador7")
      .then((result) => {
      self.nombreing = result.data.name
      self.porcentajeg = result.data.porcentaje
      self.ponderadog = result.data.ponderado
      })
      this.nombreinh = this.$route.params.name
      this.porcentajeh = this.$route.params.porcentaje
      this.ponderadoh = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadoresc/Indicador8")
      .then((result) => {
      self.nombreinh = result.data.name
      self.porcentajeh = result.data.porcentaje
      self.ponderadoh = result.data.ponderado
      })
      this.nombreini = this.$route.params.name
      this.porcentajei = this.$route.params.porcentaje
      this.ponderadoi = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadoresc/Indicador9")
      .then((result) => {
      self.nombreini = result.data.name
      self.porcentajei = result.data.porcentaje
      self.ponderadoi = result.data.ponderado
      })
      this.nombreinj = this.$route.params.name
      this.porcentajej = this.$route.params.porcentaje
      this.ponderadoj = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadoresc/Indicador10")
      .then((result) => {
      self.nombreinj = result.data.name
      self.porcentajej = result.data.porcentaje
      self.ponderadoj = result.data.ponderado
      })
      this.nombreink = this.$route.params.name
      this.porcentajek = this.$route.params.porcentaje
      this.ponderadok = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadoresc/Indicador11")
      .then((result) => {
      self.nombreink = result.data.name
      self.porcentajek = result.data.porcentaje
      self.ponderadok = result.data.ponderado
      })
      this.nombreinl = this.$route.params.name
      this.porcentajel = this.$route.params.porcentaje
      this.ponderadol = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadoresc/Indicador12")
      .then((result) => {
      self.nombreinl = result.data.name
      self.porcentajel = result.data.porcentaje
      self.ponderadol = result.data.ponderado
      })
      this.nombreinm = this.$route.params.name
      this.porcentajem = this.$route.params.porcentaje
      this.ponderadom = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadoresc/Indicador13")
      .then((result) => {
      self.nombreinm = result.data.name
      self.porcentajem = result.data.porcentaje
      self.ponderadom = result.data.ponderado
      })
      this.nombreinn = this.$route.params.name
      this.porcentajen = this.$route.params.porcentaje
      this.ponderadon = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadoresc/Indicador14")
      .then((result) => {
      self.nombreinn = result.data.name
      self.porcentajen = result.data.porcentaje
      self.ponderadon = result.data.ponderado
      })
      this.nombreino = this.$route.params.name
      this.porcentajeo = this.$route.params.porcentaje
      this.ponderadoo = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadoresc/Indicador15")
      .then((result) => {
      self.nombreino = result.data.name
      self.porcentajeo = result.data.porcentaje
      self.ponderadoo = result.data.ponderado
      })
      this.nombreinp = this.$route.params.name
      this.porcentajep = this.$route.params.porcentaje
      this.ponderadop = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadoresc/Indicador16")
      .then((result) => {
      self.nombreinp = result.data.name
      self.porcentajep = result.data.porcentaje
      self.ponderadop = result.data.ponderado
      })
      this.nombreinq = this.$route.params.name
      this.porcentajeq = this.$route.params.porcentaje
      this.ponderadoq = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadoresc/Indicador17")
      .then((result) => {
      self.nombreinq = result.data.name
      self.porcentajeq = result.data.porcentaje
      self.ponderadoq = result.data.ponderado
      })
      this.nombreinr = this.$route.params.name
      this.porcentajer = this.$route.params.porcentaje
      this.ponderador = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadoresc/Indicador18")
      .then((result) => {
      self.nombreinr = result.data.name
      self.porcentajer = result.data.porcentaje
      self.ponderador = result.data.ponderado
      })
      this.nombreins = this.$route.params.name
      this.porcentajes = this.$route.params.porcentaje
      this.ponderados = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadoresc/Indicador19")
      .then((result) => {
      self.nombreins = result.data.name
      self.porcentajes = result.data.porcentaje
      self.ponderados = result.data.ponderado
      })
      this.nombreint = this.$route.params.name
      this.porcentajet = this.$route.params.porcentaje
      this.ponderadot = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadoresc/Indicador20")
      .then((result) => {
      self.nombreint = result.data.name
      self.porcentajet = result.data.porcentaje
      self.ponderadot = result.data.ponderado
      })
      this.nombreinu = this.$route.params.name
      this.porcentajeu = this.$route.params.porcentaje
      this.ponderadou = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadoresc/Indicador21")
      .then((result) => {
      self.nombreinu = result.data.name
      self.porcentajeu = result.data.porcentaje
      self.ponderadou = result.data.ponderado
      })
      this.nombreinv = this.$route.params.name
      this.porcentajev = this.$route.params.porcentaje
      this.ponderadov = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadoresc/Indicador22")
      .then((result) => {
      self.nombreinv = result.data.name
      self.porcentajev = result.data.porcentaje
      self.ponderadov = result.data.ponderado
      })
      this.nombreinw = this.$route.params.name
      this.porcentajew = this.$route.params.porcentaje
      this.ponderadow = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadoresc/Indicador23")
      .then((result) => {
      self.nombreinw = result.data.name
      self.porcentajew = result.data.porcentaje
      self.ponderadow = result.data.ponderado
      })
      this.nombreinx = this.$route.params.name
      this.porcentajex = this.$route.params.porcentaje
      this.ponderadox = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadoresc/Indicador23")
      .then((result) => {
      self.nombreinx = result.data.name
      self.porcentajex = result.data.porcentaje
      self.ponderadox = result.data.ponderado
      })
      this.nombreiny = this.$route.params.name
      this.porcentajey = this.$route.params.porcentaje
      this.ponderadoy = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadoresc/Indicador25")
      .then((result) => {
      self.nombreiny = result.data.name
      self.porcentajey = result.data.porcentaje
      self.ponderadoy = result.data.ponderado
      })
      this.nombreinz = this.$route.params.name
      this.porcentajez = this.$route.params.porcentaje
      this.ponderadoz = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadoresc/Indicador26")
      .then((result) => {
      self.nombreinz = result.data.name
      self.porcentajez = result.data.porcentaje
      self.ponderadoz = result.data.ponderado
      })
      this.nombreinaa = this.$route.params.name
      this.porcentajeaa = this.$route.params.porcentaje
      this.ponderadoaa = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadoresc/Indicador27")
      .then((result) => {
      self.nombreinaa = result.data.name
      self.porcentajeaa = result.data.porcentaje
      self.ponderadoaa = result.data.ponderado
      })
      this.nombreinab = this.$route.params.name
      this.porcentajeab = this.$route.params.porcentaje
      this.ponderadoab = this.$route.params.ponderado
      axios.get("https://indicadorb.herokuapp.com/Indicadoresc/Indicador28")
      .then((result) => {
      self.nombreinab = result.data.name
      self.porcentajeab = result.data.porcentaje
      self.ponderadoab = result.data.ponderado
      })
  },
  methods: {
    gotoa: function(){
      if(this.$route.name != "detalleca"){
      let username = localStorage.getItem("current_detalleca")
      this.$router.push({name: "detalleca", params:{username:username}})
      }
    },
    gotob: function(){
      if(this.$route.name != "detallecb"){
      let username = localStorage.getItem("current_detallecb")
      this.$router.push({name: "detallecb", params:{username:username}})
      }
    },
    gotoc: function(){
      if(this.$route.name != "detallecc"){
      let username = localStorage.getItem("current_detallecc")
      this.$router.push({name: "detallecc", params:{username:username}})
      }
    },
    gotod: function(){
      if(this.$route.name != "detallecd"){
      let username = localStorage.getItem("current_detallecd")
      this.$router.push({name: "detallecd", params:{username:username}})
      }
    },
    gotoe: function(){
      if(this.$route.name != "detallece"){
      let username = localStorage.getItem("current_detallece")
      this.$router.push({name: "detallece", params:{username:username}})
      }
    },
    gotof: function(){
      if(this.$route.name != "detallecf"){
      let username = localStorage.getItem("current_detallecf")
      this.$router.push({name: "detallecf", params:{username:username}})
      }
    },
    gotog: function(){
      if(this.$route.name != "detallecg"){
      let username = localStorage.getItem("current_detallecg")
      this.$router.push({name: "detallecg", params:{username:username}})
      }
    },
    gotoh: function(){
      if(this.$route.name != "detallech"){
      let username = localStorage.getItem("current_detallech")
      this.$router.push({name: "detallech", params:{username:username}})
      }
    },
    gotoi: function(){
      if(this.$route.name != "detalleci"){
      let username = localStorage.getItem("current_detalleci")
      this.$router.push({name: "detalleci", params:{username:username}})
      }
    },
    gotoj: function(){
      if(this.$route.name != "detallecj"){
      let username = localStorage.getItem("current_detallecj")
      this.$router.push({name: "detallecj", params:{username:username}})
      }
    },
    gotok: function(){
      if(this.$route.name != "detalleck"){
      let username = localStorage.getItem("current_detalleck")
      this.$router.push({name: "detalleck", params:{username:username}})
      }
    },
    gotol: function(){
      if(this.$route.name != "detallecl"){
      let username = localStorage.getItem("current_detallecl")
      this.$router.push({name: "detallecl", params:{username:username}})
      }
    },
    gotom: function(){
      if(this.$route.name != "detallecm"){
      let username = localStorage.getItem("current_detallecm")
      this.$router.push({name: "detallecm", params:{username:username}})
      }
    },
    goton: function(){
      if(this.$route.name != "detallecn"){
      let username = localStorage.getItem("current_detallecn")
      this.$router.push({name: "detallecn", params:{username:username}})
      }
    },
    gotoo: function(){
      if(this.$route.name != "detalleco"){
      let username = localStorage.getItem("current_detalleco")
      this.$router.push({name: "detalleco", params:{username:username}})
      }
    },
    gotop: function(){
      if(this.$route.name != "detallecp"){
      let username = localStorage.getItem("current_detallecp")
      this.$router.push({name: "detallecp", params:{username:username}})
      }
    },
    gotoq: function(){
      if(this.$route.name != "detallecq"){
      let username = localStorage.getItem("current_detallecq")
      this.$router.push({name: "detallecq", params:{username:username}})
      }
    },
    gotor: function(){
      if(this.$route.name != "detallecr"){
      let username = localStorage.getItem("current_detallecr")
      this.$router.push({name: "detallecr", params:{username:username}})
      }
    },
    gotos: function(){
      if(this.$route.name != "detallecs"){
      let username = localStorage.getItem("current_detallecs")
      this.$router.push({name: "detallecs", params:{username:username}})
      }
    },
    gotot: function(){
      if(this.$route.name != "detallecu"){
      let username = localStorage.getItem("current_detallecu")
      this.$router.push({name: "detallecu", params:{username:username}})
      }
    },
    gotou: function(){
      if(this.$route.name != "detallecv"){
      let username = localStorage.getItem("current_detallecv")
      this.$router.push({name: "detallecv", params:{username:username}})
      }
    },
    gotov: function(){
      if(this.$route.name != "detallecw"){
      let username = localStorage.getItem("current_detallecw")
      this.$router.push({name: "detallecw", params:{username:username}})
      }
    },
    gotow: function(){
      if(this.$route.name != "detallecx"){
      let username = localStorage.getItem("current_detallecx")
      this.$router.push({name: "detallecx", params:{username:username}})
      }
    },
    gotox: function(){
      if(this.$route.name != "detallecy"){
      let username = localStorage.getItem("current_detallecy")
      this.$router.push({name: "detallecy", params:{username:username}})
      }
    },
    gotoy: function(){
      if(this.$route.name != "detallecz"){
      let username = localStorage.getItem("current_detallecz")
      this.$router.push({name: "detallecz", params:{username:username}})
      }
    },
    gotoz: function(){
      if(this.$route.name != "detallecaa"){
      let username = localStorage.getItem("current_detallecaa")
      this.$router.push({name: "detallecaa", params:{username:username}})
      }
    },
    gotoaa: function(){
      if(this.$route.name != "detallecab"){
      let username = localStorage.getItem("current_detallecab")
      this.$router.push({name: "detallecab", params:{username:username}})
      }
    },
    gotoab: function(){
      if(this.$route.name != "detallecac"){
      let username = localStorage.getItem("current_detallecac")
      this.$router.push({name: "detallecac", params:{username:username}})
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
