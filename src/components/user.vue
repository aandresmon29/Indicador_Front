<template>
    <div id="User">
        <h2>Usted Ha Ingresado con el usuario <span> {{username}}, </span> <br> <br> ¡Bienvenido! </h2>
    </div>
</template>

<script>
    export default {
        name: "User",
        data:function(){
            return {
                username: "none"
            }
        },
        created: function(){
            this.username = this.$route.params.username
        }
    }
</script>

<style>
    #User{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #User h2{
        font-size: 50px;
        color: #283747;
        text-align: center;
        }
    #User span{
        color: crimson;
        font-weight: bold;
    }
</style>