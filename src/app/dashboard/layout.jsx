import Header from "@/components/header";
import HeaderWithHomeIcon from "@/components/header-with-home-icon";
import { House, LineChart, Newspaper, Package, Users } from "lucide-react";

export default function RootLayout({
    children,
}) {
    return (
        <main>
            <HeaderWithHomeIcon />
            <main className="xl:px-36 lg:px-2 md:px-2 px-1 pt-24">
                <div className='grid grid-cols-5 gap-4'>
                    <div className='grid col-span-1 h-fit'>
                        <div className="grid items-start text-sm font-medium ">
                            <div
                                href="#"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <House className="h-4 w-4" />
                                Trang chủ
                            </div>
                            <div
                                href="#"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <Newspaper className="h-4 w-4" />
                                Tin tức
                            </div>
                            <div
                                href="#"
                                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                            >
                                <Package className="h-4 w-4" />
                                Products{" "}
                            </div>
                            <div
                                href="#"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <Users className="h-4 w-4" />
                                Customers
                            </div>
                            <div
                                href="#"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <LineChart className="h-4 w-4" />
                                Analytics
                            </div>
                        </div>
                    </div>
                    <div className='grid col-span-4'>
                        {children}
                    </div>
                </div>
            </main>
        </main>
    );
}