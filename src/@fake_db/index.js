var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet("/actors").reply(200, {
  actors: [
    {
      actorid: 1,
      actorname: "actor1",
      actorstatus: "1",
    },
    {
      actorid: 2,
      actorname: "actor2",
      actorstatus: "0",
    },
  ],
  switch: [
    {
      on: 0,
      title: "",
    },
  ],
});

mock.onPost("/switch").reply(200, {
  actorid: 1,
  actorstatus: 1,
});
