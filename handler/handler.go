package handler

import (
	"github.com/labstack/echo"
	"net/http"
)

func RootHandler(c echo.Context) error {
	return c.Render(http.StatusOK, "index.html", "")
}

func LoginHandler(c echo.Context) error {
	return nil
}

func PopularCafeHandler(c echo.Context) error {
	return nil
}

func RecentCafeHandler(c echo.Context) error {
	return nil
}