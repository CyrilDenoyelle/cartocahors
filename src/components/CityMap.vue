<template>
    <div class="col-md-9">
        <div id="map" class="map"></div>
    </div>
</template>


<script>
    import list from '../assets/stgauplaces.json'
    import svgIcons from '../assets/icons.json'

    export default {
        data () {
            return {
                places : list,
                map: null,
                tileLayer: null,
                markerList: [],
            }
        },

        mounted() {
            this.initMap();
            console.log(this.places);
            this.initMarkers()
            
        },

        methods: {
            initMap() {
                this.map = L.map('map').setView([43.107863, 0.723799], 16);
                this.tileLayer = L.tileLayer(
                    'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
                    {
                        maxZoom: 18,
                        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
                    }
                )
                this.tileLayer.addTo(this.map);
            },
            initMarkers() {
                        for (let place of this.places) {
                            let longitude = place.lat
                            let latitude = place.lon

                            let marker = L.marker([longitude, latitude])
                                            .bindPopup(place.name)
                                            .addTo(this.map)

                            this.markerList.push(marker)
                        }
            }
        },

        watch: {

        }
    }
</script>


<style scoped>
    .map {
        height: 100vh;
        width: 100vw;
    }
</style>



