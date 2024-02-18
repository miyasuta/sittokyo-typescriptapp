import Controller from "sap/ui/core/mvc/Controller";

/**
 * @namespace typescriptapp.controller
 */
export default class View1 extends Controller {

    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {       
        const recipient =  {
            recipientName : "World"
        };
        // JSONモデルを作成

        // Viewに登録
    }

    public onLiveChange() {
        // イベントパラメータ：valueを取得

        // MessageToastで表示
        // MessageToast.show(`Value changed to ${value}`);
    }
        public onShowHello() {
        // ViewModelからrecipientNameを取得
        
        // MessageBoxで表示
        // MessageBox.show(`Hello ${name}`);
    }
}