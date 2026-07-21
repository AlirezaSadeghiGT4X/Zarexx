import { useEffect, useState } from "react";
import { FetchData } from "./FetchData";
import type { Data } from "./Types/Types";
import { SortData } from "./SortData";

export default function Prices() {
	const [data, setData] = useState<Data | null>(null);
	useEffect(() => {
		const load = async () => {
			const result = await FetchData();
			if (result) {
				setData(result);
			}
		};
		load();
		const interval = setInterval(load, 30000);
		return () => clearInterval(interval);
	}, []);
	const assets = SortData(
		data ?? { gold: [], currency: [], cryptocurrency: [] },
	);
	console.log(assets)
	return (
		<section>
			
		</section>
	);
}
