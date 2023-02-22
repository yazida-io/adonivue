import { createRouter, createWebHistory } from 'vue-router'

import routes from '../routes'

const router = createRouter({
  history: createWebHistory('/client'),
  routes,
})

const middlewarePipeline = (context, middleware, index) => {
  const nextMiddleware = middleware[index] || null

  if (!nextMiddleware) {
    return context.next
  }

  return (...parameters) => {
    context.next(...parameters)
    const nextPipeline = middlewarePipeline(context, middleware, index + 1)
    nextMiddleware({ ...context, next: nextPipeline })
  }
}

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.middleware)) {
    const middleware = to.matched
      .filter((record) => record.meta.middleware)
      .map((record) => record.meta.middleware)
      .flatMap((middleware) => (Array.isArray(middleware) ? middleware : [middleware]))

    const context = {
      to,
      from,
      next,
      // store,
      // redirect,
    }

    return middleware[0]({
      ...context,
      next: middlewarePipeline(context, middleware, 1),
    })
  }

  return next()
})

export default router
