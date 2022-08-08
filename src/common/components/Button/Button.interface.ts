export namespace IButton {
    export interface IProps {
        name: string;
        type?: "button" | "reset" | "submit"; // type?: "button" | "reset" | "submit" | undefined;
        width?: number;
        height?: number;
        fontSize?: number;
        color?: string;
        backgroundColor?: string;
        onClick?: () => void;
    }
    export interface IVProps extends IProps {}
}
