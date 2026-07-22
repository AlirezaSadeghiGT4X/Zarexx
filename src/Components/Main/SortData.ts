/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react"
import type { Asset, Data } from "./Types/Types"

export function SortData(data: Data) {
    const [assets, setAssets] = useState<Asset[]>([])
    useEffect(() => {
        const favorites: Array<Asset> = []
        if (data.gold.length > 0) {
            favorites.push({
                id: 1,
                name: "طلا ۱۸ عیار",
                price: parseInt(data.gold[0].price),
                changeValue: data.gold[0].change_value,
                changePercent: data.gold[0].change_percent,
            })
            favorites.push({
                id: 2,
                name: "انس طلا",
                price: parseInt(data.gold[3].price),
                changeValue: data.gold[3].change_value,
                changePercent: data.gold[3].change_percent,
            })
            favorites.push({
                id: 3,
                name: "یورو",
                price: parseInt(data.currency[2].price),
                changeValue: data.currency[2].change_value,
                changePercent: data.currency[2].change_percent,
            })
            favorites.push({
                id: 4,
                name: "دلار تتر",
                price: parseInt(data.currency[0].price),
                changeValue: data.currency[0].change_value,
                changePercent: data.currency[0].change_percent,
            })
            favorites.push({
                id: 5,
                name: "ربع سکه",
                price: parseInt(data.gold[5].price),
                changeValue: data.gold[5].change_value,
                changePercent: data.gold[5].change_percent,
            })
            favorites.push({
                id: 6,
                name: "سکه گرمی",
                price: parseInt(data.gold[4].price),
                changeValue: data.gold[4].change_value,
                changePercent: data.gold[4].change_percent,
            })
            favorites.push({
                id: 7,
                name: "سکه امامی",
                price: parseInt(data.gold[7].price),
                changeValue: data.gold[7].change_value,
                changePercent: data.gold[7].change_percent,
            })
            favorites.push({
                id: 8,
                name: "نیم سکه",
                price: parseInt(data.gold[6].price),
                changeValue: data.gold[6].change_value,
                changePercent: data.gold[6].change_percent,
            })
            favorites.push({
                id: 9,
                name: "بیت کوین",
                price: parseInt(data.cryptocurrency[0].price),
                changeValue: data.cryptocurrency[0].change_value,
                changePercent: data.cryptocurrency[0].change_percent,
            })
            favorites.push({
                id: 10,
                name: "سکه بهارآزادی",
                price: parseInt(data.gold[8].price),
                changeValue: data.gold[8].change_value,
                changePercent: data.gold[8].change_percent,
            })
            setAssets(favorites)
        }
    }, [data])
    return assets
}   