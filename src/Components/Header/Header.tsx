import DarkLightMode from "./DarkLightMode";
import Logo from "./Logo";
import Time from "./Time";

export default function Header() {
    return (
        <header className="flex justify-between px-8 sm:px-16 md:px-20 lg:px-28 xl:px-32 w-full bg-white dark:bg-neutral-900 items-center py-2 md:py-3 xl:py-4 xl:gap-30 transition-all duration-500 md:pt-2">
            <DarkLightMode />
            <Logo />
            <Time />
        </header>
    )
}