import { InputBase$ChangeEvent } from "sap/m/InputBase";
import MessageBox from "sap/m/MessageBox";
import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";

interface Recipient {
    name: string,
    email?: string,
    phone?: string
}

const RecipientKeys: {[K in keyof Recipient]: K} = {
    name: "name",
    email: "email",
    phone: "phone"
}

/**
 * @namespace typescriptapp.controller
 */
export default class View1 extends Controller {

    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {
        const recipient: Recipient = {
            name: "World"
        }
        const oModel = new JSONModel(recipient);
        this.getView()!.setModel(oModel);
    }

    onShowHello() {
        const name = (this.getView().getModel() as JSONModel).getProperty(RecipientKeys.name);
        MessageBox.show(`Hello ${name}`);
    }

    onLiveChange(event: InputBase$ChangeEvent) {
        const value = event.getParameter("value");
        MessageToast.show(`Value changed to ${value}`);
    }

}