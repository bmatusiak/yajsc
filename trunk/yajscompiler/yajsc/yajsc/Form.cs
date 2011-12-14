using System;
using System.Collections.Generic;
using System.Text;
using System.Windows.Forms;
using System.Runtime.InteropServices;
using System.Threading;

namespace yajsc
{
    public class Form : System.Windows.Forms.Form
    {
        public Form()
        {
            this.Text = "yajsc";
        }
        // Invoke the Changed event; called whenever list changes:
        protected virtual void OnCD(EventArgs e)
        {
            if (WndProcHandler != null)
            {
                WndProcHandler(this, e);
            }
        }
        public string To { get; set; }
        public string From { get; set; }
        public string Id { get; set; }
        public string Data { get; set; }
        private void CDPushEvent(IntPtr To, IntPtr From, IntPtr Id, string Data)
        {
            this.To = MessageHelper.getWindowTitle(To);
            this.From = MessageHelper.getWindowTitle(From);
            this.Id = Id.ToString();
            this.Data = Data;
            OnCD(EventArgs.Empty);
        }

        public void sendCopyData(string WindowClass, string WindowTitle, int MsgID, string Data)
        {
            int hWnd = MessageHelper.getWindowId(WindowClass, WindowTitle);

            MessageHelper.sendWindowsStringMessage(hWnd, MsgID, Data);
        }
        public delegate void EventHandlerMsg(object sender, EventArgs e);

        public event EventHandlerMsg WndProcHandler;

        protected override void WndProc(ref Message m)
        {
            switch (m.Msg)
            {
                case MessageHelper.WM_COPYDATA:
                    MessageHelper.COPYDATASTRUCT mystr = new MessageHelper.COPYDATASTRUCT();
                    Type mytype = mystr.GetType();
                    mystr = (MessageHelper.COPYDATASTRUCT)m.GetLParam(mytype);
                    CDPushEvent(m.HWnd, m.WParam, mystr.dwData, mystr.lpData);
                    break;
            }
            base.WndProc(ref m);
        }
    }
    public class MessageHelper
    {
        #region DLLImports
        [DllImport("user32.dll", SetLastError = true, CharSet = CharSet.Auto, EntryPoint = "GetWindowText")]
        private static extern int GetWindowText(IntPtr hWnd, [Out] StringBuilder lpString, int nMaxCount);

        [DllImport("User32.dll")]
        private static extern int RegisterWindowMessage(string lpString);

        [DllImport("User32.dll", EntryPoint = "FindWindow")]
        public static extern Int32 FindWindow(String lpClassName, String lpWindowName);

        //For use with WM_COPYDATA and COPYDATASTRUCT
        [DllImport("User32.dll", EntryPoint = "SendMessage")]
        public static extern int SendMessage(int hWnd, int Msg, int wParam, ref COPYDATASTRUCT lParam);

        #endregion

        public const int WM_COPYDATA = 0x4A;

        //Used for WM_COPYDATA for string messages
        public struct COPYDATASTRUCT
        {
            public IntPtr dwData;//msg id
            public int cbData;//msg len
            [MarshalAs(UnmanagedType.LPStr)]
            public string lpData;// msg data
        }

        public static int sendWindowsStringMessage(int hWnd, int wParam, string msg)
        {
            int result = 0;
            if (hWnd > 0)
            {
                byte[] sarr = System.Text.Encoding.Default.GetBytes(msg);
                int len = sarr.Length;
                COPYDATASTRUCT cds;
                cds.dwData = (IntPtr)wParam;
                cds.lpData = msg;
                cds.cbData = len + 1;
                result = SendMessage(hWnd, WM_COPYDATA, hWnd, ref cds);
            }
            return result;
        }

        public static int getWindowId(string className, string windowName)
        {
            return FindWindow(className, windowName);
        }

        public static string getWindowTitle(IntPtr hwnd)
        {
            StringBuilder stringBuilder = new StringBuilder(256);
            GetWindowText(hwnd, stringBuilder, stringBuilder.Capacity);
            return stringBuilder.ToString();
        }
    }

}
