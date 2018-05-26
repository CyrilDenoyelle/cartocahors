<template>
    <div class="container-fluid" >
        <div class="row">

            <!-- <Menu v-on:userChoice="passUserChoice" :list="list"/> -->
            <CityMap/>

        </div>
    </div>
</template>


<script>
    import Menu from './components/Menu'
    import CityMap from './components/CityMap'
    import json from './assets/places.json'
    

    export default {
        name: 'App',
        components: {
            Menu,
            CityMap
        },

        data() {
            return {
                selectedPlaces: {},
                list: json
            }
        },

        methods: {
            passUserChoice(places) {
                this.selectedPlaces = places
            }
        },
    }
</script>


<style>
</style>
