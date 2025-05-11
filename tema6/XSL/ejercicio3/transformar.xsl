<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <datos>
          <cuentas>
            <xsl:for-each select="listado/cuenta">
              <cuenta dnititular="{titular/@dni}">
                <nombre>
                  <xsl:value-of select="titular"/>
                </nombre>
                <saldo moneda="{saldoactual/@moneda}">
                  <xsl:value-of select="saldoactual"/>
                </saldo>
                <fecha>
                  <xsl:value-of select="fechacreacion"/>
                </fecha>
              </cuenta>
            </xsl:for-each>
          </cuentas>
    
          <fondos>
            <xsl:for-each select="listado/fondo">
              <fondo cuenta="{cuentaasociada}">
                <cantidad>
                  <xsl:value-of select="datos/cantidaddepositada"/>
                </cantidad>
                <moneda>
                  <xsl:value-of select="datos/moneda"/>
                </moneda>
              </fondo>
            </xsl:for-each>
          </fondos>
        </datos>
      </xsl:template>
    
    </xsl:stylesheet>