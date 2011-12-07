using System;
using System.Collections.Generic;

namespace yajsc
{
    class Global
    {
        static Global()
        {
            Console.WriteLine("Global c# Constructor Loaded");
        }
        public static Dictionary<string, object> Globals = new Dictionary<string, object>();
    }
    public class GlobalScope
    {
        public Dictionary<string, object> globals = Global.Globals;

    }
    public class LocalScope : GlobalScope
    {
        public LocalScope()
        {
            Console.WriteLine("Local c# Constructor Loaded");
        }

    }
}
