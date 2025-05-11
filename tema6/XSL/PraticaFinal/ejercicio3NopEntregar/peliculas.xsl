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

          .contenedor {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 15px;
            padding: 20px;
            background-color: #f0f0f0;
          }

          .tarjeta {
            background-color: white;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 2px 2px 5px #999;
          }
        </style>
      </head>
      <body>
        <h2>Lista de Películas</h2>
        <div class="contenedor">
          <xsl:for-each select="peliculas/pelicula">
            <xsl:sort select="anio" data-type="number" order="descending"/>

            <xsl:choose>
              <xsl:when test="duracion &gt; 150">
                <div class="tarjeta" style="border: 2px solid blue;">
                  <h3><xsl:value-of select="titulo"/></h3>
                  <p><strong>Género:</strong><xsl:text> </xsl:text><xsl:value-of select="genero"/></p>
                  <p><strong>Año:</strong><xsl:text> </xsl:text><xsl:value-of select="anio"/></p>
                  <p><strong>Duración:</strong><xsl:text> </xsl:text><xsl:value-of select="duracion"/> minutos</p>
                </div>
              </xsl:when>
              <xsl:otherwise>
                <div class="tarjeta" style="border: 1px solid #ccc;">
                  <h3><xsl:value-of select="titulo"/></h3>
                  <p><strong>Género:</strong><xsl:text> </xsl:text><xsl:value-of select="genero"/></p>
                  <p><strong>Año:</strong><xsl:text> </xsl:text><xsl:value-of select="anio"/></p>
                  <p><strong>Duración:</strong><xsl:text> </xsl:text><xsl:value-of select="duracion"/> minutos</p>
                </div>
              </xsl:otherwise>
            </xsl:choose>

          </xsl:for-each>
        </div>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
