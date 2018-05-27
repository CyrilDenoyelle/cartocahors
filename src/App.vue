<template>
    <div class="container-fluid" >
        <div class="row" style="">
            <!-- <div id="affMenu"> -->
                <Menu/>
            <!-- </div> -->
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
                displayMap: true,
                compteurEnigme: 0,
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
            }
        },
    }
</script>


<style>
    .row {
        height: 100%;
        width:100%;
    }
    /* #affMenu
    {
        position: fixed;
    } */
</style>
