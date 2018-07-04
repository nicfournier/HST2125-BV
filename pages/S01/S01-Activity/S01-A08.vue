<template>
    <div>
        <b-jumbotron 
            bg-variant="https://farm6.staticflickr.com/5564/30027314480_81db2b8384_b.jpg" 
            header="Activité 8" 
            lead="" 
            text-variant="white">
        </b-jumbotron>
        <b-container class="">
                    <h3 class="alert-heading">Atelier d'approfondissement</h3>
                    <hr>
                    
                    <p>L’atelier d’approfondissement de cette semaine a deux objectifs:</p>

                    <ol>
                        <li>Nous allons revenir sur les points spatio-temporels et thématiques que j’ai présentés lors de l’atelier d’initiation et que vous avez approfondis à l’aide de l’article de Rosamond McKitterick pour formuler une sorte de grille des orientations spatio-temporelles et thématiques pour notre cours, tout en retenant déjà des observations que vous avez faites ou des questions que vous avez formulées.</li>
                        <li>Nous allons aussi effectuer une analyse spontanée de source. Nous allons nous intéresser à un document iconographique, la <i>mappa mundi</i> dite d’Albi, qui nous permettra d’analyser l’imagination du monde à l’époque du haut Moyen Âge. C’est en même temps déjà une ouverture vers le module 2 du cours centré sur le cadre spatio-temporel du haut Moyen Âge.</li>
                    </ol>
                    <h5>Consignes</h5>
                    
                    <ol>
                        <li>À l’heure indiquée dans le plan de cours [Lien vers le plan de cours], connectez-vous à la classe virtuelle Adobe Connect en cliquant sur le lien fourni dans l’espace StudiUM.</li>
                        <li>N’oubliez pas d’avoir à portée de main l’ensemble de votre matériel issu de vos préparations (fiches de lecture, questionnements, etc.).</li>
                    </ol>

                    <h5>Ressources associées</h5>
                    
                    <ActivityCard  title="document" colorType="success" icon="attach_file">
                        <ul>
                            <li><a href="http://mediatheques.grand-albigeois.fr/1307-focus-sur...-la-mappa-mundi-d-albi.htm" target="_blank">Mappa mundi d’Albi</a></li>
                            <li>Tout le matériel issu de vos préparations</li>
                            <li>Guide du participant à une classe virtuelle Adobe Connect</li>
                        </ul>
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