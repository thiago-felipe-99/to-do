package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.New()

	router.GET("/ping", func(c *gin.Context) {
		c.String(http.StatusOK, "pong")
	})

	if err := router.Run(":3001"); err != nil {
		panic("Error initializing server\n\tExternal error: " + err.Error())
	}
}
