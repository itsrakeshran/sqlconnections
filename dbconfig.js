import { createRequire } from "module";
const require = createRequire(import.meta.url);
const sql = require('mssql/msnodesqlv8')


export async function sqlQuery(query){
    let result = await sql.query(query)
    return result;
}


async function dbconection(config) {
    try {
        // let pool = await sql.connect(config);
        await sql.connect(config);
        console.log("Db connection open....")
    } catch (err) {
        console.error({"Db connection error":err});
    }
}

export default dbconection;