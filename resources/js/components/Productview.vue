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
        <v-row>
          <v-col>
            <v-card elevation="0" outlined>
              <v-card-title>Product Details</v-card-title>
              <v-card-text>
                <v-row>
                  <v-col cols="12" md="8">
                    <v-text-field
                      outlined
                      label="Name"
                      v-model="product_name"
                    ></v-text-field>

                    <v-textarea
                      outlined
                      label="Description"
                      v-model="product_description"
                    ></v-textarea>
                    <v-text-field
                      outlined
                      label="Price"
                      v-model="price_price"
                    ></v-text-field>
                    <v-btn dark @click="updateproduct">Update</v-btn>
                  </v-col>

                  <v-col cols="12" md="4">
                    <div
                      id="my-strictly-unique-vue-upload-multiple-image"
                      style="display: flex; justify-content: center"
                    >
                      <vue-upload-multiple-image
                        @upload-success="uploadImageSuccess"
                        @before-remove="beforeRemove"
                        @edit-image="editImage"
                        :data-images="images"
                        idUpload="myIdUpload"
                        editUpload="myIdEdit"
                      ></vue-upload-multiple-image>
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
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
import VueUploadMultipleImage from "vue-upload-multiple-image";
export default {
  components: {
    VueUploadMultipleImage,
  },
  data: () => ({
    drawer: null,
    prodid: null,
    product_name: null,
    price_price: null,
    product_description: null,
    product_image: [],
    images: [],

    snackbar: false,
    snackbartext: null,
  }),
  methods: {
    getsingleproduct() {
      var productid = this.$route.params.productid;
      axios.get("/api/getsingleproduct/" + productid).then((response) => {
        this.product_name = response.data.product_name;
        this.price_price = response.data.price_price;
        this.product_description = response.data.product_description;
        this.prodid = response.data.id;

        var images = JSON.parse(response.data.product_image);

        var actius = [];
        images.filter((value, key) => {
          var datastring = {
            path: "/images/"+value,
            default: 1,
            highlight: 1,
            caption: "caption to display. receive", // Optional
          };
          actius.push(datastring);
        });

        this.images = actius;
      });
    },

    updateproduct() {
      var dataString = {
        id: this.prodid,
        product_name: this.product_name,
        price_price: this.price_price,
        product_description: this.product_description,
        product_image: this.product_image,
      };

      axios.post("/api/updateproduct", dataString).then((response) => {
        if (response.data == 1) {
          this.snackbar = true;
          this.snackbartext = "Product details has been update";
        }
      });
    },

    uploadImageSuccess(formData, index, fileList) {
      // Upload image api
      var producImg = [];

      axios.post("/api/uploadfile", formData).then((response) => {
        producImg.push(response.data);
      });

      this.product_image = fileList;
    },
    beforeRemove(index, done, fileList) {
      console.log("index", index, fileList);
      var r = confirm("remove image");
      if (r == true) {
        done();
      } else {
      }
    },
    editImage(formData, index, fileList) {
      console.log("edit data", formData, index, fileList);
    },
  },
  mounted() {
    this.getsingleproduct();
  },
};
</script>