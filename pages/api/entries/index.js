import { listProducts} from 'graphQL/fauna_queries'
//import { ALL_PRODUCTS} from 'graphQL/apollo_queries'

export default async function APIHandler(req, res) {
  const RequestHandlers = {
    GET: async () => {
      const entries = await listProducts();

      res.json(entries)

    },

    // POST: async () => {
    //   const {
    //     body: { name, message },
    //   } = req
    //   const created = await createGuestbookEntry({
    //     name,
    //     message,
    //     createdAt: new Date(),
    //   })

    //   res.json(created)
    // },
  }

  if (!RequestHandlers[req.method]) {
    return res.status(405).end()
  }

  await RequestHandlers[req.method]()
}
