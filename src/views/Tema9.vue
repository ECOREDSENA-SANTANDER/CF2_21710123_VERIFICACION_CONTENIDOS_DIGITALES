<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Gestión de evidencias y toma de decisiones

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-12
        img(src='@/assets/curso/temas/t9/img01.png', alt='')

    p El informe no necesariamente cierra el proceso. Las evidencias utilizadas deben conservarse y las conclusiones deben conducir a decisiones responsables. La gestión comprende organización, custodia, control de acceso, protección de datos, conservación, identificación de versiones y documentación de modificaciones. Estas prácticas son coherentes con los principios de seguridad de la información definidos por ISO/IEC 27001:2022 (ISO, 2022).

    separador
    #t_9_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 9.1  Organización, custodia y protección de evidencias

    p Las evidencias deben mantener una relación clara con el análisis. El objetivo es evitar resultados sin activo asociado, versiones mezcladas, pérdida de evidencia o divulgación accidental.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t1/pc.svg")
          h3.bg1.py-1.w-card-text.text-white Organización básica de las evidencias

    SlyderF(columnas="col-lg-6 col-xl-4").mb-4(data-aos="zoom-in-left")
      .tarjeta.bg6.p-4
        .row.justify-content-center.mb-3
          .col-6.col-lg-5.col-md-4
            img(src='@/assets/curso/temas/t9/1.svg' alt='')
        h4.text-center Archivo recibido
        p.text-center Conserva el activo obtenido inicialmente para el análisis.

      .tarjeta.bg6.p-4.h-100
        .row.justify-content-center.mb-3
          .col-6.col-lg-5.col-md-4
            img(src='@/assets/curso/temas/t9/2.svg' alt='')
        h4.text-center Copia de trabajo
        p.text-center Corresponde a la versión empleada durante las operaciones de verificación.

      .tarjeta.bg6.p-4.h-100
        .row.justify-content-center.mb-3
          .col-6.col-lg-5.col-md-4
            img(src='@/assets/curso/temas/t9/3.svg' alt='')
        h4.text-center Metadatos
        p.text-center Reúne la información técnica y descriptiva extraída del activo.


      .tarjeta.bg6.p-4.h-100
        .row.justify-content-center.mb-3
          .col-6.col-lg-5.col-md-4
            img(src='@/assets/curso/temas/t9/4.svg' alt='')
        h4.text-center Huellas digitales
        p.text-center Conserva los valores de #[em hash] utilizados durante las comprobaciones.


      .tarjeta.bg6.p-4.h-100
        .row.justify-content-center.mb-3
          .col-6.col-lg-5.col-md-4
            img(src='@/assets/curso/temas/t9/5.svg' alt='')
        h4.text-center Credenciales
        p.text-center Agrupa la información de procedencia y validación asociada con el contenido.


      .tarjeta.bg6.p-4.h-100
        .row.justify-content-center.mb-3
          .col-6.col-lg-5.col-md-4
            img(src='@/assets/curso/temas/t9/6.svg' alt='')
        h4.text-center Capturas de resultados
        p.text-center Documenta los resultados obtenidos durante las operaciones realizadas.


      .tarjeta.bg6.p-4.h-100
        .row.justify-content-center.mb-3
          .col-6.col-lg-5.col-md-4
            img(src='@/assets/curso/temas/t9/7.svg' alt='')
        h4.text-center Informe final
        p.text-center Consolida las evidencias, hallazgos, resultados y conclusiones del análisis.


    p Cuando la evidencia contiene información personal o confidencial, debe aplicarse un criterio de mínima exposición necesaria, utilizando anonimización u ocultamiento parcial cuando corresponda.

    separador
    #t_9_2.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 9.2  Criterios de publicación, conservación y verificación adicional

    .row.justify-content-center.align-items-center.mb-4.fondo02.p-4(data-aos="zoom-in-left")
      .col-lg-6.mb-3 
        P La decisión sobre un contenido depende del nivel de confianza y del impacto de su uso. Puede recomendarse la publicación cuando la evidencia es suficiente para el propósito y no existen inconsistencias relevantes, sin olvidar privacidad, derechos de autor y políticas institucionales. La conservación resulta pertinente cuando el activo sirve como referencia, respalda una decisión o mantiene información de procedencia importante. La verificación adicional se justifica cuando existen inconsistencias significativas, faltan fuentes primarias, un mecanismo no pudo validarse o el impacto potencial de la decisión es elevado.
      .col-lg-5.col-md-9
        img(src='@/assets/curso/temas/t9/img02.png', alt='')

    .cajon.color-secundario.p-4.mb-0(data-aos="zoom-in-left")
      .h5 Principio orientador
      p A mayor impacto potencial de la decisión, mayor necesidad de evidencia suficiente y verificación robusta. Una imagen decorativa para uso interno puede requerir controles diferentes a los de un documento destinado a sustentar una decisión administrativa o contractual.

    separador
    #t_9_3.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 9.3  Escalamiento y tratamiento responsable del contenido

    .bloque-texto-g.bloque-texto-g--inverso.bg5.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left") 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t9/img03.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El escalamiento consiste en remitir el caso a una instancia con conocimientos, autoridad o herramientas adicionales cuando la situación supera el alcance del procedimiento. Puede ser necesario ante análisis forense especializado, interpretación jurídica, incidentes de seguridad, validación avanzada de certificados, manipulación audiovisual compleja o disputas de propiedad intelectual. Reconocer la necesidad de escalar no representa un fracaso; demuestra control sobre el alcance profesional.
          br

    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-down-left")
      .col-lg-8.mb-3
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 7.
          span Orientaciones para la toma de decisiones
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th.w-50.text-izq Resultado general
                th.text-izq Acción orientadora
            tbody
              tr
                td Evidencia suficiente y consistente.
                td Utilizar o publicar según políticas aplicables.
              tr
                td Evidencia suficiente con limitaciones menores.
                td Utilizar documentando las limitaciones.
              tr
                td Inconsistencias relevantes.
                td Realizar verificación adicional.
              tr
                td Evidencia insuficiente.
                td Mantener como no verificable.
              tr
                td Posible afectación legal o de seguridad.
                td Escalar a instancia especializada.
              tr
                td Información personal o confidencial.
                td Restringir, proteger o anonimizar.
      .col-lg-4.col-10.col-md-7
        img(src='@/assets/curso/temas/t9/img04.png', alt='')

    .cajon.color-secundario.p-4.mb-0(data-aos="zoom-in-left")
      .h5 Caso integrador
      p En un caso integrador, una institución puede recibir un video que no coincide por #[em hash] con la versión de repositorio porque fue recomprimido y perdió su credencial C2PA. Si la versión institucional conserva la credencial y supera las validaciones de firma y vinculación, la conclusión responsable no sería “el video recibido es falso”, sino “la copia recibida es una versión derivada con menor trazabilidad; para publicación se recomienda utilizar la versión recuperada directamente del repositorio institucional”. Esta formulación ejemplifica el principio central del componente: construir conclusiones proporcionales a la evidencia disponible.














</template>

<script>
export default {
  name: 'Tema9',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
