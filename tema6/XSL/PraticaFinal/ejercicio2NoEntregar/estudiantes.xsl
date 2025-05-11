<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">

    <html lang="es">
      <head>
        <meta charset="UTF-8"/>
        <title>Lista de Estudiantes</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 30px;
          }

          h2 {
            background-color: red;
            color: limegreen;
            padding: 10px;
            text-align: center;
          }

          .card {
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 10px;
            margin: 10px 0;
          }

          .destacado {
            background-color: lightgreen;
          }

          b {
            display: inline-block;
            width: 100px;
          }
        </style>
      </head>
      <body>
        <h2>Lista de Estudiantes</h2>

        <xsl:for-each select="estudiantes/estudiante">
          <xsl:choose>
            <xsl:when test="calificacion &gt;= 9">
              <div class="card destacado">
                <p><b>Nombre:</b><xsl:value-of select="nombre"/></p>
                <p><b>Edad:</b><xsl:value-of select="edad"/></p>
                <p><b>Calificación:</b><xsl:value-of select="calificacion"/></p>
              </div>
            </xsl:when>
            <xsl:otherwise>
              <div class="card">
                <p><b>Nombre:</b><xsl:value-of select="nombre"/></p>
                <p><b>Edad:</b><xsl:value-of select="edad"/></p>
                <p><b>Calificación:</b><xsl:value-of select="calificacion"/></p>
              </div>
            </xsl:otherwise>
          </xsl:choose>
        </xsl:for-each>
      </body>
    </html>

  </xsl:template>
</xsl:stylesheet>
