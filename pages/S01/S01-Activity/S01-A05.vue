<template>
    <div>
        <b-jumbotron 
            bg-variant="https://farm6.staticflickr.com/5564/30027314480_81db2b8384_b.jpg" 
            header="Activité 5" 
            lead="" 
            text-variant="white">
        </b-jumbotron>
        <b-container class="">
        <h3 class="alert-heading">S'initier aux dimensions spatio-temporels à l'aide du module &quot;Initiation au haut Moyen Âge&quot; </h3>
        <h6>avec fiche de lecture 1</h6>
        <hr>

          
         
          <h5>Consignes</h5>

        

          <p>Je vous propose d’approfondir les points spatio-temporels et thématiques abordés lors de l’atelier d’initiation à l’aide de la première lecture mise à disposition dans la trousse “Initiation au haut Moyen Âge”. </p>
               
           <ol>
               <li>Utilisez à cette fin la fiche de lecture dont vous avez déjà pris connaissance.</li>
               <li>Placez les informations de l’article par rapport aux points que j’ai développés avec vous lors de l’atelier d’initiation. </li>
               <li>Focalisez surtout sur les points qui touche à la thématique qui vous a été assignée auparavant par le professeur. </li>
               <li>Retenez des éléments pour lesquels vous souhaitez avoir des précisions, notez aussi deux questions de discussion pour l’atelier d'approfondissement et publiez les sur le forum du cours. La consultation des cartes doit vous aider à mieux situer et visualiser les espaces concernés par le cours.</li>
               <li>Déposer la fiche de lecture dans l’espace devoir fiche de lecture Initiation au Moyen Âge. Cela me permettra de voir si le principe de la fiche est bien comprise.</li>
           </ol>     
          
          <h5>Activité</h5>
          
            <edTask>
                    <b-tabs pills card vertical slot="content"> 
                        <b-tab  title="Lectures">
                            <b-card-group deck>
                                <ActivityCard  title="lecture" colorType="success" icon="book" checkTerm="J'ai terminé cette partie">
                                    <BookCard
                                        blank=""
                                        title="Introduction, dans: The Early Middle Ages"
                                        author="McKitterick"
                                        edition=""
                                        editor="dir. McKitterick (Short Oxford History of Europe)"
                                        place=""
                                        year=""
                                        summary=""
                                        reference="pp. 1-19"
                                        link="studium.umontreal.ca"
                                        linktitle="document sur Studium">
                                    </BookCard>
                                    <BookCard
                                        blank=""
                                        title="Le Moyen Âge IVe-Xe siècle"
                                        author="dir. Kaplan"
                                        edition=""
                                        editor="dir. McKitterick (Short Oxford History of Europe)"
                                        place=""
                                        year=""
                                        summary="Extraits de Le Moyen  ge IVe-Xe siècle"
                                        reference="pp. 9-24, 49-65, 129-145"
                                        link="studium.umontreal.ca"
                                        linktitle="document sur Studium">
                                    </BookCard>
                                </ActivityCard>
                            </b-card-group>
                        </b-tab>
                        <b-tab title="Cartes">
                            <b-card-group deck>
                                <ActivityCard  title="carte" colorType="success" icon="map" checkTerm="J'ai terminé cette partie">
                                     <ListObjets :cartes="cartes"></ListObjets>
                                </ActivityCard>
                            </b-card-group>
                        </b-tab>
                    </b-tabs>
                </edTask>
        <!--
        <b-tabs >
            <b-tab title="Consignes" active>
                <p>Je vous propose d’approfondir les points spatio-temporels et thématiques abordés lors de l’atelier d’initiation à l’aide de la première lecture mise à disposition dans la trousse “Initiation au haut Moyen Âge”.</p>
                <p>Utilisez à cette fin la fiche de lecture dont vous avez déjà pris connaissance.</p>
                <p>Placez les informations de l’article par rapport aux points que j’ai développés avec vous lors de l’atelier d’initiation.</p>
                <p>Focalisez surtout sur les points qui touche à la thématique qui vous a été assignée.</p>
                <p>Formulez des questions de compréhension et de discussion pour l’atelier d'approfondissement.</p>
                <p>La consultation des cartes doit vous aider à mieux situer et visualiser les espaces concernés.</p>
            </b-tab>
            <b-tab title="Activité">
                <edTask>
                    <b-tabs pills card vertical slot="content"> 
                        <b-tab  title="Lectures">
                            <b-card-group deck>
                                <ActivityCard  title="lecture" colorType="success" icon="book" checkTerm="J'ai terminé cette partie">
                                    <BookCard
                                        blank=""
                                        title="Introduction, dans: The Early Middle Ages"
                                        author="McKitterick"
                                        edition=""
                                        editor="dir. McKitterick (Short Oxford History of Europe)"
                                        place=""
                                        year=""
                                        summary=""
                                        reference="pp. 1-19"
                                        link="studium.umontreal.ca"
                                        linktitle="document sur Studium">
                                    </BookCard>
                                    <BookCard
                                        blank=""
                                        title="Le Moyen Âge IVe-Xe siècle"
                                        author="dir. Kaplan"
                                        edition=""
                                        editor="dir. McKitterick (Short Oxford History of Europe)"
                                        place=""
                                        year=""
                                        summary="Extraits de Le Moyen  ge IVe-Xe siècle"
                                        reference="pp. 9-24, 49-65, 129-145"
                                        link="studium.umontreal.ca"
                                        linktitle="document sur Studium">
                                    </BookCard>
                                </ActivityCard>
                            </b-card-group>
                        </b-tab>
                        <b-tab title="Cartes">
                            <b-card-group deck>
                                <ActivityCard  title="carte" colorType="success" icon="map" checkTerm="J'ai terminé cette partie">
                                    
                                    
                                        <BookCard
                                            image="http://medias.larousse.fr/archives/img/grande-encyclopedie/full/christianisme_002.jpg"
                                            title="Religions et missions au haut Moyen Àge de 395 à 1054"
                                            editor="Archive Larousse"
                                            link="studium.umontreal.ca"
                                            linktitle="document sur Studium"
                                            > 
                                        </BookCard>
                                        <BookCard
                                            image="https://legacy.lib.utexas.edu/maps/historical/europe_814_colbeck.jpg"
                                            title="Europe à la mort de Charlemagne (814)"
                                            author="Shepperd"
                                            editor="Historical Atlas"
                                            link="studium.umontreal.ca"
                                            linktitle="document sur Studium"
                                        </BookCard>
                                        <BookCard
                                            image="https://legacy.lib.utexas.edu/maps/historical/central_europe_980.jpg"
                                            title="L’Europe centrale vers 980"
                                            author="Shepperd"
                                            editor="Historical Atlas"
                                            link="studium.umontreal.ca"
                                            linktitle="document sur Studium"
                                        </BookCard>

                                        <BookCard
                                            image="http://www.larousse.fr/encyclopedie/data/images/1011206-Le_monde_occidental_en_lan_mille.jpg"
                                            title="Le monde occidental vers l’an mil"
                                            editor="Encyclopédie Larousse en ligne"
                                            link="studium.umontreal.ca"
                                            linktitle="document sur Studium"
                                        </BookCard>
                                </ActivityCard>
                            </b-card-group>
                        </b-tab>
                    </b-tabs>
                </edTask>
            </b-tab>
        </b-tabs>-->
        </b-container>
       
    </div>
</template>

<script>
import CartesJson from '@/assets/cartes.json'
import Modal from '@/components/Modal.vue'
import ActivityCard from '@/components/ActivityCard.vue'
import BookCard from '@/components/BookCard.vue'
import ListObjets from '@/components/ListObjets.vue'

export default {
    layout: 'activity',
    components: {
        Modal,
        ActivityCard,
        BookCard,
        ListObjets:ListObjets
        },
    data () {
        return {
            msg: 'semaine 2',
            cartes: CartesJson
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