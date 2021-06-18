import { bridge } from "./bridge_pattern.js";
import { builder1 } from "./builder_pattern_generic.js";
import { builder2 } from "./builder_pattern_js.js";
import { chain } from "./chain_of_responsibility.js";
import { command } from "./command_pattern.js";
import { decorator } from "./decorator_pattern.js";
import { facade } from "./facade_pattern.js";
import { factory } from "./factory_pattern.js";
import { iterator } from "./iterator_pattern.js";
import { mediator } from "./mediator_pattern.js";
import { nullObject } from "./null_object_pattern.js";
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
  iterator,
  decorator,
  command,
  chain,
  bridge,
  nullObject,
};
const run = patterns.nullObject;

run();
