import test from "ava";
import request from "supertest";
import app from "../app";

test("Index page should be rendered", async t => {
    const res = await request(app).get("/");

    t.is(res.status, 200);
    t.true(res.text.includes('hello there 👋'));
});


test("List of people view render", async t => {
  const personToCreate = { name: "Armagan Amcalar Render", age: 33 };

  const creation = await request(app)
    .post("/person")
    .send(personToCreate);

  const res = await request(app).get("/person/all-list");

  t.is(res.status, 200);
  t.true(res.text.includes('Armagan Amcalar Render'));
});

test("People detail view render", async t => {
  const personToCreate = { name: "Armagan Amcalar Detail Render", age: 33 };

  const createdPerson = (await request(app)
    .post("/person")
    .send(personToCreate)).body;

  const res = await request(app).get(`/person/${createdPerson._id}`);

  t.is(res.status, 200);
  t.true(res.text.includes('Armagan Amcalar Detail Render'));
});

test("List of meetup view render", async t => {
    const meetupToCreate = {
        name: 'WTM Testing Render',
        location: 'Eurostaff',
        attendees: []
    };

    const creation = await request(app)
      .post("/meetup")
      .send(meetupToCreate);

    const res = await request(app).get("/meetup/all-list");

    t.is(res.status, 200);
    t.true(res.text.includes('WTM Testing Render'));
  });

  test("Meetup detail render", async t => {
    const meetupToCreate = {
        name: 'WTM Testing Detail Render',
        location: 'Eurostaff',
        attendees: []
    };

    const createdMeetup = (await request(app)
      .post("/meetup")
      .send(meetupToCreate)).body;

    const res = await request(app).get(`/meetup/${createdMeetup._id}`);

    t.is(res.status, 200);
    t.true(res.text.includes('WTM Testing Detail Render'));
  });
