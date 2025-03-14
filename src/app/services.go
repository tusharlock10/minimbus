package app

import (
	models "minimbus/src/models"
	services "minimbus/src/services"
)

func (a *App) ServicesGetSettings() *models.Settings {
	return services.GetSettings()
}

func (a *App) ServicesSetSelectedProfile(p string) *models.Settings {
	return services.SetSelectedProfile(p)
}
