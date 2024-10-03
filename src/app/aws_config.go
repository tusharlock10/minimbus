package app

import (
	awsConfig "minimbus/src/cloudproviders/aws/config"
)

func (a *App) ConfigGetAvailableProfiles() (*[]string, error) {
	return awsConfig.GetAvailableProfiles()
}
