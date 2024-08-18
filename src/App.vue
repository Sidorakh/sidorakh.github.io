<template>
  <v-app>
    <v-main>
      <v-container>
        <h1 class="text-center">
          Documentation
        </h1>
      </v-container>
      <v-row>
        <template v-if="!$vuetify.display.mobile">
          <v-col cols="2"/>
        </template>
        <v-col cols="12" md="8">
          <v-card-text>
            
          <v-card-text>
            A few of my libraries and their respective documentation can be found here
          </v-card-text>
            <v-row>
              <v-col v-for="(repo,i) in repositories" cols="6" :key="`repo${i}`">
                <v-card>
                  <v-card-title> {{ repo.name }} </v-card-title>
                  <v-card-subtitle> License: {{ repo.license }} </v-card-subtitle>
                  <v-card-text>
                    {{ repo.description }}
                  </v-card-text>
                  <v-card-actions>
                    <v-btn :href="repo.repo" target="_blank" color="red-darken-4" variant="flat"> Repository </v-btn>
                    <v-btn :href="repo.docs" target="_blank" color="red-darken-4" variant="flat"> Documentation </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-col>
        <template v-if="!$vuetify.display.mobile">
          <v-col cols="2"/>
        </template>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
  import repositories from '@/assets/repositories.json';
  //console.log(repositories);
  export default {
    name: "DocumentationHomepage",
    data:()=>({
      repositories: structuredClone(repositories)
    }),

  }
</script>
