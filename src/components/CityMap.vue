<template>
    <div  class="mapContainer">
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
                latitude: null,
                longitude: null,
                marker:null,
            }
        },

        mounted() {
            this.initMap();
            this.initMarkers();
        },

        methods: {
            initMarkers() {
                for (let place of this.places) {
                    let longitude = place.lat;
                    let latitude = place.lon;

                    let marker = L.marker([longitude, latitude])
                                    // .bindPopup(place)
                                    .addTo(this.map)
                                    .on('click', this.arrivedInEnigmeZone);

                }

            

            },
            arrivedInEnigmeZone(){
                this.$emit('arrivedInEnigmeZone')

            },
            initMap() {
                this.map = L.map('map').setView([43.107863, 0.723799], 16);
                this.tileLayer = L.tileLayer(
                    'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
                    {
                        maxZoom: 20,
                        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
                    }
                )
                this.tileLayer.addTo(this.map);

                setInterval(()=>{
                    navigator.geolocation.getCurrentPosition(pos=>{
                        this.latitude = pos.coords.latitude;
                        this.longitude = pos.coords.longitude;
                    })
                },1000)

            },
            moveMarker(){

                // console.log(this.latitude, this.longitude);
                if(this.marker){
                    this.map.removeLayer(this.marker);
                }
                let customIcon = L.icon({
                                    iconUrl : svgIcons["maternelle.svg"],
                                    iconSize: [35, 35],
                                })
                this.marker = L.marker([this.latitude, this.longitude], {icon: customIcon})
                                // .bindPopup(infosList[index][2])
                                .addTo(this.map);



                // console.log(this.places[1])
                // console.log(this.measure(this.latitude, this.longitude, this.places[1].lat, this.places[1].lon));

                if(this.measure(this.latitude, this.longitude, 43.109308899999995, 0.7266718)<10){

                    // this.$emit('arrivedInEnigmeZone');
                }

                // for (let index in infosList) {
                //     let longitude = infosList[index][0]
                //     let latitude = infosList[index][1]

                //     this.markerList.push(marker)
                // }
            },
            measure(lat1, long1, lat2, long2){
                let R = 6378.137; // Radius of earth in KM
                let dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
                let dLong = long2 * Math.PI / 180 - long1 * Math.PI / 180;
                let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                Math.sin(dLong/2) * Math.sin(dLong/2);
                let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
                let d = R * c;
                return (d * 1000); // meters
            }
        },

        watch: {
            // --------------------GPS START---------------------
            latitude: {
                handler() {
                    // console.log(this.latitude);
                    this.moveMarker();
                }
            },
            longitude: {
                handler(){
                    // console.log(this.longitude);
                    this.moveMarker();
                }
            },
            // --------------------GPS END---------------------
        },
    }
</script>


<style scoped>
    .map {
        padding-left:0px;
        height: 100vh;
        width: 100vw;
    }

    .mapContainer{
        height: 100vh;
        width: 100vw;
    
    }

</style>



