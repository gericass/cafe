package db

import (
	"database/sql"
	"github.com/gericass/cafe/setting"
)

func ConnectDB() (*sql.DB, error) {
	config := setting.GetDBConfig()
	db, err := sql.Open("mysql", "root:"+config.Password+"@tcp("+config.Host+":"+config.Port+")/portfolio")
	if err != nil {
		return nil, err
	}
	return db, nil
}
