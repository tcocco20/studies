import { builder1 } from "./builder_pattern_generic.js";
import { builder2 } from "./builder_pattern_js.js";
import { facade } from "./facade_pattern.js";
import { factory } from "./factory_pattern.js";
import { mediator } from "./mediator_pattern.js";
import { observer } from "./observer_pattern.js";
import { proxy } from "./proxy_pattern.js";
import { singleton } from "./singleton_pattern.js";
import { strategy } from "./strategy_pattern.js";
import { visitor } from "./visitor_pattern.js";

const patterns = {
  builder1,
  builder2,
  factory,
  proxy,
  singleton,
  strategy,
  facade,
  mediator,
  observer,
  visitor,
};
<<<<<<< HEAD
const run = patterns.visitor;
=======

const run = patterns.builder2;
>>>>>>> b46685f0317e78484178913d0cb4aae2b3c4ae3c

run();
