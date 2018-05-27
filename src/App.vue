<template>
    <div class="container-fluid" >
        <div class="row" style="">
            <div v-if="displayNarrateur">
                <img src="https://gfx.gexe.pl/2015/3/24/204612.1427226372m.jpg" alt="Vieux qui parle"/>
                <p>Approche, mon enfant. Que dirais-tu de rendre service au vieil homme que je suis ? Je dois récupérer des parchemins importants, mais j'ai oublié où ils étaient, si tu les retrouves tu seras récompensé ! Il me semble avoir laissé le premier par ici !</p>
                <button v-on:click="hideNarrateurShowMap">OK</button>
            </div>

            <!-- <Menu v-on:userChoice="passUserChoice" :list="list"/> -->
            <div v-if="displayEnigme">
                <Enigme v-on:retourMap='hideEnigmeShowMap' :numEnigme="compteurEnigme"/>
            </div>
            <div v-if="displayMap">
                <CityMap v-on:arrivedInEnigmeZone='hideMapShowEnigme'/>
            </div>

        </div>
    </div>
</template>


<script>
    import Menu from './components/Menu'
    import CityMap from './components/CityMap'
    import Enigme from './components/Enigme'

    export default {
        name: 'App',
        components: {
            Menu,
            CityMap,
            Enigme
        },

        data() {
            return {
                displayEnigme: false,
                displayMap: false,
                compteurEnigme: 0,
                displayNarrateur: true,
            }
        },


        methods: {
            hideEnigmeShowMap(){
                // hide enigme
                this.displayEnigme = false;
                this.compteurEnigme ++;
                // show map
                this.displayMap = true;
            },

            hideMapShowEnigme(){
                // show map
                this.displayEnigme = true;
                // hide enigme
                this.displayMap = false;
            },
            hideNarrateurShowMap() {
                // show map
                this.displayMap = true;
                // hide narrateur
                this.displayNarrateur = false;

            }
        },
    }
</script>


<style>
    .row {
        height: 100%;
        width:100%;
    }
</style>
