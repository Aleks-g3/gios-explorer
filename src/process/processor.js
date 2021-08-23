import {consume} from "./consumer.js";
import Config from "../config/config.js";

class Processor {
    constructor() {
        this.process = this.process.bind(this);
    }

    async process(){
        await new Promise(()=>{
            consume(Config.KAFKA_TOPIC)
        })
    }
}

export default Processor;