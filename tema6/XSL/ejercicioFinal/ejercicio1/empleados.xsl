<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">


    <xsl:template match="/">
        <html lang="es">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                      
                <style>
                    
                    h2 {
                        text-align: center;
                        color: blue;
                        font-weight: bold;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                    }
                    th, td {
                        border: 1px solid black;
                        padding: 8px;
                        text-align: left;
                    }
                    th {
                        
                        background-color:rgb(138, 138, 138);
                    }
                    
                </style>
            </head>
            <body>
                <h2>Lista de empleados</h2>
                <table>
                    <tr>
                        <th>Nombre</th>
                        <th>Puesto</th>
                        <th>Departamento</th>
                        <th>Salario</th>
                        <th>Antiguedad</th>
                    </tr>
                    <xsl:for-each select="empresa/empleado">
                        <xsl:sort select="nombre" data-type="text" order="ascending"/>

                        <xsl:choose>
                            
                            <xsl:when test="antiguedad &gt; 5 and antiguedad &lt;= 10">
                                <tr style="background-color: lightgreen;">
                                    <td>
                                        <xsl:value-of select="nombre" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="puesto" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="departamento" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="salario" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="antiguedad" />
                                    </td>
                                </tr>
                            </xsl:when>
                    
                            
                            <xsl:otherwise>
                                <tr>
                                    <td>
                                        <xsl:value-of select="nombre" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="puesto" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="departamento" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="salario" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="antiguedad" />
                                    </td>
                                </tr>
                            </xsl:otherwise>
                        </xsl:choose>
                    </xsl:for-each>
                </table>

                

            </body>
        </html>
    </xsl:template>


</xsl:stylesheet>