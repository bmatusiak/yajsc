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
        var Parser : MVCJSParser;
	    private var global = new yajsc.GlobalScope();
        
        public function MyForm()
	    {
	        this.InitializeComponent();
	        this.add_WndProcHandler(this.MyWndProc);
	        this.webBrowser1.add_Navigating(this.webBrowser1_Navigating);
	        this.debugOn.add_Click(this.debugOn_Click);
	        this.debugOff.add_Click(this.debugOff_Click);
	        Parser = new MVCJSParser("index",this)
	        this.webBrowser1.DocumentText = Parser.Output();
	        this.webBrowser1.Document.add_Click(this.DocClick);
	    }
	    
	    private function DocClick(sender,e : HtmlElementEventArgs) : void
        {
            try{
                for(var events in Parser.events["DocClick"])
                    events.Start(sender,e);
            }catch(ed){Console.WriteLine(ed);};
        }
        private function debugOn_Click(sender,e : EventArgs) : void {this.global.AllocConsole();}
        private function debugOff_Click(sender,e : EventArgs) : void {this.global.FreeConsole();}
	    public function MyWndProc(sender , e : EventArgs)
        {
           // sender.To
           // sender.From
           // sender.Id
           // sender.Data
        }
        private function webBrowser1_Navigating(sender, e : WebBrowserNavigatingEventArgs)
        {
            e.Cancel = true;
            var Url : String = e.Url; Url = Url.Replace("about:blank", "") ;
            
            if(Url != ''){
                Console.WriteLine("'"+Url+"'");
                Parser = new MVCJSParser(Url,this);
                this.webBrowser1.Document.Body.InnerHtml = Parser.Output();
            }
        }
        private function InitializeComponent(): void 
        {
            //var resources : System.ComponentModel.ComponentResourceManager = new System.ComponentModel.ComponentResourceManager(typeof(MyForm));
            this.toolStripContainer1 = new System.Windows.Forms.ToolStripContainer();
            this.toolStrip1 = new System.Windows.Forms.ToolStrip();
            this.webBrowser1 = new System.Windows.Forms.WebBrowser();
            this.debugOn = new System.Windows.Forms.ToolStripButton();
            this.debugOff = new System.Windows.Forms.ToolStripButton();
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
            this.toolStrip1.Items.Add(this.debugOn);
            this.toolStrip1.Items.Add(this.debugOff);
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
            this.webBrowser1.DocumentText = "<html><body></body></html>";
            // 
            // debugOn
            // 
            this.debugOn.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Text;
            this.debugOn.Name = "debugOn";
            this.debugOn.Size = new System.Drawing.Size(89, 22);
            this.debugOn.Text = "Debug On";
            // 
            // debugOff
            // 
            this.debugOff.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Text;
            this.debugOff.Name = "debugOff";
            this.debugOff.Size = new System.Drawing.Size(89, 22);
            this.debugOff.Text = "Debug Off";
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
            //this.add_Load(this.Form1_Load);
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
        private var debugOn : System.Windows.Forms.ToolStripButton;
        private var debugOff : System.Windows.Forms.ToolStripButton;
        
    }
}