//Output("<HTML>");
//Output("<BODY>");
//Output(view);
//Output("</BODY>");
//Output("</HTML>");


Output('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">');
Output('<html>');
Output('<head>');
Output('<title></title>');
Output('</head>');
Output('<body bgcolor="Black" link="Blue" text="White" vlink="Blue">');
	
Output('<div style="height: 100%">');
Output('<table style="width:100%;">');
Output('<tr>');
Output('<td align="center"><a href="index">D2BS</a></td>');
Output('<td align="center"><a href="profile">Profiles</a></td>');
Output('<td align="center"><a href="itemsfound">Items Found</a></td>');
Output('<td align="center"><a href="settings">Settings</a></td>');
Output('</tr>');
Output('</table>');
Output('<div id="content">');
Output(view);
Output('</div>');
Output('</div>');
	
Output('</body>');
Output('</html>');