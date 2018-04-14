package cafe

import (
	"github.com/labstack/echo"
	"github.com/gericass/cafe/handler"
)

func main() {
	e := echo.New()
	e.GET("/", handler.RootHandler)
	e.Start(":6000")
}
