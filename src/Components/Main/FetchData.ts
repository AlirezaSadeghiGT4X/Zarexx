import type { Data } from "./Types/Types"

export async function FetchData() {
    try {
        const fetchedData = await fetch("https://api.brsapi.ir/Market/Gold_Currency.php?key=B6XD3NY59A9eN7HhIphJAcv8A35tLA6f")
        if (!fetchedData.ok) {
            throw new Error("Failed to catch data")
        }
        const jsonData = await (fetchedData.json()) as Data
        return jsonData
    }
    catch (err) {
        console.log(err)
    }
}