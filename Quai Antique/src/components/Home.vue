<template>
    <div class="accueil">
        <h1>Le Quai Antique</h1>
    </div>
</template>


<script setup></script>

<style>
    .accueil{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        width: 100%;
        height: 100vh;
        background-image: url(../assets/img/assiette.jpg);
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: bottom;
    }

    h1{
        color: white;
    }

    .slide-enter-from, .slide-leave-to{
        opacity: 0;
    }
    slide-enter-active, .slide-leave-active{
        transition: all 1s ease-in;
    }
</style>