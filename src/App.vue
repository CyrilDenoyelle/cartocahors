<template>
    <div class="container-fluid" >
        <div class="row">

            <!-- <Menu v-on:userChoice="passUserChoice" :list="list"/> -->
            <div v-if="displayEnigme">
                <Enigme v-on:retourMap='hideEnigme' :numEnigme="compteurEnigme"/>
            </div>
            <CityMap
            
            />

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
                displayEnigme: true,
                compteurEnigme: 0,
            }
        },

        methods: {
            hideEnigme(){
                this.displayEnigme = false;
                this.compteurEnigme ++;
            }
        },
    }
</script>


<style>
</style>
