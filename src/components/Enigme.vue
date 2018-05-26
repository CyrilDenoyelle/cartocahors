<template>
    <div class="col-md-6">
        <div id="categorie">{{enigmes[0].enonce}}</div>
        <div v-if="displayMsg === false">
            <div v-for="reponse in enigmes[numEnigme].reponses" :key="reponse.name">
                <input type="radio" :value="reponse" v-model="picked">{{ reponse }}
            </div>
            <button v-on:click="submitAnswer">Valider</button>
        </div>
        <div v-else>
            <p>{{msg}}</p>
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
                msg: "",
            }
        },

        props: ['numEnigme'],

        methods: {
            submitAnswer() {
                console.log(this.picked);
                this.displayMsg = true;
                if(this.picked === enigmes[this.numEnigme].bonneReponse){
                    this.msg = "Vous avez résolu l'énigme ! Félicitations !"
                } else {
                    this.msg = "Perdu ! Essaye encore"
                }
            },
            messageLu() {
                if(this.msg === "Vous avez résolu l'énigme ! Félicitations !"){
                    this.$emit("retourMap");
                }
                else{
                    this.displayMsg = false;
                }
            }
        },

    }
</script>



<style>

</style>

