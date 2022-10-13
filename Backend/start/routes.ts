import Route from '@ioc:Adonis/Core/Route'


Route.group(
  () => {
    Route.get("/", () => {
      return { hello : "world"}
    });

    Route.post("/signup", ({ request }) => {
    request.body()
  })

}).prefix("/api");

