<template>
    <div class="enigme" width="100%" heigth="100%">
        <div id="categorie">{{enigmes[numEnigme].enonce}}</div>
        <div v-if="displayMsg == false">
            <div v-for="reponse in enigmes[numEnigme].reponses" :key="reponse.name">
                <input type="radio" :value="reponse" v-model="picked">{{ reponse }}
            </div>
            <button v-on:click="submitAnswer">Valider</button>
        </div>
        <div v-else>
            <p>{{msg.text}}</p>
            <!-- changer le nom -->
            <button v-on:click="messageLu">OK</button>
        </div>
    </div>
</template>

<script>
//Penser a l'underscore dans enigmes.json
    import enigmes from "../assets/enigmes.json"
    export default {
        data() {
            return {
                enigmes: enigmes,
                picked:'',
                displayMsg: false,
                msg: {
                   result: null,
                   text:null,
                },
            }
        },

        props: ['numEnigme'],

        methods: {
            submitAnswer() {
                this.displayMsg = true;
                if(this.picked === enigmes[this.numEnigme].bonneReponse){
                    this.msg.text = "Vous avez résolu l'énigme ! Félicitations !";
                    this.msg.result = 'OK';
                    
                } else {
                    this.msg.text = "Perdu ! Essaye encore";
                }
            },
            messageLu() {
                this.displayMsg = false;
                if(this.msg.result == "OK"){
                    this.msg.text = "";
                    this.$emit("retourMap");
                }
            }
        },

    }
</script>

<style>
    .enigme {
        width:100%;
        heigth:100%;
    }
</style>

