export default {
    data() {
        return {
            pageWidth: 0,
            pageHeight: 0,
            initialHeight: 0,
        }
    },

    props: {

        minHeight: {
            type: Number,
            required: false,
            default: 1500,
        },

        x: {
            type: Number,
            required: false,
            default: 0.5,
        },

        y: {
            type: Number,
            required: false,
            default: 0.5,
        },

        speed: {
            type: Number,
            required: false,
            default: 1,
        },

        scale: {
            type: Number,
            required: false,
            default: 1,
        },

        scroll: {
            type: Number,
            required: true,
        },

    },

    computed: {

        style() {
            return {
                top: `${this.top}px`,
                left: `${this.left}px`,
                width: `${this.size}px`,
            }
        },

        position() {
            const objextY = Math.floor(this.y * this.pageHeight),
                objextX = Math.floor(this.x * this.pageWidth)

            return [objextX, objextY];
        },

        size() {
            return this.scale * this.pageWidth
        },

        top() {
            const newTop = this.position[1] + this.scroll * this.speed

            return newTop < this.pageHeight ? newTop : this.pageHeight
        },

        left() {
            return this.position[0]
        },

        shouldDisplay() {
            return this.minHeight < this.pageHeight
        },

    },

    methods: {
        getPageHeight() {
            const body = document.body,
                html = document.documentElement;

            const height = Math.max( body.scrollHeight, body.offsetHeight, 
                html.clientHeight, html.scrollHeight, html.offsetHeight );

            return height;
        },

        getPageWidth() {
            const body = document.body,
                html = document.documentElement;

            const width = Math.max( body.scrollWidth, body.offsetWidth, 
                html.clientWidth, html.scrollWidth, html.offsetWidth );

            return width;
        },

        setPageDimensions() {
            this.pageHeight = this.getPageHeight()
            this.pageWidth = this.getPageWidth()
        },

    },

    watch: {
        '$route' () {
            this.setPageDimensions()
        }
    },

    mounted() {
        this.initialHeight = this.getPageHeight()
        this.setPageDimensions()
    },

    updated() {
        this.setPageDimensions()
    },

}
