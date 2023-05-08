<template>
    <div class="container">
        <div class="border-form">
            <h1>Connexion</h1>
            <label for="email">Email:</label>
            <input type="email" id="email">
            <label for="password">Mot de passe:</label>
            <input type="password" id="password">
            <button type="button">Se connecter</button>
            <span>
                <button type="button">S'inscrire</button>
            </span>
        </div>
    </div>
</template>
<script setup>

</script>

<style scoped>
    .container{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h1{
        color: black;
    }

    .border-form{
        display: flex;
        flex-direction: column;
        justify-content:center ;
        align-items: center;
        border: 1px solid black;
        height: auto;
        padding: 25px;
    }
    button{
        margin-top: 10px;
    }

    .slide-enter-from, .slide-leave-to{
        opacity: 0;
    }
    slide-enter-active, .slide-leave-active{
        transition: opacity 1s ease-in;
    }


   
</style>