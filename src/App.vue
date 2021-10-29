<template>
  <div id="app">
    <div class="header">
      <h1>Indicadores Corte<br>15/10/2021 al 21/10/2021</h1>
    </div>
    <div class="main-component">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Gerencia from './components/gerencia.vue'
import User from './components/user.vue'
export default {
name: 'header',
  components: {
    Gerencia,
    User
  },
  methods: {
    init: function(){
      if(this.$route.name != "User"){
      let username = localStorage.getItem("current_User")
      this.$router.push({name: "User", params:{username:username}})
      }
    },
    gerencias: function(){
      if(this.$route.name != "gerencia"){
      let username = localStorage.getItem("current_gerencia")
      this.$router.push({name: "gerencia", params:{username:username}})
      }
    }
  }
}
</script>

<style>
body{
  margin: 0 0 0 0;
}
.header{
  height: 10vh;
  min-height: 80px;
  background-color: #2480e2 ;
  color:#f3edec ;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header h1{
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 18pt;
}
.main-component{
  height: 70vh;
  margin: 0%;
  padding: 0%;
  background: #FDFEFE ;
}
.footer{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: #2480e2;
  color: #E5E7E9;
}
.footer h2{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}  
</style>
