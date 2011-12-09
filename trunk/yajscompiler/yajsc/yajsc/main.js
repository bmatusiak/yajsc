/// <reference path="package-test.js" />
import System;
import yajsc;
//var main : Main = new Main;
class Main
{
    public function Main()
    {
        Console.WriteLine("Construct Main.js");
        
    }
    public function main(args : String[]) : void
    {
        Console.WriteLine("main(args : String[])");
        new yajsc.MyForm;
    }
}