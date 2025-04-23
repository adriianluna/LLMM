<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html >
            <body>
            <ul>
                <xsl:for-each select="productos/producto">
                    
                        <li>
                            <xsl:value-of select="nombre"></xsl:value-of>

                            <xsl:value-of select="precio"></xsl:value-of><xsl:text>€</xsl:text>  

                            <br/>
                        </li>
                    
                </xsl:for-each>
            </ul>
            </body>
        </html>

    </xsl:template>
</xsl:stylesheet>