package cafe

import (
	"github.com/labstack/echo"
	"github.com/gericass/cafe/handler"
	"github.com/labstack/echo/middleware"
	"io"
	"github.com/gericass/portfolio/db"
	"html/template"
)

// TemplateRenderer is a custom html/template renderer for Echo framework
type TemplateRenderer struct {
	templates *template.Template
}

// Render renders a template document
func (t *TemplateRenderer) Render(w io.Writer, name string, data interface{}, c echo.Context) error {

	// Add global methods if data is a map
	if viewContext, isMap := data.(map[string]interface{}); isMap {
		viewContext["reverse"] = c.Echo().Reverse
	}

	return t.templates.ExecuteTemplate(w, name, data)
}

func dbMiddleware(h echo.HandlerFunc) echo.HandlerFunc {
	return func(c echo.Context) error {
		conn, err := db.ConnectDB()
		if err != nil {
			return err
		}
		defer conn.Close()
		cc := &handler.CustomContext{Context: c, DB: conn}
		return h(cc)
	}
}


func main() {
	e := echo.New()
	e.GET("/", handler.RootHandler)
	e.Start(":6000")

	e.Use(dbMiddleware)
	e.Use(middleware.Logger())
	e.Use(middleware.GzipWithConfig(middleware.GzipConfig{
		Level: 5,
	}))
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"http://localhost:3000", "https://labstack.net"},
		AllowMethods: []string{echo.GET, echo.PUT, echo.POST, echo.DELETE},
	}))

}
