package app

import (
	config "minimbus/src/cloudproviders/aws/config"
)

func (a *App) AwsConfigGetAvailableProfiles() (*[]string, error) {
	return config.GetAvailableProfiles()
}
