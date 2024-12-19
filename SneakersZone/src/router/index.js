import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'), 
      children: [
        {
          path: 'sneakers/:id',  
          name: 'sneakerDetails', 
          component: () => import('../views/Detalles/SneakerDetailView.vue'),  
          props: true, 
        },
        {
          path: 'clothes/:id',  
          name: 'clothesDetails', 
          component: () => import('../views/Detalles/ClotheDetailView.vue'), 
          props: true, 
        },
        {
          path: 'collectibles/:id',  
          name: 'collectibleDetails',  
          component: () => import('../views/Detalles/CollectibleDetailView.vue'),  
          props: true,  
        },
      ],
    },
    {
      path: '/wardrobe',
      name: 'wardrobe',
      component: () => import('../views/WardrobeView.vue'), 
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: () => import('../views/PerfilView.vue'), 
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'), 
    },
  ],
})

export default router
