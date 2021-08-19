import { listProducts} from 'graphQL/fauna'

export default async function APIHandler(req, res) {
  const RequestHandlers = {
    GET: async () => {
      const products = await listProducts();

      res.json(products)

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
