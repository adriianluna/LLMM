<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:output method="html" indent="yes"/>

    <xsl:template match="/">
        <html>
            <body>
                <h2>Productos de Electrónica</h2>
                <ul>
                    <xsl:for-each select="productos/producto">
                        <xsl:if test="@tipo = 'electronica'">
                            <li>
                                <xsl:value-of select="nombre"/> –
                                <xsl:value-of select="precio"/>€
                            </li>
                        </xsl:if>
                    </xsl:for-each>
                </ul>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
