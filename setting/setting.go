package setting

import (
	"flag"
	"path/filepath"
	"github.com/BurntSushi/toml"
	"log"
)

type MySQL struct {
	User     string `toml:"user"`
	Password string `toml:"password"`
	Host     string `toml:"host"`
	Port     string `toml:"port"`
}

type config struct {
	DEV MySQL
	REL MySQL
}

var dbConfig MySQL

func GetDBConfig() MySQL {
	return dbConfig
}

func Setting() error {

	var dsn string

	flag.StringVar(&dsn, "db", "dev", "dsn")
	flag.Parse()
	p, err := filepath.Abs("./db_config.toml")
	if err != nil {
		return err
	}
	var c config
	if _, err := toml.DecodeFile(p, &c); err != nil {
		return err
	}
	if dsn == "dev" {
		dbConfig = c.DEV
	} else if dsn == "rel" {
		dbConfig = c.REL
	} else {
		log.Fatal("input data source name (rel or dev)")
	}
	return nil
}