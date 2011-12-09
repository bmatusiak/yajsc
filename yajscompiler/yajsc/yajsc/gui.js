/// <reference assembly="main-test.js" />
import System;
import System.Collections.Generic;
import System.ComponentModel;
import System.Data;
import System.Drawing;
import System.Text;
import System.Windows.Forms;
import System.Threading;
import System.IO;
package yajsc {
    public class MyForm extends yajsc.Form
    {	
        public function MyForm()
	    {
	        this.InitializeComponent();
	        this.add_WndProcHandler(this.MyWndProc);
	        this.webBrowser1.add_Navigating(this.webBrowser1_Navigating);
	        Console.WriteLine("MyForm Loaded!");
	        var global = new yajsc.GlobalScope();
	        //global.FreeConsole();
	        this.ShowDialog();
	        //global.AllocConsole();
	        
	    }
	    function  ReadFile(filePath : String) : String
        {
            var trs : TextReader = new StreamReader(filePath);
            return trs.ReadToEnd();
        }
	    function MyWndProc(sender , e : EventArgs)
        {
           // sender.To
           // sender.From
           // sender.Id
           // sender.Data
           //if(sender.Visible)
                //this.htmlSet(" " + sender.To + " " + sender.From + " " + sender.Id + " " + sender.Data + " " + "<br>");
            
            //Console.WriteLine("----CopyDataRecived----\nRecived MSG from " + sender.From + "\nID: "+ sender.Id + "\nData: "+sender.Data);
            //sender.Send(null,sender.From,4919,"print('SendBack Data');");
        }
        private function webBrowser1_Navigating(sender, e : WebBrowserNavigatingEventArgs)
        {
            
            var Url : String = e.Url; Url = Url.Replace("about:blank", "") ;
            e.Cancel = true;
            
            Console.WriteLine(Url);
            var bodyHTML : String = this.webBrowser1.Document.Body.InnerHtml;
            this.webBrowser1.Document.Body.InnerHtml = bodyHTML+Url;
        }
        private function InitializeComponent(): void 
        {
            //var resources : System.ComponentModel.ComponentResourceManager = new System.ComponentModel.ComponentResourceManager(typeof(MyForm));
            this.toolStripContainer1 = new System.Windows.Forms.ToolStripContainer();
            this.toolStrip1 = new System.Windows.Forms.ToolStrip();
            this.webBrowser1 = new System.Windows.Forms.WebBrowser();
            this.toolStripButton1 = new System.Windows.Forms.ToolStripButton();
            this.toolStripButton2 = new System.Windows.Forms.ToolStripButton();
            this.toolStripContainer1.ContentPanel.SuspendLayout();
            this.toolStripContainer1.TopToolStripPanel.SuspendLayout();
            this.toolStripContainer1.SuspendLayout();
            this.toolStrip1.SuspendLayout();
            this.SuspendLayout();
            // 
            // toolStripContainer1
            // 
            // 
            // toolStripContainer1.ContentPanel
            // 
            this.toolStripContainer1.ContentPanel.Controls.Add(this.webBrowser1);
            this.toolStripContainer1.ContentPanel.Size = new System.Drawing.Size(664, 420);
            this.toolStripContainer1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.toolStripContainer1.Location = new System.Drawing.Point(0, 0);
            this.toolStripContainer1.Name = "toolStripContainer1";
            this.toolStripContainer1.Size = new System.Drawing.Size(664, 445);
            this.toolStripContainer1.TabIndex = 0;
            this.toolStripContainer1.Text = "toolStripContainer1";
            // 
            // toolStripContainer1.TopToolStripPanel
            // 
            this.toolStripContainer1.TopToolStripPanel.Controls.Add(this.toolStrip1);
            // 
            // toolStrip1
            // 
            this.toolStrip1.Dock = System.Windows.Forms.DockStyle.None;
            this.toolStrip1.Items.Add(this.toolStripButton1);
            this.toolStrip1.Items.Add(this.toolStripButton2);
            this.toolStrip1.Location = new System.Drawing.Point(3, 0);
            this.toolStrip1.Name = "toolStrip1";
            this.toolStrip1.Size = new System.Drawing.Size(190, 25);
            this.toolStrip1.TabIndex = 0;
            // 
            // webBrowser1
            // 
            this.webBrowser1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.webBrowser1.Location = new System.Drawing.Point(0, 0);
            this.webBrowser1.MinimumSize = new System.Drawing.Size(20, 20);
            this.webBrowser1.Name = "webBrowser1";
            this.webBrowser1.Size = new System.Drawing.Size(664, 420);
            this.webBrowser1.TabIndex = 0;
            this.webBrowser1.DocumentText = ReadFile(Directory.GetCurrentDirectory() + "\\yajsc\\temp.htm");
            //this.webBrowser1.add_DocumentCompleted(this.webBrowser1_DocumentCompleted);
            // 
            // toolStripButton1
            // 
            this.toolStripButton1.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Text;
            //this.toolStripButton1.Image = ((System.Drawing.Image)(resources.GetObject("toolStripButton1.Image")));
            //this.toolStripButton1.ImageTransparentColor = System.Drawing.Color.Magenta;
            this.toolStripButton1.Name = "toolStripButton1";
            this.toolStripButton1.Size = new System.Drawing.Size(89, 22);
            this.toolStripButton1.Text = "toolStripButton1";
            //this.toolStripButton1.Click += new System.EventHandler(this.toolStripButton1_Click);
            // 
            // toolStripButton2
            // 
            this.toolStripButton2.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Text;
            //this.toolStripButton2.Image = ((System.Drawing.Image)(resources.GetObject("toolStripButton2.Image")));
            //this.toolStripButton2.ImageTransparentColor = System.Drawing.Color.Magenta;
            this.toolStripButton2.Name = "toolStripButton2";
            this.toolStripButton2.Size = new System.Drawing.Size(89, 22);
            this.toolStripButton2.Text = "toolStripButton2";
            //this.toolStripButton2.Click += new System.EventHandler(this.toolStripButton2_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6, 13);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(664, 445);
            this.Controls.Add(this.toolStripContainer1);
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "Form1";
            this.ShowIcon = false;
            this.Text = "Form1";
            this.TopMost = true;//allwats on top
            //this.Load += new System.EventHandler(this.Form1_Load);
            this.toolStripContainer1.ContentPanel.ResumeLayout(false);
            this.toolStripContainer1.TopToolStripPanel.ResumeLayout(false);
            this.toolStripContainer1.TopToolStripPanel.PerformLayout();
            this.toolStripContainer1.ResumeLayout(false);
            this.toolStripContainer1.PerformLayout();
            this.toolStrip1.ResumeLayout(false);
            this.toolStrip1.PerformLayout();
            this.ResumeLayout(false);

        }

        private var toolStripContainer1 : System.Windows.Forms.ToolStripContainer;
        private var webBrowser1 : System.Windows.Forms.WebBrowser;
        private var toolStrip1 : System.Windows.Forms.ToolStrip;
        private var toolStripButton1 : System.Windows.Forms.ToolStripButton;
        private var toolStripButton2 : System.Windows.Forms.ToolStripButton;
        
    }
}