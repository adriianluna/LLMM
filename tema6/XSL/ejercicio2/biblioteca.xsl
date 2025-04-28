<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html lang="es">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <style> body {font-size: <xsl:value-of select="biblioteca/css/body/letra" />
        <xsl:value-of
                        select="biblioteca/css/body/letra/@unidad" />;} </style>
            </head>
            <body>
                <h2>Biblioteca</h2>
                <table>
                    <tr>
                        <th>Titulo</th>
                        <th>Autor</th>
                        <th>Año</th>
                        <th>Categoria</th>
                        <th>Estado</th>
                    </tr>
                    <xsl:for-each select="biblioteca/libro">

                        <tr>
                            <td>
                                <xsl:value-of select="titulo" />
                            </td>
                            <td>
                                <xsl:value-of select="autor" />
                            </td>
                            <td>
                                <xsl:value-of select="año" />
                            </td>
                            <td>
                                <xsl:value-of select="categoria" />
                            </td>
                        </tr>

                    </xsl:for-each>
                </table>


            </body>
        </html>
    </xsl:template>


</xsl:stylesheet>