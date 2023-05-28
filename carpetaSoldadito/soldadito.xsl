<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
			<html>
				<head>
					<link rel="stylesheet" type="text/css" href="soldadito.css" />
				</head>
				<body>
					<xsl:apply-templates />
				</body>
			</html>
			</xsl:template>
			<xsl:template match="autor">
				<h4>
		     		<xsl:value-of select="."/>
		     	</h4>
			</xsl:template>
			
			<xsl:template match="titulo">
				<h2>
		     		<xsl:value-of select="."/>
		     	</h2>
			</xsl:template>
			<xsl:template match="verso">
				<p>
		     		<xsl:value-of select="."/>
		     	</p>
			</xsl:template>
	
</xsl:stylesheet>