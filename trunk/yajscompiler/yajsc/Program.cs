using System;
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
            Console.WriteLine("----Compile----");
            YAJSCompiler jscript = new YAJSCompiler();
            jscript.Options.GenerateInMemory = false;
            //jscript.Options.GenerateExecutable = true;
            jscript.Options.TempFiles.KeepFiles = false;
            //jscript.Out = Directory.GetCurrentDirectory() + @"\YourProgram.exe";
            jscript.Options.ReferencedAssemblies.Add(Assembly.GetExecutingAssembly().Location);
            jscript.CompileSource = Directory.GetFiles(Directory.GetCurrentDirectory() + @"\yajsc", "*.js");
            Console.WriteLine("----Run----");
            jscript.CreateInstance();
            jscript.InvokeMember("main", args);
            Console.Read();
        }
    }
}
