<template>
    <ul class="list-reset flex flex-col w-full mt-20">
        <li v-for="{path, title, frontmatter} in navItems" class="flex-1 mb-20">
            <router-link
                :to="path"
                class="flex no-underline wonky-hover"
            >
                <div class="w-1/2" v-if="frontmatter.thumbnail">
                    <img :src="frontmatter.thumbnail" :alt="title" class="border-4 border-orange -ml-32 wonky shadow-md w-full">
                </div>
                <div class="flex items-center" :class="{ 'w-1/2': frontmatter.thumbnail }">
                    <div class="text-left">
                        <h3 class="text-orange uppercase text-shadow-lg mb-4">{{ title }}</h3>
                        <p class="font-serif text-orange-lighter text-lg mb-4 text-shadow" v-if="frontmatter.description">{{ frontmatter.description }}</p>
                        <p class="font-sans text-lg font-bold text-teal uppercase text-shadow hover:text-teal-light">Read more ...</p>
                    </div>
                </div>
            </router-link>
        </li>
    </ul>
</template>

<script>

export default {

    props: {

        path: {
            type: String,
            required: false,
            default: null,
        },

    },

    computed: {

        navItems() {
            if (this.filterPath === '/') return null

            return this.$site.pages
                .filter(({ path }) => path !== this.filterPath)
                .filter(({ path }) => path.match(new RegExp(`^${this.filterPath}?.*`)))
                .sort((a, b) => a.path < b.path ? 1 : -1)
        },

        filterPath() {
            return this.path || this.$page.path
        }

    },

}

</script>

<style>
    .router-link {
        @apply font-sans text-3xl uppercase no-underline text-teal font-bold text-shadow
    }

    .router-link-exact-active {
        @apply border-b-8 border-orange pb-4;
    }

    .wonky {
        transition: all .1s linear;
        transform: rotate(-2.8deg);
    }

    .wonky-hover:hover div img, .wonky-hover:hover a {
        transition: all .1s linear;
        transform: rotate(1.6deg);
    }
</style>
