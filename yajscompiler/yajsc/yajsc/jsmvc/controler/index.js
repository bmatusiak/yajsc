function DocClick(){}

function DocClick.prototype.Start(sender,eArg){
    switch(sender.ActiveElement.Id){
        case "jew" :
            print(sender.ActiveElement.Id);
            break;
        case "jew" :
            print(sender.ActiveElement.Id);
            break;
        case "jew" :
            print(sender.ActiveElement.Id);
            break;
        case "settings" :
            print(sender.ActiveElement.Id);
            break;
        default :
            print("Undefined Button: " + sender.ActiveElement.Id);
    }
    
}
events["DocClick"]["index"] = new DocClick();