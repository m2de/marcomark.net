export default {
    computed: {
        randomPosition() {
            const randomY = Math.floor(Math.random() * (this.pageHeight * 1.4)),
                randomX = Math.floor(Math.random() * this.pageWidth) - this.pageWidth * 0.3;
            return [randomX, randomY];
        },

        randomSize() {
            return Math.floor(Math.random() * 1400) + 800
        },

        speed() {
            return -1 + Math.random()
        },
        
        top() {
            return this.randomPosition[1] + this.scroll * this.speed
        },

        left() {
            return this.randomPosition[0]
        },

        pageHeight() {
            const body = document.body,
                html = document.documentElement;

            const height = Math.max( body.scrollHeight, body.offsetHeight, 
                html.clientHeight, html.scrollHeight, html.offsetHeight );

            return height;
        },

        pageWidth() {
            const body = document.body,
                html = document.documentElement;

            const width = Math.max( body.scrollWidth, body.offsetWidth, 
                html.clientWidth, html.scrollWidth, html.offsetWidth );

            return width;
        },
    }
}
