import DarkLightMode from "./DarkLightMode";
import Logo from "./Logo";
import Time from "./Time";

export default function Header() {
    return (
        <header className="flex justify-around w-full">
            <DarkLightMode />
            <Logo />
            <Time />
        </header>
    )
}