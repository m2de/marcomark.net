<template>
    <vue-instagram token="4094205232.1677ed0.c0e4c2dd41a04530912c55d865376974" :count="9" mediaType="image"  class="flex flex-wrap mx-4 md:-mx-16">
        <template slot="feeds" slot-scope="{ feed }">
            <div class="w-full md:w-1/2 p-8 flex wonky-hover">
                <a :href="feed.link" class="p-2 bg-orange-lighter shadow-lg rounded-sm h-auto w-full text-teal-darker no-underline text-sm text-left leading-normal font-serif" :class="randomClass()">
                    <img :src="feed.images.low_resolution.url" alt="" class="w-full">
                    <p class="p-4">{{ feed.caption.text }}</p>
                </a>
            </div>
        </template>
        <!-- <template slot="error" slot-scope="props">
            <div class="fancy-alert"> {{ props.error.error_message }} </div>
        </template> -->
    </vue-instagram>
</template>

<script>
export default {

    methods: {
        randomClass() {
            const rotation = Math.floor((Math.random() * 4) + 1)
            return `rotation-${rotation}`
        }
    }

}
</script>
