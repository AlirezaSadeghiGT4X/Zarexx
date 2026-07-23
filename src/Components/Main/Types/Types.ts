export interface Asset {
    readonly id: number;
    readonly name: string;
    price: number;
    changeValue?: string | undefined;
    changePercent: number;
}
export type AData = {
    date: string,
    time: string,
    time_unix: number,
    symbol: string,
    name_en: string,
    name: string,
    price: string,
    change_value: string | undefined,
    change_percent: number,
    unit: string
    description?: string
}
export type Data = {
    gold: Array<AData>,
    currency: Array<AData>,
    cryptocurrency: Array<AData>
}
export type priceProps = {
    id: number,
    name: string,
    price: number,
    changeValue: string | undefined,
    changePercent: number
}
export type symbolProps = {
    id: number
}