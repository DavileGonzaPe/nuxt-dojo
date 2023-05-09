<template>
    <div>
        <p>Product details for {{ id }}</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem incidunt iste eius, nostrum esse dolorum aut
            maiores repellat quod dolore!</p>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })
    
    const { id } = useRoute().params
</script>

<style scoped>

</style>