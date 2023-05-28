<template>
    <div class="NAV_BOX flex flex-row">
        <div class="flex flex-grow justify-center">
            Item 1
        </div>
        <div class="flex flex-grow justify-center">
            Item 2
        </div>
    </div>
</template>

<script>
export default {
    name: 'nav-header',

    setup() {

    }
}
</script>

<style lang="scss">
.NAV_BOX {
    background-color: $primary;
}
</style>