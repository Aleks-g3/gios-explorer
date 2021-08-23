import Measurement from "./measurement.js";

export const getMeasurement = (measurement)=>{
    return mapRow(measurement)
}

const mapRow = (row) => {
    return (row) ? new Measurement(row.station, row.oldPm10, row.newPm10, row.source, row.timestamp) : null;
}