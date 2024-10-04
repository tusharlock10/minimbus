package services

import models "minimbus/src/models"

var settings = &models.Settings{
	SelectedCloudProvider: "aws",
}

func GetSettings() *models.Settings {
	return settings
}

func SetSelectedProfile(p string) *models.Settings {
	settings.SelectedProfile = p

	return settings
}
