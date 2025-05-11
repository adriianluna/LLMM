<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">

    <html lang="es">
      <head>
        <meta charset="UTF-8"/>
        <title>Lista de Estudiantes</title>
        <style>
         

          h2 {
            background-color: red;
            color: lightgreen;
            padding: 10px;
            text-align: center;
          }

         

          
        </style>
      </head>
      <body>
        <h2>Lista de Estudiantes</h2>

        <xsl:for-each select="estudiantes/estudiante">
            <xsl:sort select="edad" data-type="number" order="descending"/>
          <xsl:choose>
            <xsl:when test="calificacion &gt;= 9">
                <!--Se pouede hacer creando una clase en css para ponerllo com etiqueta ??-->
                <div style="background-color: lightgreen; border: 1px solid #ccc; border-radius: 5px; padding:5px; margin: 10px ;">
                   <p> Nombre: <xsl:value-of select="nombre"/></p>
                    <p>Edad: <xsl:value-of select="edad"/></p>
                    <p>Calificación: <xsl:value-of select="calificacion"/></p>
                  </div>
                </xsl:when>
                <xsl:otherwise>
                  <div style="border: 1px solid #ccc; border-radius: 5px; padding: 5px; margin: 10px ;">
                    <p>Nombre: <xsl:value-of select="nombre"/></p>
                    <p>Edad: <xsl:value-of select="edad"/></p>
                    <p>Calificación: <xsl:value-of select="calificacion"/></p>
                  </div>
            </xsl:otherwise>
          </xsl:choose>


        </xsl:for-each>
      </body>
    </html>

  </xsl:template>
</xsl:stylesheet>
