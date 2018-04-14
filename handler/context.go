package handler

import (
	"github.com/labstack/echo"
	"database/sql"
)

// CustomContext : Context for DB
type CustomContext struct {
	echo.Context
	DB *sql.DB
}
