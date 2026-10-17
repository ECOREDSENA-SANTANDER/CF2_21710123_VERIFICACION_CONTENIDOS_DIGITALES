<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Normativa y responsabilidad en la verificación de contenidos

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-12
        img(src='@/assets/curso/temas/t6/img01.png', alt='')

    p La verificación técnica puede involucrar datos personales, material protegido, documentos firmados, registros institucionales o información de circulación restringida. Por ello, una operación técnicamente posible no siempre está autorizada ni resulta apropiada. El componente no pretende formar especialistas jurídicos, sino desarrollar criterios para reconocer implicaciones de seguridad, privacidad, propiedad intelectual y manejo responsable.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-9
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t1/pc.svg")
          h3.bg1.py-1.w-card-text.text-white Aspectos normativos y de responsabilidad en la verificación

    TabsC.color-primario(data-aos="fade-down-left")
      .py-3.py-md-4(titulo="Mensajes de datos y firma digital")
        .row.justify-content-center.align-items-center
          .col-lg-5.mb-3.col-10.col-md-8
            img(src='@/assets/curso/temas/t6/1.png', alt='')
          .col-lg-6
            p En Colombia, la Ley 527 de 1999 constituye un referente para mensajes de datos, firma digital y entidades de certificación. Esta norma permite relacionar integridad técnica, firma, certificado e identificación del firmante. Sin embargo, el aprendiz debe evitar conclusiones jurídicas que excedan el análisis realizado: puede documentar que una firma fue validada técnicamente, pero los efectos jurídicos específicos pueden requerir evaluación especializada.

      .py-3.py-md-4(titulo="Protección de datos personales y confidencialidad")
        .row.justify-content-center.align-items-center
          .col-lg-5.mb-3.col-10.col-md-8
            img(src='@/assets/curso/temas/t6/2.png', alt='')
          .col-lg-6
            p La verificación puede revelar identidad, ubicación, fechas, organización, dispositivo, datos de contacto o identificadores. Aumentar la trazabilidad no implica recopilar o publicar indiscriminadamente toda la información disponible. El principio operativo es utilizar únicamente la evidencia necesaria y proteger los datos que no deben divulgarse. La Ley 1581 de 2012 sirve como referente nacional para el tratamiento responsable de datos personales, mientras que C2PA incorpora consideraciones de privacidad dentro de su diseño.

      .py-3.py-md-4(titulo="Seguridad de la información y propiedad intelectual")
        .row.justify-content-center.align-items-center
          .col-lg-5.mb-3.col-10.col-md-8
            img(src='@/assets/curso/temas/t6/3.png', alt='')
          .col-lg-6
            p Los activos utilizados en un análisis pueden formar parte de procesos internos, contener información reservada o pertenecer a terceros. El procedimiento debe considerar control de acceso, almacenamiento adecuado, protección de copias, registro de fuentes, uso autorizado y respeto de derechos. Identificar al creador o validar una credencial no otorga automáticamente el derecho a reutilizar el contenido. ISO/IEC 27001:2022 aporta un marco general para gestionar riesgos asociados con confidencialidad, integridad y disponibilidad de la información (ISO, 2022).





</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
