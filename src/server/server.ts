import express = require("express");
import { router } from "../router/router";

const path = require("path");
const morgan = require("morgan");
const cors = require("cors");

export default class Server {
  public app: express.Application;

  constructor(private port: number) {
    this.app = express();
    this.settings();
    this.router();
  }

  public settings() {
    this.app.use(express.json());
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: false }));
  }
  router() {
    this.app.use(router);
  }
  start() {
    this.app.listen(this.port);
  }
  static init(port: number): Server {
    return new Server(port);
  }
}
