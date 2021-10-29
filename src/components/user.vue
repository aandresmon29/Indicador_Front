<template>
    <div id="UserInfo">
        <h2>Usted Ha Ingresado con el usuario <span> {{usuario}}, </span> <br> <br> ¡Bienvenido! </h2>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'User',
    data: function (){
        return {
        usuario: ""
        }
    },
    created: function(){
        this.usuario = this.$route.params.username
        let self = this
        axios.get("https://indicadorb.herokuapp.com/user/info/Consulta")
        .then((result) => {
        self.usuario = result.data.username
        })
        .catch((error) => {
        alert("Usuario no Autorizado");
        });
    },
}
</script>

<style>
    #UserInfo{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #UserInfo h2{
        font-size: 50px;
        color: #283747;
        text-align: center;
        }
    #UserInfo span{
        color: red;
        font-weight: bold;
    }
</style>