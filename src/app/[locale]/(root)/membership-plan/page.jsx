import { Button } from "@/components/ui/button"

export default function Component() {
    return (
        <div className="w-full max-w-3xl mx-auto pb-12 md:pb-24">
            <div className="space-y-4 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Membership Plans</h1>
                <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed">
                    Choose the plan that fits your needs and unlock exclusive benefits.
                </p>
            </div>
            <div className="grid gap-6 mt-8 md:grid-cols-2">
                <div className="border rounded-lg overflow-hidden">
                    <div className="bg-primary text-primary-foreground p-6 text-center">
                        <h2 className="text-2xl font-bold">Basic</h2>
                        <p className="text-4xl font-bold">$9/mo</p>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="flex items-center gap-2">
                            <CheckIcon className="w-5 h-5 text-green-500" />
                            <span>Access to all articles</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckIcon className="w-5 h-5 text-green-500" />
                            <span>Exclusive newsletter</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckIcon className="w-5 h-5 text-green-500" />
                            <span>Community forums</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <XIcon className="w-5 h-5 text-red-500" />
                            <span>Premium features</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <XIcon className="w-5 h-5 text-red-500" />
                            <span>Personalized support</span>
                        </div>
                    </div>
                    <div className="bg-muted p-4 text-center">
                        <Button className="w-full">Sign Up</Button>
                    </div>
                </div>
                <div className="border rounded-lg overflow-hidden">
                    <div className="bg-primary text-primary-foreground p-6 text-center">
                        <h2 className="text-2xl font-bold">Premium</h2>
                        <p className="text-4xl font-bold">$19/mo</p>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="flex items-center gap-2">
                            <CheckIcon className="w-5 h-5 text-green-500" />
                            <span>Access to all articles</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckIcon className="w-5 h-5 text-green-500" />
                            <span>Exclusive newsletter</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckIcon className="w-5 h-5 text-green-500" />
                            <span>Community forums</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckIcon className="w-5 h-5 text-green-500" />
                            <span>Premium features</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckIcon className="w-5 h-5 text-green-500" />
                            <span>Personalized support</span>
                        </div>
                    </div>
                    <div className="bg-muted p-4 text-center">
                        <Button className="w-full">Sign Up</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CheckIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}


function XIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}