"use strict"

//Create a Home object.
function Home( path, layContent )
{
     var self = this;
    //Get page states.
    this.IsVisible = function() { 
    	self.Tween1();
    	return lay.IsVisible();
    }
    this.IsChanged = function() { return false }
    
    //Show or hide this page.
    this.Show = function( show )
    {
        if( show ) lay.Animate("FadeIn"), self.Tween1();
        else lay.Animate( "FadeOut" );
    }
    
      
this.Tween1 = function()
{
    var target = { x:0.5, y:0.5, sw:0.5, sh:0.5, rot:360 };
    img.Tween( target, 4500, "Exponential.Out", 1, true, self.Tween2 )
}

this.Tween2 = function()
{
    var target = { x: 0.8, y:[0.6,0.3,0.6], rot: 360*3 };
    img.Tween( target, 5000 )
}


    
    //Create layout for app controls.
    var lay = app.CreateLayout( "Linear", "FillXY,VCenter" );
    lay.Hide();
    layContent.AddChild( lay );
    
    //Add a logo.
	//var img = app.CreateImage( "Img/ei_1719285809259-removebg.png", 1.825, -1 );
	var img = app.CreateImage( "Img/ei_1719740441853-removebg.png", 1.0, -1 );
	lay.AddChild( img );
	
	//Create a text with formatting.
    var text = "<p><font color=#4285F4><big>Welcome</big></font></p>" + 
    "Todo: Put your home page controls here! </p>" + 
    "<p>You can add links too - <a href=https://play.google.com/store>Play Store</a></p>" +
    "<br><br><p><font color=#4285F4><big><big><b>&larr;</b></big></big> Try swiping from the " + 
    "left and choosing the <b>'New File'</b> option</font></p>";
    var txt = app.CreateText( text, 1, -1, "Html,Link" );
    txt.SetPadding( 0.03, 0.03, 0.03, 0.03 );
    txt.SetTextSize( 18 );
    txt.SetTextColor( "#444444" );
    //lay.AddChild( txt );
}