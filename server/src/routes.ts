import { Router } from "express";

const router = Router();

router.get('/', (request, response) => {
  return response.json({
    message: 'Server initialized!'
  });
});

export {
  router
}