const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            image: './assets/images/socks_blue.jpg',
            inStock: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['S', 'M', 'L'],
            variants: [
                {id: 2233, color: 'blue', image: './assets/images/socks_blue.jpg'},
                {id: 2234, color: 'green', image: './assets/images/socks_green.jpg'}
            ],

        }
    },
    methods: {
        addCart() {
            this.cart += 1;
        },
        removeCar() {
            this.cart -= 1;
        },
        updateImage(variantImage) {
            console.log(variantImage)
            this.image=(variantImage)
        },
    }
})
    