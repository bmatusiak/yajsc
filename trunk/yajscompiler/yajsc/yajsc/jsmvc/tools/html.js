function htmlTool()
{}

function htmlTool.prototype.center(str : String) : String     // Define Method
{
    return "<center>"+str+"</center>";
};

function htmlTool.prototype.h1(str : String) : String     // Define Method
{
    return "<h1>"+str+"</h1>";
};

tools["html"]= new htmlTool();