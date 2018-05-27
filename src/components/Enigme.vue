<template>
    <div class="enigme">
        <div id="categorie">{{enigmes[numEnigme].enonce}}</div>
        <div v-if="displayMsg == false">
            <div v-for="reponse in enigmes[numEnigme].reponses" :key="reponse.name">
                <input type="radio" :value="reponse" v-model="picked">  {{ reponse }}
            </div>
            <button v-on:click="submitAnswer">Valider</button>
        </div>
        <div v-else>
            <img src="https://gfx.gexe.pl/2015/3/24/204612.1427226372m.jpg" alt="Vieux qui parle"/>
            <p>{{msg.text}}</p>
            <button v-if="displayOKbutton" v-on:click="messageLu">OK</button>
        </div>
    </div>
</template>

<script>
//Penser a l'underscore dans enigmes.json
    import enigmes from "../assets/enigmes.json"
    import dialogues from "../assets/textes.json"

    export default {
        data() {
            return {
                enigmes: enigmes,
                dialogues: dialogues,
                picked:'',
                screenView: 0,
                displayOKbutton: false,
                msg: {
                   result: null,
                   text:null,
                },
            }
        },

        props: ['numEnigme'],

        methods: {
            submitAnswer() {
                this.screenView = 1;
                if(this.picked === enigmes[this.numEnigme].bonneReponse){
                    this.msg.text = "Tu as résolu l'énigme ! Félicitations !";
      
                    let delay = setTimeout(function() {
                        this.msg.text = this.dialogues[this.numEnigme + 1].texte;
                        this.displayOKbutton = true
                        }.bind(this), 3000)
                        
                    this.msg.result = 'OK';
                } else {
                    this.msg.text = "Perdu ! Essaye encore";
                }
            },
            messageLu() {
                
                if(this.msg.result == "OK"){
                    this.msg.text = "";
                    this.displayOKbutton = false
                    this.$emit("retourMap");
                }
                else {
                    this.screenView = 0;
                }
            }
        },

    }
</script>

<style>
    .enigme {
        width:100%;
        height:100%;
    }
</style>

