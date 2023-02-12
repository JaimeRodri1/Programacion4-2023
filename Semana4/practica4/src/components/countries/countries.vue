<template>
    
</template>

<script>
import requests from './requests';

    export default({
        data(){
            return {
                data: [],
            }
        },
        methods: {
            async getAllcountries(){
                const response = await fetch(requests.getAllcountries);
                this.data = await response.json();

            },
            async getbyRegion(){
                const response = await fetch (requests.getbyRegion('africa'));
                this.data = await response.json();
            }
        },
        created(){
            this.getAllcountries();
        }
    });
</script>