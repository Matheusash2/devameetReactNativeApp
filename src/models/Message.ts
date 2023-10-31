export interface IMessage {
    isOpen?: boolean | null;
    title?: string | null;
    messages?: string[] | null;
    isCancelable?: boolean | null;
    action?: () => void | null | Promise<void>
}