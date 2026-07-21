export interface Asset {
    readonly name: string;
    price: number;
    changeValue: number;
    changePercent: number;
}
export type AData = {
    date: string,
    time: string,
    time_unix: number,
    symbol: string,
    name_en: string,
    name: string,
    price: number,
    change_value: number,
    change_percent: number,
    unit: string
    description?: string
}
export type Data = {
    gold: Array<AData>,
    currency: Array<AData>,
    cryptocurrency: Array<AData>
}