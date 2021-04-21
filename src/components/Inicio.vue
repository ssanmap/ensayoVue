<template>
    <div>
        <h1>hello soy el inicio {{nombre}}</h1>
    </div>
</template>

<script>

import {mapState} from 'vuex'
    export default {
        
        computed: mapState({
            nombre: function (state){
                return state.nombre
            }
        }),
    }
</script>


<style scoped>

</style>