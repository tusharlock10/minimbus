package main

import (
	"embed"
	"log"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/logger"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
	"github.com/wailsapp/wails/v2/pkg/options/mac"
	"github.com/wailsapp/wails/v2/pkg/options/windows"
)

//go:embed all:frontend/dist
var assets embed.FS

//go:embed build/appicon.png
var icon []byte

func main() {
	// Create an instance of the app structure
	app := NewApp()

	// Create application with options
	err := wails.Run(&options.App{
		Title:             "Minimbus",
		Width:             1200,
		Height:            800,
		MinWidth:          450,
		MinHeight:         300,
		DisableResize:     false,
		Fullscreen:        false,
		CSSDragProperty:   "widows",
		CSSDragValue:      "1",
		StartHidden:       false,
		HideWindowOnClose: true,
		BackgroundColour:  &options.RGBA{R: 255, G: 255, B: 255, A: 255},
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		Menu:             nil,
		Logger:           nil,
		LogLevel:         logger.DEBUG,
		OnStartup:        app.startup,
		OnDomReady:       app.domReady,
		OnBeforeClose:    app.beforeClose,
		OnShutdown:       app.shutdown,
		WindowStartState: options.Normal,
		Bind: []interface{}{
			app,
		},
		// Windows platform specific options
		Windows: &windows.Options{
			WebviewIsTransparent:              false,
			WindowIsTranslucent:               false,
			DisableWindowIcon:                 false,
			WebviewUserDataPath:               "",
			ZoomFactor:                        1.0,
			DisablePinchZoom:                  true,
			DisableFramelessWindowDecorations: true,
		},
		// Mac platform specific options
		Mac: &mac.Options{
			TitleBar:             mac.TitleBarHiddenInset(),
			Appearance:           mac.DefaultAppearance,
			DisableZoom:          false,
			WebviewIsTransparent: true,
			Preferences: &mac.Preferences{
				TabFocusesLinks:        mac.Enabled,
				TextInteractionEnabled: mac.Disabled,
				FullscreenEnabled:      mac.Enabled,
			},
			WindowIsTranslucent: true,
			About: &mac.AboutInfo{
				Title:   "Minimbus",
				Message: "Cloud management with minimum effort",
				Icon:    icon,
			},
		},
	})

	if err != nil {
		log.Fatal(err)
	}
}
