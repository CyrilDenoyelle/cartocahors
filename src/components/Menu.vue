<template>
    <div>
        <div class="row" id="menu">
            <div class="col-4">
                <div id="cadreImgProfil">
                    <img src="../assets/icons/kawaii.png" id="imgProfil">
                </div>
                <h6 class="ml-4">Charlotte</h6>
            </div>
            <div class="col-4 mt-5">
                <h6 class="ml-4">Palier 2</h6>
                <!-- Exemple trouvé sur https://www.w3schools.com/Bootstrap/bootstrap_progressbars.asp
                A adapter pour remplir la barre -->
                <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                        <span class="sr-only">70% Complete</span>
                    </div>
                </div>
            </div>
            <div class="col-4 mt-2">
                <button type="button" class="btn menubtn">Inventaire</button>
                <button type="button" class="btn menubtn">Profil</button>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        components : {

        },
       
        methods: {
    
        },
    }
</script>


<style>
    #menu
    {
        height: 18vh;
        width: 105vw;
        /* position: absolute; */
        /* top: 0; */
        /* left: 0; */
        background-color: #237ab0;
        color: white;
    }
    #cadreImgProfil
    {
        background-color: #fff;
        border-radius: 50%;
        margin-left: 2vw;
        height: 13vh;
        margin-top: 2vh;
    }
    #imgProfil
    {
        height: 11vh;
        margin-top:1vh;
    }
    .menubtn
    {
        width: 25vw;
        margin-top: 2vh;
        margin-left: 3vw;
    }
</style>