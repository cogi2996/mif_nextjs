import Header from "@/components/header";

export default function RootLayout({
    children,
}) {
    return (
        <main>
            <Header />
            <main className="xl:px-36 lg:px-2 md:px-2 px-1 pt-24">
                {children}
            </main>
        </main>
    );
}