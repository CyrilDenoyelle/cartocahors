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
                latitude: null,
                longitude: null,
                marker:null,
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
                        maxZoom: 20,
                        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
                    }
                )
                this.tileLayer.addTo(this.map);

                setInterval(()=>{
                    navigator.geolocation.getCurrentPosition(pos=>{
                        this.latitude = pos.coords.latitude;
                        this.longitude = pos.coords.longitude;
                        // console.log(this.positionGps)
                    })
                },1000)

                // navigator.geolocation.watchPosition(
                //     e=>{
                //         console.log(e);
                //     },
                //     err=>{
                //         console.log(err);
                //     }
                // )
            },
            moveMarker(){

                console.log(this.latitude, this.longitude);
                if(this.marker){
                    this.map.removeLayer(this.marker);
                }
                let customIcon = L.icon({
                                    iconUrl : svgIcons["bus.svg"],
                                    iconSize: [30, 30],
                                })
                this.marker = L.marker([this.latitude, this.longitude], {icon: customIcon})
                                // .bindPopup(infosList[index][2])
                                .addTo(this.map)

                console.log(this.measure(this.latitude, this.longitude, 43.109308899999995, 0.7266718));

                // for (let index in infosList) {
                //     let longitude = infosList[index][0]
                //     let latitude = infosList[index][1]

                //     this.markerList.push(marker)
                // }
            },
            measure(lat1, long1, lat2, long2, rad){
                var R = 6378.137; // Radius of earth in KM
                var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
                var dLong = long2 * Math.PI / 180 - long1 * Math.PI / 180;
                var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                Math.sin(dLong/2) * Math.sin(dLong/2);
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
                var d = R * c;
                return (d * 1000)<rad; // meters
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
            }
            // --------------------GPS END---------------------
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

>>>>>>> 33d178d21900ffc72b79bc9d83a5bfac747284e8
        }
    }
</script>


<style scoped>
    .map {
        height: 100vh;
        width: 100vw;
    }
</style>



