<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
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
        <v-data-table :headers="headers" :items="desserts" class="elevation-0">
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Products</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-btn to="/product/new">Add New</v-btn>
              <v-spacer></v-spacer>
            </v-toolbar>
          </template>
          <template v-slot:[`item.product_image`]="{ item }">
            <v-img :src="'/images/'+JSON.parse(item.product_image)[0]" style="max-width:50px;"></v-img>
          </template>

          <template v-slot:[`item.action`]="{ item }">
            <v-btn
              :to="'/product/edit/' + item.id"
              color="#444"
              x-small
              style="padding: 5px; min-width: inherit; height: 25px !important"
              dark
            >
              Edit
            </v-btn>
            <v-btn
              color="#ff7058"
              x-small
              style="padding: 5px; min-width: inherit; height: 25px !important"
              dark
              @click="deleteproduct(item.id)"
            >
              Delete
            </v-btn>
          </template>
        </v-data-table>
      </v-container>
    </v-main>

    <v-snackbar v-model="snackbar">
      {{ snackbartext }}
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>



  </v-app>
</template>
  
  <script>
export default {
  data: () => ({
    drawer: null,
    headers: [
      {
        text: "Photo",
        align: "start",
        value: "product_image",
      },
      { text: "Name", value: "product_name" },
      { text: "Price", value: "price_price" },
      { text: "Action", value: "action" },
    ],
    desserts: [],

    snackbar: false,
    snackbartext:null,
  }),
  methods: {
    getAllProduct() {
      axios.get("/api/getAllProduct").then((response) => {
        this.desserts = response.data;
      });
    },

    deleteproduct(productid) {
      if (confirm("Are you sure want to delete !!")) {
        axios.get("/api/deleteproduct/"+productid).then((response) => {
          if (response.data == 1) {
            this.snackbar = true;
            this.snackbartext = "product deleted...."
            this.getAllProduct();
        }
          
        });
      }
    },
  },
  mounted() {
    this.getAllProduct();
  },
};
</script>