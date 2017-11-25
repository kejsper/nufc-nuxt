import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const mainNavbarUrl = 'http://www.nufcblog.com/wp-json/wp-api-menus/v2/menus/415'
const footerLinksUrl = 'http://www.nufcblog.com/wp-json/wp/v2/links'
const postsUrl = 'http://www.nufcblog.com/wp-json/nufcblog/v1/posts'

const createStore = () => {
  return new Vuex.Store({
    state: {
      mainNavbar: {},
      footerLinks: {},
      posts: {}
    },
    actions: {
      async nuxtServerInit ({ commit }) {
        const navbar = await axios.get(mainNavbarUrl)
        const links = await axios.get(footerLinksUrl)
        commit('SET_MAIN_NAVBAR', {navbar: navbar.data})
        commit('SET_FOOTER_LINKS', {links: links.data})
      },
      // LOAD_MAIN_NAVBAR: function ({ commit }) {
      //   axios.get(mainNavbarUrl).then((response) => {
      //     commit('SET_MAIN_NAVBAR', {list: response.data})
      //   }, (err) => {
      //     console.log(err)
      //   })
      // },
      // LOAD_FOOTER_LINKS: function ({ commit }) {
      //   axios.get(footerLinksUrl).then((response) => {
      //     commit('SET_FOOTER_LINKS', {list: response.data})
      //   }, (err) => {
      //     console.log(err)
      //   })
      // },
      async LOAD_POSTS ({ commit }) {
        const list = await axios.get(postsUrl)
        commit('SET_POSTS', {posts: list.data})
      }
    },
    mutations: {
      SET_MAIN_NAVBAR: (state, {navbar}) => {
        state.mainNavbar = navbar.items
      },
      SET_FOOTER_LINKS: (state, {links}) => {
        state.footerLinks = links
      },
      SET_POSTS: (state, {posts}) => {
        state.posts = posts
      }
    },
    getters: {
      navbarItems: (state) => {
        return state.mainNavbar
      },
      footerLinks: (state) => {
        return state.footerLinks
      },
      posts: (state) => {
        return state.posts
      }
    }
  })
}

export default createStore
