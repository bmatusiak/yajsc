using System;
using System.Collections.Generic;
using System.Text;

using System.CodeDom.Compiler;
using Microsoft.JScript;
using Microsoft.JScript.Vsa;
using System.Reflection;
using System.IO;

namespace yajscompiler
{
    public class YAJSCompiler : StaticYAJSCompiler
    {
        public Dictionary<Type, List<MemberInfo>> _CompiledTypes = new Dictionary<Type, List<MemberInfo>>();
        public YAJSCompiler()
        {
            //Setting Our Default Compiler Options
            this.Options.WarningLevel = 4;
            this.Options.TempFiles.KeepFiles = false;
            this.Options.IncludeDebugInformation = false;
            this.Options.CompilerOptions = @"/print /autoref /target:library";
            this.Options.GenerateExecutable = false;
            this.Options.GenerateInMemory = true;
            this.Options.TreatWarningsAsErrors = false;
            this.Options.MainClass = "Main";
            this.Options.TempFiles.KeepFiles = false;
        }
        public CompilerResults Results = null;
        public Dictionary<Type, List<MemberInfo>> CompiledTypes
        {
            get
            {
                foreach(Type type in this.Results.CompiledAssembly.GetTypes())
                {
                    if (!type.FullName.Contains("JScript"))
                    {
                        List<MemberInfo> members = new List<MemberInfo>();
                        foreach (MemberInfo member in type.GetMembers(BindingFlags.Public | BindingFlags.Default))
                        {
                            if (member.DeclaringType.FullName == type.FullName)
                                members.Add(member);
                        }
                        try
                        {
                            _CompiledTypes.Add(type, members);
                        }
                        catch (Exception e)
                        {
                            _CompiledTypes.Remove(type);
                            _CompiledTypes.Add(type, members);
                        }
                    }
                }
                return _CompiledTypes;
            }
        }
        public CompilerParameters Options = CodeDomProvider.GetCompilerInfo("JScript").CreateDefaultCompilerParameters();
        public string[] Source;
        public string[] CompileSource
        {
            get
            {
                return this.Source;
            }
            set
            {
                this.Source = value;
                base.CompileSource();
            }
        }
        public object _Instance;
        public string _InstanceName;
        public void CreateInstance()
        {
            this.Instance = this.Options.MainClass;
        }
        public object Instance
        {
            get
            {
                return this._Instance;
            }
            set
            {
                this._InstanceName = value.ToString();
                if (this.ClassType(_InstanceName) != null)
                {
                    try
                    {
                        this._Instance = Activator.CreateInstance(this.ClassType(_InstanceName));
                    }
                    catch (TargetInvocationException e) { Console.WriteLine(e.InnerException.Message); }
                }
            }
        }
        public Type ClassType(string typeName)
        {
            try
            {
                return this.Results.CompiledAssembly.GetType(typeName);
            }
            catch (FileNotFoundException e) { Console.WriteLine(e.Message); return null; }
        }
        public string Out
        {
            get
            {
                return this.Options.OutputAssembly;
            }
            set
            {
                this.Options.OutputAssembly = value;
            }
        }
        public object InvokeMember(string member, string[] arg)
        {
            if (this._Instance == null) { return null; }
            try
            {
                return this.ClassType(this._InstanceName).
                        InvokeMember(
                            member,
                            BindingFlags.InvokeMethod,
                            null,
                            this._Instance,
                            new object[] { arg }
                         );
            }
            catch (ArgumentNullException e) { Console.WriteLine("Member Not Invoked"); return null; }
        }
    }
    public class StaticYAJSCompiler
    {
        private static readonly JScriptCodeProvider JSProvider = new JScriptCodeProvider();

        /// <summary>
        /// CompileSource();
        /// </summary>
        public void CompileSource()
        {
            CompileSource((YAJSCompiler)this);
        }

        /// <summary>
        /// CompileSource(_this);
        /// </summary>
        static void CompileSource(YAJSCompiler _this)
        {
            _this.Results = JSProvider.CompileAssemblyFromFile(_this.Options, _this.Source);
            if (_this.Results.Errors.Count > 0)
            {
                foreach (CompilerError Error in _this.Results.Errors)
                {
                    Console.WriteLine(Error);
                }
            }
        }
    }
}

