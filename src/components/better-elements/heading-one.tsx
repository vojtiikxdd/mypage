import { cn } from "@/lib/utils";

type Props = {
    className?: string;
    children: React.ReactNode;
};

export default function H1({ className, children }: Props) {
    return (
        <h1 className={cn(`font-bold text-2xl`, className)}>
            {children}
        </h1>
    );
}
