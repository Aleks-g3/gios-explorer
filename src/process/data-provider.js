import pool from "../config/database.js";



const enrichedDataQuery = `
    select *
    from enriched_data
    where station like $1
    and timestamp = $2
    order by timestamp, id
`;

const insertUpdatedDataQuery = `
insert into updated_data
(timestamp,
 station,
 old_pm10,
 new_pm10,
 source)
 values 
 (
  $1,
  $2,
  $3,
  $4,
  $5
 )`




export const insertMeasurement = async (measurement)=>{
return await pool.query(insertUpdatedDataQuery,[measurement.timestamp,measurement.stationName,measurement.oldPm10Value,measurement.newPm10Value,measurement.source])
    .catch(err => console.error(`Error occurred during updated_data query: ${err.message}`));
}

