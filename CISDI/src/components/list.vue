<template>
    <div class="container">
        <div
            class="item"
            v-for="(item,index) in list"
            :key="item.index"
            :class="!item.isHidden?'block':'inline'"
        >
            <div class="content" v-show="!item.isHidden">
                <div class="name">{{item.name}}</div>
                <div class="options">
                    <button @click="insertItem(index)">插入</button>
                    <button @click="toggle(index)">折叠</button>
                    <button @click="deleteItem(index)">删除</button>
                </div>
            </div>
            <button v-show="item.isHidden" @click="toggle(index)">展开</button>
        </div>
        <div class="foot">
            <button @click="addItem()">新增</button>
            <button @click="shuffle()">随机排序</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: []
        };
    },
    watch: {
        //监听list的变化
        "$store.state.list"() {
            this.list = this.$store.state.list;
        }
    },
    mounted() {
        this.getList();
    },
    methods: {
        //获取list
        getList() {
            this.$store.dispatch("getList");
            this.list = this.$store.state.list;
        },
        //在前插入一项
        insertItem(index) {
            let len = this.list.length;
            var item = {
                id: len + 15,
                name: "测试元素" + (len + 1),
                isHidden: false
            };
            this.$store.commit("insertItem", { item, index });
        },
        //显示/隐藏一项
        toggle(index) {
            this.list[index].isHidden = !this.list[index].isHidden;
        },
        //删除一项
        deleteItem(index) {
            this.$store.commit("deleteItem", index);
        },
        //末尾新增一项
        addItem() {
            let len = this.list.length;
            var item = {
                id: len + 15,
                name: "测试元素" + (len + 1),
                isHidden: false
            };
            this.$store.commit("addItem", item);
        },
        //随机排序
        shuffle() {
            this.$store.commit("shuffleItems");
        }
    }
};
</script>

<style scoped>
.container {
    margin: auto;
    width: 70%;
}
.item {
    width: 100%;
    margin-top: 5px;
}
.block {
    display: block;
}
.inline {
    display: inline-block;
    width: auto;
    margin-right: 15px;
}
.content {
    min-height: 100px;
    max-height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    border: solid 1px;
}
.options {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    float: right;
    width: 10%;
}
.options button {
    margin-top: 1px;
    margin-bottom: 1px;
}
.name {
    float: left;
    width: 90%;
}
.foot {
    margin-top: 20px;
    text-align: center;
}
.foot button {
    width: 100px;
    margin: 0 15px;
}
</style>