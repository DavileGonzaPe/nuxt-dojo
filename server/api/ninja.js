export default defineEventHandler(async (event) => {

    // //Handle query params
    // const { name } = getQuery(event)

    // //Handle post data
    // const { age } = await readBody(event)

    //API call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=JjAhbNIbC3HkGsQBSWXa5l8ZReoo9odT4hm2tTBO')

    return data
})