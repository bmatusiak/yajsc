/// <reference path="package-test.js" />
import System;
import yajsc;

public class Main
{
    public function Main()
    {
        Console.WriteLine("Construct Main.js");
        new TestClass;
        new yajsc.MyForm;
    }
    public function main(args : String[]) : void
    {
        Console.WriteLine("main(args : String[])");
        
    }
}

public class TestClass extends LocalScope
{   
    function TestClass(){
        print('Construct TestClass');
        try{
            globals['testVar']++;
            print(globals['testVar']);
        }catch(e){
            globals['testVar'] = 0;
            print(globals['testVar']);
        }
        globals['test321'] = 'test123';
        globals['test123'] = new TestClassLib;
    }
    public function Test(args){
        print('Public TestClass invoke');
        try{
            globals['testVar']++;
            print(globals['testVar']);
        }catch(e){
            globals['testVar'] = 0;
            print(globals['testVar']);
        }
        globals['test321'] = 'test123';
        globals['test123'] = new TestClassLib2;
        return globals['test321'];
    }
}