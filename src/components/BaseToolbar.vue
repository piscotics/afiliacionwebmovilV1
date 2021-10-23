<template>
  <q-toolbar>
    <q-btn
      flat
      dense
      round
      icon="menu"
      aria-label="Menu"
      @click.stop="$emit('close')"
      v-if="isAuthenticated && isMobile"
    />

    <q-toolbar-title :class="{ 'text-center': !isAuthenticated }">
      Afiliación Web
    </q-toolbar-title>

    <q-btn
      flat
      icon="search"
      v-if="isAuthenticated"
      to="/search"
    />
      <!-- @click.prevent="openSearch" -->

    <q-btn flat icon="settings" v-if="isAuthenticated && !isMobile">
      <q-menu fit anchor="bottom left" self="top left" max-height="70vh">
        <BaseMenu
          v-for="item in linksData"
          :key="item.title"
          :title="item.title"
          :caption="item.caption"
          :link="item.link"
          :icon="item.icon"
        />
      </q-menu>
    </q-btn>

    <q-avatar rounded size="32px" v-if="isAuthenticated">
      <img src="@/assets/user.png" alt="avatar" />
      <q-menu>
        <div class="column q-pa-md" style="width: 200px;">
          <div class="row" v-if="user_logged">
            <div class="q-mb-md">
              <b>{{ user_logged.nombre }} {{ user_logged.apellido }}</b>
            </div>
          </div>
          <div class="row q-mb-md">
            <b>Usuario: </b>
            <span>{{ user_logged.username }}</span>
          </div>

          <q-btn
            color="primary"
            label="Cerrar Sesión"
            push
            size="sm"
            v-close-popup
            @click="logout"
          />
        </div>
      </q-menu>
    </q-avatar>
  </q-toolbar>
</template>

<script>
import linksMenu from "src/services/menu";
import ModalSearch from "src/pages/search/Index.vue";

export default {
  name: "BaseToolbar",
  data() {
    return {
      linksData: []
    };
  },

  mounted() {
    this.linksData = linksMenu;
  },

  methods: {
    logout() {
      this.$store.commit("user_authenticated/setAuthenticated", false);
      this.$router.push({ path: "/" });
    },
    openSearch() {
      this.$q
        .dialog({
          component: ModalSearch,
          parent: this
        })
        .onOk(value => {
          console.log("satisfactoriamente. . .");
        })
        .onCancel(() => {
          // console.log("Cancel");
        })
        .onDismiss(() => {
          // console.log("Called on OK or Cancel");
        });
    }
  },

  computed: {
    isMobile: {
      get() {
        return this.$store.state.platform_mobile.isMobile;
      }
    },
    isAuthenticated: {
      get() {
        return this.$store.state.user_authenticated.isAuthenticated;
      }
    },
    user_logged: {
      get() {
        return this.$store.state.user_authenticated.user_logged;
      }
    }
  }
};
</script>

<style></style>
