import fastify from "fastify";
import path from "path";
import { fileURLToPath } from "url";
import { AsyncDatabase } from "promised-sqlite3";

const server = fastify({
  logger: {
    transport: {
      target: "pino-pretty",
    },
  },
});

const PORT = process.env.PORT || 3000;
const HOST = "RENDER" in process.env ? `0.0.0.0` : `localhost`;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = await AsyncDatabase.open("./wekneadit.sqlite");

server.addHook("preHandler", (req, res, done) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST");
  res.header("Access-Control-Allow-Headers", "*");

  const isPreflight = /options/i.test(req.method);
  if (isPreflight) {
    return res.send();
  }
  done();
});

server.get("/api/bakeries", async function getBakeries(req, res) {
  const bakeriesPromise = db.all(
    "SELECT bakery_id, name, description, rating, latitude, longitude FROM bakeries",
  );
  console.log(`get("/api/bakeries"`);
  const [bakeries] = await Promise.all([bakeriesPromise]);
  console.log(`get("/api/bakeries" has returned ${bakeries.length} responses.`);

  const responsebakeries = bakeries.map((bakery) => {
    return {
      id: bakery.bakery_id,
      name: bakery.name,
      description: bakery.description,
      image: bakery.image,
      rating: bakery.rating,
      latitude: bakery.latitude,
      longitude: bakery.longitude,
    };
  });
  console.log(`get("/api/bakeries" sending response`);

  res.send(responsebakeries);
});

server.get("/api/featured_items", async function getFeaturedItems(req, res) {
  const featuredPromise = db.all(
    "SELECT b.bakery_id, b.name as bakery_name, b.latitude, b.longitude, b.rating,	bi.name as item_name,	bi.image,	bi.description FROM bakeries b INNER JOIN featured_bakery_items fi	ON b.bakery_id = fi.bakery_id INNER JOIN bakery_items bi ON fi.item_id = bi.bakery_item_id",
  );
  const [featured] = await Promise.all([featuredPromise]);

  const responsefeatured = featured.map((featured) => {
    return {
      id: featured.bakery_id,
      bakery_name: featured.bakery_name,
      item_name: featured.item_name,
      description: featured.description,
      image: featured.image,
      rating: featured.rating,
      latitude: featured.latitude,
      longitude: featured.longitude,
    };
  });

  console.log("Got all these responses:");
  responsefeatured.forEach((element) => {
    console.log(element);
  });

  res.send(responsefeatured);
});
server.get("/api/bakery_items", async function getFeaturedItems(req, res) {
  const itemsPromise = db.all("SELECT * FROM bakery_items");
  const [items] = await Promise.all([itemsPromise]);

  // const responseItems = featured.map((items) => {
  //   return {
  //     id: featured.bakery_id,
  //     bakery_name: featured.bakery_name,
  //     item_name: featured.item_name,
  //     description: featured.description,
  //     image: featured.image,
  //     rating: featured.rating,
  //     latitude: featured.latitude,
  //     longitude: featured.longitude,
  //   };
  // });

  console.log("Got all these responses:");
  items.forEach((element) => {
    console.log(element);
  });

  res.send(items);
});
server.get("/api/categories", async function getFeaturedItems(req, res) {
  const promise = db.all("SELECT * FROM catagories");
  const [items] = await Promise.all([promise]);


  console.log("Got all these responses:");
  items.forEach((element) => {
    console.log(element);
  });

  res.send(items);
});

// post example

// server.post("/api/order", async function createOrder(req, res) {
//   const { cart } = req.body;

//   const now = new Date();
//   // forgive me Date gods, for I have sinned
//   const time = now.toLocaleTimeString("en-US", { hour12: false });
//   const date = now.toISOString().split("T")[0];

//   if (!cart || !Array.isArray(cart) || cart.length === 0) {
//     res.status(400).send({ error: "Invalid order data" });
//     return;
//   }

//   try {
//     await db.run("BEGIN TRANSACTION");

//     const result = await db.run(
//       "INSERT INTO orders (date, time) VALUES (?, ?)",
//       [date, time],
//     );
//     const orderId = result.lastID;

//     const mergedCart = cart.reduce((acc, item) => {
//       const id = item.pizza.id;
//       const size = item.size.toLowerCase();
//       if (!id || !size) {
//         throw new Error("Invalid item data");
//       }
//       const pizzaId = `${id}_${size}`;

//       if (!acc[pizzaId]) {
//         acc[pizzaId] = { pizzaId, quantity: 1 };
//       } else {
//         acc[pizzaId].quantity += 1;
//       }

//       return acc;
//     }, {});

//     for (const item of Object.values(mergedCart)) {
//       const { pizzaId, quantity } = item;
//       await db.run(
//         "INSERT INTO order_details (order_id, pizza_id, quantity) VALUES (?, ?, ?)",
//         [orderId, pizzaId, quantity],
//       );
//     }

//     await db.run("COMMIT");

//     res.send({ orderId });
//   } catch (error) {
//     req.log.error(error);
//     await db.run("ROLLBACK");
//     res.status(500).send({ error: "Failed to create order" });
//   }
// });

const start = async () => {
  try {
    await server.listen({ host: HOST, port: PORT });
    console.log(`Server listening on port ${PORT}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
