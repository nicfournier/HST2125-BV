<template>
    <div>
        <b-jumbotron 
            bg-variant="https://farm6.staticflickr.com/5564/30027314480_81db2b8384_b.jpg" 
            header="Activité 3" 
            lead="" 
            text-variant="white">
        </b-jumbotron>
        <b-container class="">
                    <h3 class="alert-heading">Appropriation de votre portfolio étudiant UdeM</h3>
                    <hr>
                    <h5>Consignes</h5>
                    <p>Nous allons travailler avec l’outil de portfolio ce qui vous permets d’avoir une meilleure visibilité à l’intérieur du groupe du cours. L’objectif est que l’ensemble du groupe puisse facilement se faire une idée des orientations spatio-temporelles et thématiques des différents projets de recherche. Par ce biais vous pouvez par exemple voir s’il y a des camarades qui travaillent sur des questions comparables ou complémentaires aux vôtres, même si elles sont étudiées pour une aire géographique différente. Il reste à vous de choisir jusqu'où vous allez pousser l’utilisation du portfolio. Vous pouvez vous contenter des fonctions de base, mais vous pouvez aussi en faire un carnet ou journal de recherche et de ce fait un forum de partage de vos trouvailles et découvertes avec les autres étudiant-e-s du cours.</p>
                    <ul>
                        <li>se créer un compte </li>
                        <li>préparer cet espace.</li>
                    </ul>
                    
                                <ActivityCard  title="Portfolio" colorType="success" icon="next_week">
                    <p><a target="_blank" href="https://www.youtube.com/watch?v=VUUCMVW2ZkM&list=PLnIyMlnFyetM480gO57Al1Luq_28FJuB2&index=3">Lien tutoriel du portfolio de Soutien Studium </a>: Vous y trouverez aussi d’autres capsules qui vous permettent de comprendre les différentes fonctions du portfolio.</p>
                                    
                                </ActivityCard>
                    <!--
                    <b-tabs>
                        <b-tab title="Consignes" active>
                            <p>Prenez le temps de parcourir le plan, les modules et les ressources du cours en vue surtout de formuler des questions à poser lors de l’atelier d’information.</p>
                            
                        </b-tab>
                        <b-tab title="Activité">
                            <b-card-group deck>
                                <ActivityCard  title="forum" colorType="success" icon="forum">
                                    <b-button v-b-modal.modal1 href="#">Ressources du cours</b-button> ou vous pouvez y accéder à partir du menu "Ressources".
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