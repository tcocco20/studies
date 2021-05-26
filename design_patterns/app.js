import { builder1 } from "./builder_pattern_generic.js";
import { builder2 } from "./builder_pattern_js.js";
import { facade } from "./facade_pattern.js";
import { factory } from "./factory_pattern.js";
import { mediator } from "./mediator_pattern.js";
import { proxy } from "./proxy_pattern.js";
import { singleton } from "./singleton_pattern.js";
import { strategy } from "./strategy_pattern.js";

const patterns = {
  builder1,
  builder2,
  factory,
  proxy,
  singleton,
  strategy,
  facade,
  mediator,
};

const run = patterns.mediator;

run();
