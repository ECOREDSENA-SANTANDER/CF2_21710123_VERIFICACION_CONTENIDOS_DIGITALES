<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Elaboración del informe técnico de verificación

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-12
        img(src='@/assets/curso/temas/t8/img01.png', alt='')

    p El informe técnico transforma los resultados en información comprensible, trazable y útil para la toma de decisiones. Su propósito no es demostrar cuánto conocimiento posee quien analiza, sino comunicar con precisión qué se examinó, cómo se examinó, qué se encontró y qué puede concluirse. Debe mantener objetividad, claridad, precisión, trazabilidad y delimitación del alcance.

    separador
    #t_8_1.titulo-segundo.mb-0(data-aos="zoom-in-left")
      h2 8.1  Propósito, alcance y metodología


    .fondo01.mb-0.p-4.p-lg-5.p-md-5(data-aos="zoom-in-left")
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-4.col-md-7.col-10.mb-3
          img(src='@/assets/curso/temas/t8/img02.png', alt='')
        .col-lg-8
          p.bg2.p-4 El propósito explica por qué se realizó la verificación; por ejemplo, “determinar las evidencias técnicas disponibles sobre procedencia, integridad y autenticidad de una fotografía recibida para publicación institucional”. El alcance indica el activo, la versión, las fuentes, las técnicas, el periodo y las exclusiones. La metodología describe de manera reproducible las operaciones realizadas: preservación, extracción de metadatos, contraste de fuentes, cálculo de hash, comparación de versiones, recuperación de credenciales y validación de firma y certificado.
          p Una metodología adecuada no necesita registrar cada clic, pero sí los elementos suficientes para reconstruir el procedimiento. Cuando el alcance excluye peritaje forense, determinación jurídica de autoría o inspección de dispositivos físicos, esas limitaciones deben declararse expresamente para evitar interpretaciones que excedan la competencia del análisis.
        
    separador
    #t_8_2.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 8.2  Evidencias, hallazgos y resultados
    
    p Evidencia, hallazgo e interpretación deben diferenciarse. La evidencia es el elemento observado o calculado; el hallazgo es el resultado significativo obtenido de esa evidencia; y la interpretación explica qué permite establecer. Por ejemplo, una huella SHA-256 es evidencia; su coincidencia con la referencia es un hallazgo; y la conclusión “la copia analizada es digitalmente idéntica a la referencia suministrada” es una interpretación. Esta secuencia evita convertir observaciones en juicios sin sustento.

    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-down-left")
        .col-lg-8.mb-3
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 6.
            span Ejemplo de consolidación técnica
          .tabla-a.color-acento-contenido
            table
              thead
                tr
                  th.w-25.text-izq Elemento
                  th.text-izq Resultado
              tbody
                tr
                  td Archivo
                  td IMG-VER-001.jpg
                tr
                  td #[em Hash] SHA-256
                  td Coincide con referencia
                tr
                  td EXIF
                  td Disponible; fecha consistente
                tr
                  td XMP
                  td Registra procesamiento posterior
                tr
                  td Credencial C2PA
                  td Disponible
                tr
                  td Firma
                  td Validación satisfactoria
                tr
                  td Certificado
                  td Cadena de confianza verificada
                tr
                  td Vinculación
                  td Coincidente
                tr
                  td Limitación
                  td No se evaluó la veracidad contextual de la escena
        .col-lg-4.col-10.col-md-7
          img(src='@/assets/curso/temas/t8/img03.png', alt='')

    separador
    #t_8_3.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 8.3  Conclusiones, limitaciones y recomendaciones


    .row.justify-content-center.align-items-center.mb-4.fondo02.p-4(data-aos="zoom-in-left")
      .col-lg-6.mb-3 
        P Las conclusiones deben derivarse exclusivamente de los resultados y evitar expresiones absolutas que la evidencia no respalde. Es preferible indicar “la copia coincide digitalmente con la referencia y la credencial asociada supera las comprobaciones ejecutadas” antes que “la imagen es 100 % auténtica”. Las limitaciones especifican qué no pudo establecerse, y las recomendaciones proponen acciones proporcionales a los hallazgos: conservar la versión verificada, solicitar el original, ejecutar verificación adicional, restringir divulgación, preservar metadatos o escalar el caso.
      .col-lg-5.col-md-9
        img(src='@/assets/curso/temas/t8/img04.png', alt='')

    .titulo-sexto.color-acento-botones(data-aos='fade-right')
      h5 Figura 2.
      span Estructura funcional del informe técnico

    .bg4.mb-4.p-4
      .row.justify-content-center.align-items-center
        .col-lg-12.col-md-12.col-12
          img(src='@/assets/curso/temas/t8/fig2.svg', alt='Diagrama en nueve pasos sobre la estructura del informe técnico: identificación, propósito, alcance, metodología, evidencias y conclusiones.')







</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
