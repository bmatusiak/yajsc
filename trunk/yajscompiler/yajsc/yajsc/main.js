import System;
import System.IO;
import System.Collections.Generic;
import System.Windows.Forms;
import System.Threading;

var main : yajsc.Main = new yajsc.Main();//Used for Running Compiled EXE
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
 