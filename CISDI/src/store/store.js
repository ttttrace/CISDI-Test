import Vue from 'vue'
import Store from 'vuex'
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(Store);

var store = new Store.Store({
    state: {
        list: []
    },
    mutations: {
        //设置数据
        setItems(state, data) {
            state.list = data;
        },
        //添加新列表项
        addItem(state, item) {
            state.list.push(item);
        },
        //插入新列表项
        insertItem(state, data) {
            state.list.splice(data.index, 0, data.item);
        },
        //删除列表项
        deleteItem(state, index) {
            state.list.splice(index, 1);
        },
        //列表项随机排序
        shuffleItems(state) {
            state.list.sort(function () { return 0.5 - Math.random() });
        }
    },
    actions: {
        //获取数据
        getList({ commit }) {
            axios.get('api/list')
                .then((res) => {
                    commit('setItems', res.data.data);
                }).catch((err) => {
                    console.log(err);
                })
        }
    }
})

export default store;