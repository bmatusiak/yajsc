/// <reference path="gui.js" />
/// <reference path="html-tools.js" />
import System;
import System.IO;
import System.Collections.Generic;
import System.Windows.Forms;
import System.Threading;

print("outsidetest");
//var main : yajsc.Main = new Main(Environment.GetCommandLineArgs());
package yajsc {
    class Main
    {
        public function Main(){
            var args : String[] = Environment.GetCommandLineArgs();
        }
        public function main(args : String[])
        {
            var form = new MyForm();
            form.ShowDialog();
        }
    }
}
