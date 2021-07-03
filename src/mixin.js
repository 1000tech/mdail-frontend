import { postData, getData } from './js/api'

const mixin = {
    methods: {
        post(url, data) {
            return postData(url, data)
        },
        get(url) {
            return getData(url)
        },
    },
}

export default mixin