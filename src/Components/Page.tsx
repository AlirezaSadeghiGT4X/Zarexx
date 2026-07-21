import Header from "./Header/Header";
import Main from "./Main/Main";

export default function Page() {
    return (
        <section className="scroll-smooth h-screen flex flex-col">
            <Header />
            <Main />
        </section>
    )
}