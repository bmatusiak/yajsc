﻿using System;
using System.Threading;
using System.Collections.Generic;
using System.Text;
using yajsc;
using System.IO;
using System.Reflection;

namespace yajscompiler
{
    class Program
    {
        [STAThread()]
        static void Main(string[] args)
        {
            CompileJS(args);
        }
        static void CompileJS(string[] args)
        {
            Console.WriteLine("----Compile----");
            YAJSCompiler jscript = new YAJSCompiler();
            jscript.Options.MainClass = "yajsc.Main";
            jscript.Options.ReferencedAssemblies.Add(Assembly.GetExecutingAssembly().Location);
            jscript.CompileSource = Directory.GetFiles(Directory.GetCurrentDirectory() + @"\yajsc", "*.js");
            Console.WriteLine("----Run----");
            jscript.CreateInstance();
            jscript.InvokeMember("main", args);
        }
    }
}