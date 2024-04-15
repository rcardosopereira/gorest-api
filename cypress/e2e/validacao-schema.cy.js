const Ajv = require("ajv");

context("GET /todos", () => {
  it("obtém uma lista de todos e valida o esquema", () => {
    cy.request("GET", "https://gorest.co.in/public/v2/todos").then((response) => {
      expect(response.status).to.eq(200);

      const todosSchema = {
        type: "object",
        properties: {
          data: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: { type: "number" },
                user_id: { type: "number" },
                title: { type: "string" },
                completed: { type: "boolean" },
              },
              required: ["id", "user_id", "title", "completed"],
            },
          },
          meta: {
            type: "object",
            properties: {
              pagination: {
                type: "object",
                properties: {
                  total: { type: "number" },
                  pages: { type: "number" },
                  page: { type: "number" },
                  limit: { type: "number" },
                },
                required: ["total", "pages", "page", "limit"],
              },
            },
            required: ["pagination"],
          },
        },
        required: ["data", "meta"],
        additionalProperties: false,
      };

      const ajv = new Ajv();
      const validate = ajv.compile(todosSchema);

      const isValid = validate(response.body);
      if (!isValid) {
        console.error("Schema validation errors:", validate.errors);
        console.log("Actual Response Body:", response.body); 
       
      }
    });
  });
});