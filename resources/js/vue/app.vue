<template>
    <div class="todoListContainer">
        <div class="heading">
            <h2 id="title">
                Todo List
                <add-item-form
                    v-on:reloadlist="getList()"
                 />
            </h2>
        </div>
        <list-view :items="items"
            v-on:reloadlist="getList()"
        />
    </div>
</template>

<script>
import addItemForm from "./addItemForm.vue"
import listView from "./listView.vue"
export default {
    components: {
        addItemForm,
        listView
    },
    data:function(){
        return {
            item:[]
        }
    },
    methods: {
        getList(){
            axios.get('/api/items')
            .then(response => {
                this.item = response.data
            })
            .catch(error => {
                console.log(error)
            })
        }
    },
    created(){
        this.getList();
    }
}
</script>

<style scoped>
    .todoListContainer{
        width: 350px;
        margin: auto;
    }

    .heading {
        background: #e6e6e6;
        padding: 10px;
    }

    #title{
        align-items: center;
        justify-content: center;
    }
</style>
