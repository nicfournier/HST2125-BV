<template>
    <div>
        <b-jumbotron 
            bg-variant="https://farm6.staticflickr.com/5564/30027314480_81db2b8384_b.jpg" 
            header="Activité 7" 
            lead="" 
            text-variant="white">
        </b-jumbotron>
        <b-container class="">
                    <h3 class="alert-heading">Comprendre les principes de la critique et de l'analyse de source et sa systématisation dans une fiche de source</h3>
                    <hr>
                    
                    <p>Cette activité est complémentaire à l’initiation à la typologie des sources de l’histoire médiévale. Elle met l’accent sur la méthodologie du travail sur les sources. Celui-ci à toujours deux volets: la critique de la source (auteur, datation, contexte de production, transmission etc.) et l’analyse de source à proprement parler. Il est évident que la maîtrise de la méthodologie de critique et d’analyse viendra avec la pratique. Reliée à l’expérience et les connaissances individuelles, la première “lecture” gardera toujours un élément empirique, de surprise même. La recherche historique peut donc prendre le caractère d’une aventure ou d’une quête de nouvelles sources et surtout de nouvelles questionnements. Mais, on partira rarement en aventure sans équipement!</p>
                    <h5>Consignes</h5>
                    <p>La tâche principale de cette activité sera donc de vous familiariser avec cet équipement. Vous trouverez à cette fin dans le dossier “Typologie des sources et méthodologie de leur analyse” un guide d’initiation à la critique et à l’analyse de source avec des renvois à des ressources complémentaires en ligne. Je vous invite à prendre connaissance du guide et de ses ressources. S’il y a des questions qui restent après la lecture gardez les pour l’atelier d'approfondissement puisqu’il y est prévu de faire une analyse de source spontanée, donc une possibilité de première mise à l’oeuvre de la méthodologie de travail avec les sources historiques.</p>
                    <h5>Ressources associées</h5>
                    
                    <ActivityCard  title="document" colorType="success" icon="attach_file">
                        <p>“Typologie des sources et méthodologie de leur analyse”:</p>
                        <b-button>Guide - Critique et analyse de source</b-button>
                     </ActivityCard>


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