<template>
  <div class="apercu">
    <!--<b-img class="" style="height: 240px" src="https://farm6.staticflickr.com/5564/30027314480_81db2b8384_b.jpg" fluid-grow alt="Responsive image" />-->
    <b-jumbotron 
      bg-variant="https://farm6.staticflickr.com/5564/30027314480_81db2b8384_b.jpg" 
      header="Initiation" 
      lead="Chapitre 1" 
      text-variant="white">
    </b-jumbotron>
    <!--<div class="jumbotron" style="">
      <h1 class="display-4">HST2125</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>-->
    <div id="tab-intro-content" class="container mt-3">
        <Steps>
            <Step step-title="1" class="completed" stepStatus="terminée" slot="step" v-b-tooltip.hover title="c'est fait"/>
            <Step step-title="2" class="secondary" stepStatus="visonnée" slot="step"/>
            <Step step-title="3"  slot="step"/>
            <Step step-title="4"  slot="step"/>
            <Step step-title="5"  slot="step"/>
            <Step step-title="6"  slot="step"/>
            <Step step-title="7"  slot="step"/>
        </Steps>
      <div class="columns">
        <div class="column">
          <h2>
            Aperçu
          </h2>
          <p class="subtitle">
            <b-badge> {{ msg }}</b-badge>
          </p>

          <section>
            <b-tabs>
                <b-tab title="Objectifs">
                  <edObjective>
                    <h4 slot="header">
                      Objectifs de la semaine 
                      <i class="material-icons">bullseye</i>
                    </h4>
                    <ul slot="content">
                      <li>Comprendre l’organisation du cours</li>
                      <li>Faire connaissance des membres du groupe.</li>
                      <li>S’initier au cadre chronologique et spatio-temporel du cours.</li>
                      <li>S’initier aux grandes thématiques du cours</li>
                      <li>S’initier à la typologie et la méthodologie d’analyse des sources du haut Moyen Âge.</li>
                    </ul>
                  </edObjective>
                  
                </b-tab>

                <b-tab title="Contenus essentiels" icon="flag-variant">
                  <edEssential>
                    <ul slot="content">
                        <li>Le haut Moyen Âge comme époque</li>
                        <li>Les grandes thématique de l’époque du haut Moyen Âge</li>
                        <li>Les bases méthodologiques: la recherche et les sources</li>
                      </ul>
                  </edEssential>
                </b-tab>

                <b-tab title="Introduction" icon="debug-step-into">
                  <edIntroduction>
                    <div slot="content">
                    <p>
                      Au-delà de vous souhaiter la bienvenue et de faire votre connaissance, les objectifs de la première semaine sont triples:
                    </p>
                    <ol>
                        <li>Comprendre l’organisation du cours: contenu, structures des modules, éléments d’évaluation, philosophie de travail du groupe</li>
                        <li>Prendre connaissance des modes d’approche de deux éléments de base du travail scientifique en histoire: la littérature de recherche et les sources historiques</li>
                        <li>S’initier au cadre chronologique et spatio-temporel ainsi qu’aux focalisations thématiques du cours</li>
                    </ol>
                  </div>
                  </edIntroduction>
                </b-tab>

                <b-tab title="Activités" icon="filmstrip">
                  <edActivity>
                    <div slot="content">
                      <b-card-group deck>
                      <NavigationCard title="Activité 1" icon="record_voice_over" colorType="white" activityLink="S01-Activity/S01-A01">
                        <h4 slot="actTitle">Atelier d'initiation</h4>
                      </NavigationCard>
                      <NavigationCard icon="forum" title="Activité 2" colorType="white" imgSrc="" activityLink="S01-Activity/S01-A02">
                        <h4 slot="actTitle">Se présenter dans le forum Présentations</h4>
                      </NavigationCard>
                      <NavigationCard icon="remove_red_eye" title="Activité 3" colorType="white" activityLink="S01-Activity/S01-A03">
                        <h4 slot="actTitle">Appropriation de votre portfolio étudiant UdeM</h4>
                      </NavigationCard>
                      <NavigationCard icon="remove_red_eye"  textColor="dark" title="Activité 4" colorType="white" activityLink="S01-Activity/S01-A04">
                        <h4 slot="actTitle">Prendre connaissance des principes de fiche de lecture</h4>
                      </NavigationCard>
                    </b-card-group>
                    <b-card-group deck>
                      <NavigationCard icon="book" title="Activité 5" colorType="white" textColor="dark" activityLink="S01-Activity/S01-A05">
                        <h4 slot="actTitle">S'initier aux dimensions spatio-temporels à l'aide du module "Initiation au haut Moyen Âge" avec fiche de lecture 1</h4>
                      </NavigationCard>
                      <NavigationCard icon="remove_red_eye" title="Activité 6" colorType="white" textColor="dark" activityLink="S01-Activity/S01-A06">
                        <h4 slot="actTitle">Se familiariser avec la typologie des sources du haut Moyen Âge 1</h4>
                      </NavigationCard>
                      <NavigationCard icon="remove_red_eye" title="Activité 7" colorType="white" textColor="dark" activityLink="S01-Activity/S01-A07">
                        <h4 slot="actTitle">Comprendre les principes de la critique et de l'analyse de source et sa systématisation dans une fiche de source
</h4>
                      </NavigationCard>
                       <NavigationCard icon="record_voice_over" title="Activité 8" colorType="white" textColor="dark" activityLink="S01-Activity/S01-A08">
                        <h4 slot="actTitle">Atelier d'approfondissement</h4>
                      </NavigationCard>
                  </b-card-group>
                    </div>
                  </edActivity>
                </b-tab>
            </b-tabs>
        </section>

        </div>
      </div>
    </div>
  </div>
</template>



<!--<script>
export default {
  name: 'apercu', 
  data () {
    return {
      msg: 'module 2',
      isActive: true
    }
  }
}
</script>-->

<script>
import BadgeIcon from '@/components/BadgeIcon.vue'
import Steps from '@/components/Steps.vue'
import Step from '@/components/Step.vue'
import NavigationCard from '@/components/NavigationCard.vue'
import edObjective from '@/components/edObjective.vue'
import edEssential from '@/components/edEssential.vue'
import edIntroduction from '@/components/edIntroduction.vue'
import edActivity from '@/components/edActivity.vue'
export default {
  layout: 'default',
  components: {
    BadgeIcon,
    Steps,
    Step,
    NavigationCard,
    edObjective,
    edEssential,
    edIntroduction,
    edActivity
  },
  data () {
    return {
      msg: 'semaine 1',
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