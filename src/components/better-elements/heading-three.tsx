import { cn } from "@/lib/utils";

type Props = {
    className?: string;
}

export default function H1({ children, className }: Props & { children: React.ReactNode }) {
    return (
        <h3 className={cn(`font-bold text-lg`, className)}>{children}</h3>
    );
}