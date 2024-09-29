package config

import (
	"bufio"
	"os"
	"strings"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
)

var awsConfig *aws.Config

func GetConfig() aws.Config {
	return *awsConfig
}

func GetAvailableProfiles() (*[]string, error) {
	file, err := os.Open(config.DefaultSharedCredentialsFilename())

	if err != nil {
		return nil, err
	}

	defer file.Close()

	var profiles []string
	scanner := bufio.NewScanner(file)

	for scanner.Scan() {
		line := scanner.Text()
		if strings.HasPrefix(line, "[") && strings.HasSuffix(line, "]") {
			profileName := strings.Trim(line, "[]")
			profiles = append(profiles, profileName)
		}
	}

	if err := scanner.Err(); err != nil {
		return nil, err
	}

	return &profiles, nil
}
