import { cn } from "@/lib/utils";

type AProps = {
    href: string;
    name?: React.ReactNode;
    className?: string; 
    arrow?: boolean | null;
    children?: React.ReactNode;
    rel?: string;
};

export default function A({ href, name, className, arrow, children, rel }: AProps) {
    return (
        <a 
            href={href}
            className={cn(
                "underline hover:decoration-solid decoration-dashed ease-in-out duration-200 font-normal",
                className
            )}
            target="_blank"
            rel={rel ?? "noopener noreferrer"}
        >
            <span className="no-underline">{arrow && "»"}</span>
            {name}
            {children}
        </a>
    );
}
