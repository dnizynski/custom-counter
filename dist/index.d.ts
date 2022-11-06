interface CustomCounterProps {
    initialValue?: number;
}

declare const CustomCounter: ({ initialValue }: CustomCounterProps) => JSX.Element;

interface ButtonProps {
    onClick?: () => void;
    text?: string;
}

declare const Button: ({ onClick, text }: ButtonProps) => JSX.Element;

export { Button, CustomCounter };
