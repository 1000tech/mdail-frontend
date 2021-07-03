import { postData, getData, updateData } from './js/api'

const mixin = {
    methods: {
        post(url, data) {
            return postData(url, data)
        },
        get(url) {
            return getData(url)
        },
        put(url, data) {
            return updateData(url, data)
        },
    },
}

export default mixin