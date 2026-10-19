<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La verificación de integridad y autenticidad de procedencia exige analizar los contenidos digitales mediante métodos manuales, automatizados y combinados, preservando las evidencias y documentando de forma reproducible cada procedimiento. El componente aborda la comprobación de integridad mediante funciones #[em hash], la comparación de versiones, las firmas digitales, los certificados, los sellos de tiempo y las credenciales C2PA, así como la verificación de contenidos sintéticos y sus mecanismos de transparencia y detección. También integra criterios normativos relacionados con protección de datos, seguridad de la información y propiedad intelectual, y orienta la interpretación de los resultados según su suficiencia, consistencia, trazabilidad, validez e incertidumbre. Finalmente, fortalece la elaboración de informes técnicos claros y sustentados, así como la gestión, custodia y tratamiento responsable de las evidencias, de manera que las conclusiones y decisiones se formulen de forma proporcional a la evidencia disponible.
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual con métodos, integridad, firmas, C2PA, contenidos sintéticos, normativa, resultados, informe y evidencias. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
