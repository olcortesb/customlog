'use strict'

class CustomLogs {
    constructor(className , stage, version) {
        this._stage = stage
        this._version = version;
        this._name = className;
        this._classname = className;
    }

    logRequest(msj,body,session){
        let psession = session ? session.split("/").pop() : " "
        let mlog = "[Request]" + " " + this._stage + " " + this._version + " " + this._name +" "+ JSON.stringify(msj) +
            " " + JSON.stringify(body) + " " + psession;
        console.log(mlog);
    }
    logResponse(msj,body,session){
        let psession = session ? session.split("/").pop() : " "
        let mlog = "[Response]" + " " + this._stage + " " + this._version + " " + this._name +" "+ JSON.stringify(msj) +
            " "  + JSON.stringify(body)+ " " + psession;
        console.log(mlog);
    }
    logError(msj,body,session){
        let psession = session ? session.split("/").pop() : " "
        let mlog = "[Error]" + " " + this._stage + " " + this._version + " " + this._name +" " + JSON.stringify(msj) +
            " " + JSON.stringify(body)+ " " + psession;
        console.log(mlog);
    }
    logInfo(msj,body,session){
        let psession = session ? session.split("/").pop() : " "
        let mlog = "[Info]" + " " + this._stage + " " + this._version + " " + this._name +" " + JSON.stringify(msj) +
            " " + JSON.stringify(body)+ " " + psession;
        console.log(mlog);
    }
}

exports.CustomLogs = CustomLogs;
