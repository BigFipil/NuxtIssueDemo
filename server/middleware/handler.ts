export default defineEventHandler(async (event) => {
  const { req } = event.node
  const urlObject = getRequestURL(event)

  if(urlObject.pathname.includes('asdfmovie4')) {
    throw createError({
      statusCode: 418,
      statusMessage: "I'm a teapot"
    })
  }
})
