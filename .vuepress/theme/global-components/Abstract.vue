<template>
    <span class="absolute z-0 center-point" :style="style" v-show="shouldDisplay">
        <SvgObject height="10px" width="10px" class="w-full fill-current text-teal-darker" />
    </span>
</template>

<script>
import ScrollingMixin from '../mixins/scrolling'

export default {

    components: {
        SvgObject: require('../svg/abstract.svg').default,
    },

    mixins: [
        ScrollingMixin,
    ],

}
</script>

<style>

</style>
