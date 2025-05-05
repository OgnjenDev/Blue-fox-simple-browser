function OnStart() {
    // Glavni raspored (vertikalni)
    lay = app.CreateLayout( "linear", "FillXY" );

    // Raspored za URL i dugme (horizontalni)
    topLay = app.CreateLayout( "linear", "Horizontal" );

    // Polje za unos URL-a
    urlInput = app.CreateTextEdit( "https://", 0.8, -1 );
    topLay.AddChild( urlInput );

    // Dugme za učitavanje stranice
    btnGo = app.CreateButton( "GO", 0.2, -1 );
    btnGo.SetOnTouch( LoadPage );
    topLay.AddChild( btnGo );

    // Dodaj topLay u glavni raspored
    lay.AddChild( topLay );

    // WebView komponenta koja zauzima ostatak ekrana
    web = app.CreateWebView( 1, 1 );
    lay.AddChild( web );

    app.AddLayout( lay );

    // Početna stranica
}

function LoadPage() {
    var url = urlInput.GetText();
    if (!url.startsWith("http")) url = "https://" + url;
    web.LoadUrl( url );
}