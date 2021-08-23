import {date} from "./date.js";

class Measurement {
    constructor(stationName, newPm10Value, oldPm10Value, source, timestamp) {
        this.stationName = stationName;
        this.newPm10Value = newPm10Value;
        this.oldPm10Value = oldPm10Value;
        this.source = source
        this.timestamp = date(timestamp);
    }

    fu
}

export default Measurement;