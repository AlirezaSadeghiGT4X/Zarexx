import type { Data } from "./Types/Types"

export async function FetchData() {
    try {
        const fetchedData = await fetch(import.meta.env.VITE_PRICES_API_LINK)
        if (!fetchedData.ok) {
            throw new Error("Failed to catch data")
        }
        const jsonData = await (fetchedData.json()) as Data
        localStorage.setItem("status", "true")
        return jsonData
    }
    catch (err) {
        console.log(err)
    }
}