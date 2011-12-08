using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;

namespace yajsc
{
    class Global
    {
        static Global()
        {
            Console.WriteLine("Global c# Constructor Loaded");
        }
        public static Dictionary<string, object> Globals = new Dictionary<string, object>();

        [DllImport("kernel32.dll")]
        public static extern bool FreeConsole();

        [DllImport("kernel32.dll")]
        public static extern bool AllocConsole();
    }
    public class GlobalScope
    {
        public Dictionary<string, object> globals = Global.Globals;
        public bool FreeConsole() { return Global.FreeConsole(); }
        public bool AllocConsole() { return Global.AllocConsole(); }
    }
    public class LocalScope : GlobalScope
    {
        public LocalScope()
        {
            Console.WriteLine("Local c# Constructor Loaded");
        }

    }
}
