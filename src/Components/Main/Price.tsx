import Symbol from "./Symbol";
import type { priceProps } from "./Types/Types";

export default function Price({
	id,
	name,
	price,
	changeValue,
	changePercent,
}: priceProps) {
	let changeValueFloat: number | undefined = undefined;
	if (changeValue) changeValueFloat = parseFloat(changeValue);
	return (
		<article
			className={`w-full h-24 rounded-lg shadow-sm ${changePercent > 0 ? "dark:shadow-green-400 shadow-green-700" : changePercent < 0 ? "dark:shadow-rose-400 shadow-rose-700" : "shadow-black"} flex flex-col lg:flex-row lg:justify-between justify-center items-center gap-1.5 text-zinc-900 dark:text-zinc-200`}
		>
			<span className="flex items-center gap-1 lg:w-1/2 justify-center">
				<Symbol id={id} />
				<p>{name}</p>
			</span>
			<div className="flex flex-col justify-center items-center gap-1.5 lg:w-1/2">
				<div className="flex items-center gap-1 justify-center">
					<span>{price.toLocaleString("fa-IR")}</span>
					<span className="hidden lg:block"> :قیمت فعلی</span>
				</div>
				<div className="text-sm flex gap-1">
					<div
						className={`${changePercent < 0 ? "dark:text-rose-400 text-rose-700" : changePercent > 0 ? "dark:text-green-400 text-green-700" : "text-zinc-900 dark:text-zinc-200"} space-x-1`}
					>
						<span>{changeValueFloat?.toLocaleString("fa-IR")}</span>
						<span>({changePercent.toLocaleString("fa-IR")} %)</span>
					</div>
					<span className="hidden lg:block"> :تغییرات روزانه</span>
				</div>
			</div>
		</article>
	);
}
