/// <reference types="react" />
interface CustomCounterProps {
    initialValue?: number;
}

declare const CustomCounter: ({ initialValue }: CustomCounterProps) => JSX.Element;

export { CustomCounter };
