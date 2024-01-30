import { InputBase$ChangeEvent } from "sap/m/InputBase";
import MessageBox from "sap/m/MessageBox";
import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";

interface Recipient {
    recipient: {
        name: string
    }
}

/**
 * @namespace typescriptapp.controller
 */
export default class View1 extends Controller {

    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {
        const oData: Recipient = {
            recipient: {
                name: "World"
            }
        }
        const oModel = new JSONModel(oData);
        this.getView()!.setModel(oModel);
    }

    onShowHello() {
        // const data: Recipient = (this.getView()!.getModel() as JSONModel).getData();
        const data: Recipient = (<JSONModel> this.getView()!.getModel()).getData();
        const name = data.recipient.name;
        MessageBox.show(`Hello ${name}`);
    }

    onLiveChange(evt: InputBase$ChangeEvent) {
        const value = evt.getParameter("value");
        MessageToast.show(`Value changed to ${value}`);
    }

}