
/**
 * @jest-environment node
 */
import request from "supertest";
import { GET } from '../../../src/app/api/tasks/route';

describe("GET api/tasks", () => {
  test("Se GET api/tasks retorna um array de tarefas", async () => {
    request(GET)
      .get('/tasks')
      .end((err, res) => {
        console.log({ err, res });
      });
  });
});
