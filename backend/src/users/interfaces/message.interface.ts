import { UserInterface } from "./user.interface"

export interface MessageInterface {
    readonly success: boolean;
    readonly status: string;
    readonly message: string;
    readonly originalMessage?: string;
    readonly user?: UserInterface;
    readonly users?: Array<UserInterface>;
}