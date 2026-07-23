import type { ReactNode } from "react";

export default function Loading(): ReactNode {
	return (
		<video autoPlay muted loop playsInline width="120" height="120">
			<source src="/Animations/Loading.webm" type="video/webm"></source>
		</video>
	);
}
