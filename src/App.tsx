import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page from "./Components/Page";
import NotFound from "./Components/NotFound/NotFound";
import Yektanet from "./Components/Advertisement/Yektanet";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route element={<Page />} path={"/"} />
				<Route element={<NotFound />} path={"*"} />
			</Routes>
			<Yektanet />
		</Router>
	);
}
