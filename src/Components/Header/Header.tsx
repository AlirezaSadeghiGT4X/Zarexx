import DarkLightMode from "./DarkLightMode";
import Logo from "./Logo";
import Time from "./Time";

export default function Header() {
    return (
        <header className="flex justify-around w-full bg-white dark:bg-neutral-900 items-center py-2 md:py-3 xl:py-4 xl:gap-30">
            <DarkLightMode />
            <Logo />
            <Time />
        </header>
    )
}