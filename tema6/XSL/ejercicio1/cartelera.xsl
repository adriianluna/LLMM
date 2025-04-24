<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <table>
                    <tr>
                        <th>Titulo</th>
                        <th>Plataforma</th>
                        <th>Director</th>
                        <th>Año</th>
                    </tr>
                    <xsl:for-each select="cartelera/pelicula">

                        <xsl:if test="anyo &gt;= 2010">
                            <tr>


                                <td>
                                    <xsl:value-of select="titulo" />(<xsl:value-of
                                        select="titulo/@idioma" />) </td>
                                <td>
                                    <xsl:value-of select="@plataforma"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="director">Director:</xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="anyo">Año:</xsl:value-of>
                                </td>


                            </tr>
                        </xsl:if>

                    </xsl:for-each>

                </table>

                <h3>LIsta ordenada por nombre</h3>
                <ul>
                    <xsl:for-each select="cartelera/pelicula">
                        <xsl:sort select="titulo" data-type="text" order="ascending" />
                            <xsl:if
                            test="anyo &lt; 2010">
                            <li>

                                <xsl:value-of select="titulo">Titulo:</xsl:value-of>

                                <xsl:value-of select="director">Director:</xsl:value-of>

                                <xsl:value-of select="anyo">Año:</xsl:value-of>


                            </li>
                        </xsl:if>


                    </xsl:for-each>
                </ul>

                <h3>LIsta ordenada por año</h3>
                <ul>
                    <xsl:for-each select="cartelera/pelicula">
                        <xsl:sort select="anyo" data-type="number" order="ascending" />
                            <xsl:if
                            test="anyo &lt; 2010">
                            <li>

                                <xsl:value-of select="titulo">Titulo:</xsl:value-of>


                                <xsl:value-of select="director">Director:</xsl:value-of>

                                <xsl:value-of select="anyo">Año:</xsl:value-of>


                            </li>
                        </xsl:if>


                    </xsl:for-each>
                </ul>
            </body>
        </html>

    </xsl:template>


</xsl:stylesheet>