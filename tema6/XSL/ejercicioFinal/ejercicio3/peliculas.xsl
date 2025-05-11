<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html lang="es">
      <head>
        <meta charset="UTF-8"/>
        <title>Películas</title>
        <style>
          h2 {
            background-color: yellow;
            color: blue;
            text-align: center;
            padding: 10px;
          }
        </style>
      </head>
      <body>
        <h2>Lista de Películas</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; padding: 15px; background-color:rgb(180, 176, 176);">
          <xsl:for-each select="peliculas/pelicula">
            <xsl:sort select="anio" data-type="number" order="descending"/>

            <xsl:choose>
              <xsl:when test="duracion &gt; 150">
                <div  style="background-color: white; padding: 15px; border-radius: 5px;
                        box-shadow: 2px 2px 5px ; border: 2px solid blue;">
                  <h3><xsl:value-of select="titulo"/></h3>
                  <p>Género:<xsl:value-of select="genero"/></p>
                  <p>Año:<xsl:value-of select="anio"/></p>
                  <p>Duración:<xsl:value-of select="duracion"/> minutos</p>
                </div>
              </xsl:when>
              <xsl:otherwise>
                <div  style=" background-color: white; padding: 15px; border-radius: 5px; 
                            border: 1px solid ;">
                  <h3><xsl:value-of select="titulo"/></h3>
                  <p>Género:<xsl:value-of select="genero"/></p>
                  <p>Año:<xsl:value-of select="anio"/></p>
                  <p>Duración:<xsl:value-of select="duracion"/> minutos</p>
                </div>
              </xsl:otherwise>
            </xsl:choose>

          </xsl:for-each>
        </div>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
