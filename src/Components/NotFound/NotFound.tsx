import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section className="w-full flex h-screen space-y-14 items-center flex-col justify-center">
            <div className="flex flex-col items-center space-y-2 lg:space-y-4">
                <h1 className="font-bold text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-wider">404</h1>
                <p dir="rtl" className="lg:text-xl">صفحه مورد نظر شما یافت نشد!</p>
            </div>
            <Link to={"/"} className="w-fit bg-primary p-4 text-white rounded-2xl transition-all duration-300 focus:ring-4 ring-amber-300 outline-none hover:bg-hover hover:ring-4 ring-dark mb-2">بازگشت به صفحه اصلی</Link>
        </section>
    );
}
