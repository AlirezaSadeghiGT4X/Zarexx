/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react"
import type { Asset, Data } from "./Types/Types"

export function SortData(data: Data) {
    const [assets, setAssets] = useState<Asset[]>([])
    useEffect(() => {
        const favorites: Array<Asset> = []
        if (data.gold.length > 0) {
            favorites.push({
                name: "طلا 18 عیار",
                price: data.gold[0].price,
                changeValue: data.gold[0].change_value,
                changePercent: data.gold[0].change_percent,
            })
            setAssets(favorites)
        }
    }, [data])
    return assets
}   