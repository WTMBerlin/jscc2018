import test from "ava";
import request from "supertest";
import app from "../app";

test("Get list of people", async t => {
  const personToCreate = { name: "Armagan Amcalar", age: 33 };

  const creation = await request(app)
    .post("/person")
    .send(personToCreate);

  const res = await request(app).get("/person/all");

  t.is(res.status, 200);
  t.true(Array.isArray(res.body), "Body should be an array");
  t.true(res.body.length > 0);
});

test("Create new person", async t => {
  t.plan(3);
  const personToCreate = { name: "Armagan Amcalar", age: 33 };

  const res = await request(app)
    .post("/person")
    .send(personToCreate);

  t.is(res.status, 200);
  t.is(res.body.name, personToCreate.name);
  t.is(res.body.age, personToCreate.age);
});

test("Fetch a person", async t => {
  t.plan(2);
  const personToCreate = { name: "Armagan Amcalar", age: 33 };

  const armaganUserCreated = (await request(app)
    .post("/person")
    .send(personToCreate)).body;

  const fetchRes = await request(app).get(
    `/person/${armaganUserCreated._id}/json`
  );

  const armaganUserFetched = fetchRes.body;

  t.is(fetchRes.status, 200);
  t.deepEqual(armaganUserFetched, armaganUserCreated);
});

test("Delete a person", async t => {
  t.plan(3);

  const person = (await request(app)
    .post("/person")
    .send({ name: "Armagan Amcalar", age: 33 })).body;

  const del = await request(app).delete(`/person/${person._id}`);

  t.is(del.status, 200);
  t.is(del.text, "ok!");

  const fetch = await request(app).get(`/person/${person._id}/json`);

  t.is(fetch.status, 404);
});
