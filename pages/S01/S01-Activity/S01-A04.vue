<template>
    <div>
        <b-jumbotron 
            bg-variant="https://farm6.staticflickr.com/5564/30027314480_81db2b8384_b.jpg" 
            header="Activité 4" 
            lead="" 
            text-variant="white">
        </b-jumbotron>
        <b-container class="">
                    <h3 class="alert-heading">Prendre connaissance des principes de fiche de lecture</h3>
                    <hr>
                    <h5>Consignes</h5>
                    <p>Je vous propose un canevas de fiche de lecture qui vous permettra d’organiser les informations que vous tirez des littératures de recherche que je vous propose de lire tout au long du cours. Prenez connaissance de cette fiche. Vous êtes évidemment invité d’adapter ce canevas à vos besoins.</p>
                    <b-alert show>N.B. Ce modèle de fiche de lecture se distingue du modèle de fiche de source (cf. <b-link href="S01-A07">activité 7</b-link> de cette semaine).</b-alert>
                    
                    <h5>Ressources associées</h5>
                    
                    <ActivityCard  title="document" colorType="success" icon="attach_file">
                        <b-button>Modèle de fiche de lecture</b-button>
                     </ActivityCard>

                    <!--
                    <b-tabs>
                        <b-tab title="Consignes" active>
                            <p>Je vous propose un canevas de fiche de lecture qui vous permettra d’organiser les informations qui vous tirez des littératures de recherche que je vous propose tout au long du cours. Prenez connaissance de cette fiche. Vous êtes évidemment d’adapter ce canevas à vos propres besoins.</p>
                            <b-alert show>N.B. Ce modèle de fiche de lecture se distingue du modèle de fiche de source (cf. <b-link href="S01-A06">activité 6</b-link> de cette semaine).</b-alert>
                        </b-tab>
                        <b-tab title="Activité">
                            <b-card-group deck>
                                <ActivityCard  title="document" colorType="success" icon="attach_file">
                                    <b-button v-b-modal.modal1 href="#">Modèle de fiche de lecture</b-button>
                                </ActivityCard>
                            </b-card-group>
                        </b-tab>
                    </b-tabs>-->
        </b-container>
        <b-modal id="modal1" size="lg" title="Forum Présentation" centered>
            <!--<iframe src="https://player.vimeo.com/video/179089952?title=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            <p>
                <a href="https://vimeo.com/179089952">a-venir</a> from <a href="https://vimeo.com/user26937759">FAS - Formation en ligne</a> on <a href="https://vimeo.com">Vimeo</a>.
            </p>-->

            <b-embed type="iframe"
                    aspect="16by9"
                    src="https://studium.umontreal.ca/pluginfile.php/3810133/mod_resource/content/4/hst2125-bv/S01/S01-index"
                    allowfullscreen>
            </b-embed>
        </b-modal>
    </div>
</template>

<script>
import Modal from '@/components/Modal.vue'
import ActivityCard from '@/components/ActivityCard.vue'

export default {
    layout: 'activity',
    components: {
        Modal,
        ActivityCard
        },
        data () {
        return {
            msg: 'semaine 2'//,
            //isActive: true
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron {
  background: url(https://farm2.staticflickr.com/1744/40757444840_126f6ab628_o.png);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>