import * as express from 'express';
import { Application } from '../application/application';

export class HttpService {
  data = [
    {body: 'this is post body - 1', id: 1, title: 'title of post - 1', userId: 1},
    {body: 'this is post body - 2', id: 2, title: 'title of post - 2', userId: 2},
    {body: 'this is post body - 3', id: 2, title: 'title of post - 3', userId: 3},
  ];

  constructor() {
    Application.instance.register('/http', this);
  }

  public add(): express.Router {
    // route: /http --------------------------------------------------------------
    const router = express.Router();

    router.get('/', (req, res, next) => {
      console.log('got request');
        res.json({
          message: 'sanity is ok'
        });
    });
    
    router.get('/get', (req, res) => {
      // route: /http/post ...
      console.log('http: GET got call from client post ' + req);
      console.log('http: GET data received was: ' + JSON.stringify(req.body));

      // set the appropriate HTTP header
      res.setHeader('Content-Type', 'application/json');
      res.json(this.data);
    });
    
    router.post('/post', (req, res) => {
      // route: /http/post ...
      console.log('angular: POST got call from client post ' + req);
      console.log('angular: POST data received was: ' + JSON.stringify(req.body));

      // set the appropriate HTTP header
      res.setHeader('Content-Type', 'application/json');

      res.json({
        id: this.data.length
      });
    });

    return router;
  // --------------------------------------------------------------------------
  }
}

export default new HttpService();
