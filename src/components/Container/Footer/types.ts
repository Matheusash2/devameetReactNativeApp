import { IActionProps } from "../../../models/ActionProps";
import { IStore } from "../../../models/Store";

export interface IFooter extends IActionProps, IStore {
    currentTab: string,
}