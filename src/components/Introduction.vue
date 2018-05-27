<template>
    <div>
        <div class="row" id="img_row">
            <div class="col">
                <img :src="image">
            </div>
        </div>
        <div class="row" id="txt_row">
            <div class="col">
                <h3>{{textes[numTexte].interlocuteur}}</h3>
                <p>{{textes[numTextetexte].texte}}</p>
                <button v-on:click="verifTransition"></button>
            </div>
        </div>
    </div>
</template>

<script>
import textes from "./assets/textes.json"
export default {
    data(){
        return {
            textes: textes,
            image: null,
        }
    },

    methods: {

    }

}
</script>


<style>
    #img_row
    {
        height: 75vh;
    }
    #txt_row
    {
        height: 25vh;
    }
</style>
