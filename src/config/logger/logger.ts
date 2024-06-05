import CONFIG from "../../../config.json"

class CustomLogger{

    private logLevel = CONFIG.LOGGER_LEVEL

    public log(message : string) : void{
        if(this.logLevel != "ON")return
        console.log(message)
    }
}
const Logger = new CustomLogger()
export default Logger