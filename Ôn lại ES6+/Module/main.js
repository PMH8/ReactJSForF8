import logger from "./logger.js";
import * as constant from './constant.js'

logger("this is log",constant.TYPE_ERROR);
logger("this is log",constant.TYPE_WARN);

console.log(constant);