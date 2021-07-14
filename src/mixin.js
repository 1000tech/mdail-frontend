import { postData, getData, updateData, deleteData } from './services/api'

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
        delete(url) {
            return deleteData(url)
        },
    },
}

export default mixin