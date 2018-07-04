<template>
    <div>
         <transition name="slide-fade">
                <div class="list-objets" v-if="!infoDetail" key="1">
                    <ul>
                    <li v-for="(carte, index) in cartes" :key="index" @click.prevent="detailObjet(index)" class="li-objet">{{carte.title}}</li>
                    </ul>
                </div>
        
                <div v-else key="2" class="detail-objet">
            
                <span class='btn-retourn-carte' @click.prevent="closeDetail"> <i class="material-icons">arrow_back</i> Retour aux cartes </span>
                  <div class="card activity-card">
                        <BookCard
                            :image="cartes[itemSelected].image"
                            :title="cartes[itemSelected].title"
                            :editor="cartes[itemSelected].editor"
                            :link="cartes[itemSelected].link"
                            :linktitle="cartes[itemSelected].linktitle"
                            >
                        </BookCard>
                     </div>
                </div>
            </transition>
    </div>
           
</template>

<script>

import BookCard from '@/components/BookCard.vue'


export default {
    props:['cartes'],
    data(){
        return{
           infoDetail:null,
           itemSelected:0
        }
    },
    methods:{
        detailObjet(elementDetail){
            this.infoDetail = 1
            this.itemSelected = elementDetail
        },
        closeDetail(){
            this.infoDetail = null
        }
    },
    components:{
            BookCard
    }
}
</script>

<style scoped>
        .li-objet,.btn-retourn-carte{
            color:#007bff;
            cursor: pointer;
        }
        
        .btn-retourn-carte:hover{
            color:#0056b3;
            cursor: pointer;
        }
        
        .li-objet:hover{
            color:#0056b3;
            cursor: pointer;
        }
    

    
        .slide-fade-enter-active {
        transition: all .5s ease;
        }

        .slide-fade-leave-active {
        transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
        }

        .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(5px);
        opacity: 0;
        }
</style>
