<template>
    <div>
        <b-jumbotron 
            bg-variant="https://farm6.staticflickr.com/5564/30027314480_81db2b8384_b.jpg" 
            header="Activité 6" 
            lead="" 
            text-variant="white">
        </b-jumbotron>
        <b-container class="">
                    <h3 class="alert-heading">Se familiariser avec la typologie des sources du haut Moyen Âge 1</h3>
                    <hr>
                    
                    <p>Le travail de l’historienne et de l’historien émane avant du dialogue avec les sources historiques qui lui permettent de développer une problématique ou un questionnement de recherche. La complexité de la transmission des sources historiques et l’état souvent lacunaire de la tradition oblige la recherche sur le haut Moyen Âge de croiser - plus que dans le cas d’autres parties du Moyen Âge - des sources très variées: écrites, littéraires, matérielles, archéologiques, iconographiques, etc. Les dossiers de sources sur lesquels vous allez travailler au courant du trimestre permettent de donner un aperçu aussi complet que possible de ce vaste éventail de matériel historique à la base de l’étude du haut Moyen Âge. Le but de cette activité est de vous ouvrir la porte de l’univers de ces sources historiques, mais aussi à la méthodologie et la théorie des approches de la tradition des sociétés du haut Moyen Âge.</p>
                    <h5>Consignes</h5>
                    <p>Votre tâche est plus concrètement de lire le matériel mis à disposition dans le dossier “Typologie des sources et méthodologie de leur analyse” en préparant une fiche de lecture pour chacun. Nous allons approfondir les informations en travaillant sur les dossiers de sources. Ceci est une activité qui vous donne une certaine liberté pour vous organiser vous-même par rapport à la charge de travail. Il faudrait arriver au bout des lectures à la fin de la semaine 3. Pour en être sûr, je vous conseille de lire un tier du texte par semaine.</p>
                    
                    <h5>Ressources associées</h5>
                    
                    <ActivityCard  title="document" colorType="success" icon="attach_file">
                        <p>“Typologie des sources et méthodologie de leur analyse”:</p>
                        <b-button>Van Caenegem, Introduction, p. ### HST2125-Texte69</b-button>
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