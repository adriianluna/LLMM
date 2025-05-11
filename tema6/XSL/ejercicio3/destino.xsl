<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">



  <xsl:template match="/">
    {
      "cuentas": [
        <xsl:for-each select="datos/cuentas/cuenta">
          {
            "dnititular": "<xsl:value-of select="@dnititular"/>",
            "nombre": "<xsl:value-of select="nombre"/>",
            "saldo": {
              "valor": <xsl:value-of select="saldo"/>,
              "moneda": "<xsl:value-of select="saldo/@moneda"/>"
            },
            "fecha": "<xsl:value-of select="fecha"/>"
          }
          <xsl:if test="position() != last()">,</xsl:if>
        </xsl:for-each>
      ],
      "fondos": [
        <xsl:for-each select="datos/fondos/fondo">
          {
            "cuenta": "<xsl:value-of select="@cuenta"/>",
            "cantidad": <xsl:value-of select="cantidad"/>,
            "moneda": "<xsl:value-of select="moneda"/>"
          }
          <xsl:if test="position() != last()">,</xsl:if>
        </xsl:for-each>
      ]
    }
  </xsl:template>

</xsl:stylesheet>