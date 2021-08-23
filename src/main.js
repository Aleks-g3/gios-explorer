import Processor from "./process/processor.js";
import cron from "node-cron";
import Config from "./config/config.js";

const main = async () => {

    const processor= new Processor();
    // await cron.schedule(Config.CRON, processor.process, undefined);
    await processor.process();
}

(async () => await main())();
