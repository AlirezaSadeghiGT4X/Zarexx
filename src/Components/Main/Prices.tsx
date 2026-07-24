import { useEffect, useState } from "react";
import { FetchData } from "./FetchData";
import type { Data } from "./Types/Types";
import { SortData } from "./SortData";
import Price from "./Price";
import Loading from "./Loading";
import { motion } from "motion/react";

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
	//*Handle show loading...
	const [status, setStatus] = useState<string>("false");
	setInterval(() => {
		const getFromLocalStorage = localStorage.getItem("status");
		if (getFromLocalStorage) {
			setStatus(getFromLocalStorage);
		}
	}, 100);
	return (
		<section className="w-4xl flex justify-center items-start">
			{status == "true" ? (
				<motion.div
					initial={{ transform: "translateY(1000px)" }}
					animate={{ transform: "translateY(0px)" }}
					transition={{ type: "decay" }}
					className="w-full"
				>
					<div className="grid grid-cols-2 gap-4">
						{assets.map((asset, index) => (
							<Price
								id={asset.id}
								name={asset.name}
								price={asset.price}
								changeValue={asset.changeValue}
								changePercent={asset.changePercent}
								key={index}
							/>
						))}
					</div>
				</motion.div>
			) : (
				<Loading />
			)}
		</section>
	);
}
