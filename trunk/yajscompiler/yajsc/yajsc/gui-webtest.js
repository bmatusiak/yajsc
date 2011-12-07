import System;
import System.Collections.Generic;
import System.ComponentModel;
import System.Data;
import System.Drawing;
import System.Text;
import System.Windows.Forms;

package yajsc {
    public class MyForm extends yajsc.Form
    {	
        public function MyForm()
	    {
	        this.InitializeComponent();
	        this.add_WndProcHandler(this.MsgRecieverHandler);
	        Console.WriteLine("MyForm Loaded!");
	        this.ShowDialog();
	    }
	    function MsgRecieverHandler(sender , e : EventArgs)
        {
           // sender.To
           // sender.From
           // sender.Id
           // sender.Data
           if(sender.Visible)
                this.htmlSet(" " + sender.To + " " + sender.From + " " + sender.Id + " " + sender.Data + " " + "<br>");
            
            //Console.WriteLine("----CopyDataRecived----\nRecived MSG from " + sender.From + "\nID: "+ sender.Id + "\nData: "+sender.Data);
            //sender.Send(null,sender.From,4919,"print('SendBack Data');");
        }
        private function htmlSet(dataToAdd : String)
        {
            // sender.To
            // sender.From
            // sender.Id
            // sender.Data
            var bodyHTML : String = this.webBrowser1.Document.Body.InnerHtml;
            this.webBrowser1.Document.Body.InnerHtml = dataToAdd+bodyHTML;
        }

        private function InitializeComponent() : void
        {
            this.webBrowser1 = new System.Windows.Forms.WebBrowser();
            this.SuspendLayout();
            // 
            // webBrowser1
            // 
            this.webBrowser1.AllowNavigation = false;
            this.webBrowser1.AllowWebBrowserDrop = false;
            this.webBrowser1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.webBrowser1.Location = new System.Drawing.Point(0, 0);
            this.webBrowser1.MinimumSize = new System.Drawing.Size(20, 20);
            this.webBrowser1.Name = "webBrowser1";
            this.webBrowser1.Size = new System.Drawing.Size(554, 295);
            this.webBrowser1.TabIndex = 0;
            this.webBrowser1.DocumentText = "<html><body></body></html>";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6, 13);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(292, 273);
            this.Controls.Add(this.webBrowser1);
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);
            this.PerformLayout();
        }
        private var webBrowser1 : System.Windows.Forms.WebBrowser;
    }
}