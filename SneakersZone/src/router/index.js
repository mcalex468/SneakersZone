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
          component: () => import('../views/SneakerDetailView.vue'),  
          props: true, 
        },
        {
          path: 'clothes/:id',  
          name: 'clothingDetails', 
          component: () => import('../views/ClothingDetailView.vue'), 
          props: true, 
        },
        {
          path: 'collectibles/:id',  
          name: 'collectibleDetails',  
          component: () => import('../views/CollectibleDetailView.vue'),  
          props: true,  
        },
      ],
    },
    {
      path: '/wardrobe',
      name: 'wardrobe',
      component: () => import('../views/WardrobeView.vue'), // Lazy load de WardrobeView
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: () => import('../views/PerfilView.vue'), // Lazy load de PerfilView
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'), // Lazy load de ContactView
    },
    {
      path: '/',
      redirect: '/home',  // Redirigir a la vista Home por defecto
    },
  ],
})

export default router
