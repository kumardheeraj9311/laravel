<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app >
      <v-list-item to="/">
        <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/product">
        <v-list-item-icon>
            <v-icon>mdi-basket-outline</v-icon>
          </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Product</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Dashboard</v-toolbar-title>
    </v-app-bar>

    <v-main> 
        <v-container>
          <v-row>
            <v-col cols="3">
              <v-card>
                <v-card-title>Product</v-card-title>
                <v-card-text>
                    <v-btn to="/product" elevation="0">View All</v-btn>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="3">
              <v-card>
                <v-card-title>Product</v-card-title>
                <v-card-text>
                    <v-btn to="/product" elevation="0">View All</v-btn>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="3">
              <v-card>
                <v-card-title>Product</v-card-title>
                <v-card-text>
                    <v-btn to="/product" elevation="0">View All</v-btn>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="3">
              <v-card>
                <v-card-title>Product</v-card-title>
                <v-card-text>
                    <v-btn to="/product" elevation="0">View All</v-btn>
                </v-card-text>
              </v-card>
            </v-col>
            
          </v-row>
        </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({ drawer: null }),
};
</script>