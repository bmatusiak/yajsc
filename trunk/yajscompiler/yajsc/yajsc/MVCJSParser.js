/// <reference path="gui.js" />
import System;
import System.IO;
import System.Collections.Generic;
import System.Windows.Forms;
import System.Threading;
import Accessibility;
//var main : Main = new Main;
package yajsc {
    public class MVCJSParser
    {
        public var defExt = ".js";
        public var model;
        public var controler;
        public var view;
        public var layout = "default";
        public var tools;
        public var LocalScope = new yajsc.LocalScope();
        public var document;
        
        
        public function MVCJSParser(args : String,obj : Object) 
        {   
            document = obj;        
            tools = LocalScope.NewDict();
            RunMVC(args);
        }
        
        public function RunMVC(args : String) 
        {   
             var file = args+defExt;
             this.evalFile("tools\\html.js")
             
             this.model = this.evalFile("model\\"+file)
             
             this.controler = this.evalFile("controler\\"+file)
             
             this._Output = "";
             this.view = this.evalFile("view\\"+file)
             this.view = _Output;
        }
        
        private function eval(expr : String) : String 
        { 
            try{
                return eval(expr,"unsafe");
            }
            catch(e){
                print(e);
                return null;
            }   
        }
        
        public var _Output = "";
        public function Output() : String
        {
            this._Output = "";
            this.evalFile("layout\\"+this.layout+defExt)
            return this._Output
        };
        public function Output(str : String)
        {
            this._Output += str + "\n";
        };
        
        public static function print(data : String)
        { 
            Console.WriteLine(data);
        }
        public function evalFile(file : String)
        {   
            var fileSource = ReadFile(file)
            if(fileSource != null){
                return this.eval(ReadFile(file));
            }
        }
        public function ConsoleInput(str : String)
        { 
            return this.eval(str);
        }
        
        function  ReadFile(filePath : String) : String
        {
            try{
            var trs : TextReader = new StreamReader(Directory.GetCurrentDirectory() + "\\yajsc\\jsmvc\\" +filePath);
            return trs.ReadToEnd();
            }catch(e){Console.WriteLine(e);return null;}
        }
    }
}