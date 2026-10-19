<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Verificación de contenidos sintéticos
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-12
        img(src='@/assets/curso/temas/t5/img01.png', alt='')

    p La inteligencia artificial generativa ha aumentado la capacidad para producir y transformar imágenes, textos, audios y videos. Verificar contenido sintético no equivale a utilizar un único “detector de IA”. NIST organiza las técnicas de transparencia digital en aproximaciones complementarias, entre ellas procedencia, autenticación, etiquetado, marcas de agua y detección, cada una con capacidades y limitaciones (Chandra et al., 2024).

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/pc.svg")
            h3.bg1.py-1.w-card-text.text-white Formas de intervención de la inteligencia artificial

    .row.mb-3(data-aos="zoom-in-left")
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/t5/1.svg')
          h4.text-center Intervención total
          p.text-center Un activo puede generarse completamente mediante IA.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/t5/2.svg')
          h4.text-center Intervención parcial
          p.text-center Un activo puede modificarse solo en una región o parte específica.

      .col-sm-6.col-lg-4.mb-4.mb-sm-0
        .tarjeta--boton.color-acento-contenido.text-white--hover.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/t5/3.svg')
          h4.text-center Intervención asistida
          p.text-center La IA puede participar en tareas como reducción de ruido, mejora o creación de elementos auxiliares.

    p Por ello, la categoría “contenido con IA” es demasiado amplia para un análisis técnico. Resulta más útil identificar qué sistema participó, qué acción realizó, sobre qué parte del activo, qué información quedó registrada y qué mecanismo permite comprobar esa declaración.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/pc.svg")
            h3.bg1.py-1.w-card-text.text-white Marcas de agua y huellas perceptuales

    .row.mb-4(data-aos="zoom-in-left")
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t5/4.svg' alt='')
            .tarjeta.color-acento-contenido
              .p-4
                h4.text-center Marcas de agua digitales
                p.mb-0.text-center Una marca de agua digital incorpora información visible o invisible con fines de identificación, atribución o detección de transformaciones. Las marcas robustas buscan sobrevivir a determinados cambios; las frágiles pueden revelar alteraciones.

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t5/5.svg' alt='')
            .tarjeta.color-acento-contenido
              .p-4
                h4.text-center Huellas perceptuales
                p.mb-0.text-center Las huellas perceptuales representan características del contenido que facilitan relacionar versiones semejantes, aunque sus datos binarios cambien.

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t5/6.svg' alt='')
            .tarjeta.color-acento-contenido
              .p-4.text-white
                h4.text-center Diferencia clave
                p.mb-0.text-center El #[em hash] criptográfico busca igualdad exacta, mientras que la huella perceptual busca similitud suficiente para reconocer una relación.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/pc.svg")
            h3.bg1.py-1.w-card-text.text-white Los mecanismos de detección tienen limitaciones

    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-5.mb-3.col-md-10
        img(src="@/assets/curso/temas/t5/img02.png")
      .col-lg-7
        .row
          .col-lg-2.mb-3.col-4.col-md-2
            img(src="@/assets/curso/temas/t5/img03.svg") 
          .col-lg-10 
             p Los detectores de contenido sintético pueden producir falsos positivos, falsos negativos y resultados sensibles a compresión, transformación o evolución de los modelos generativos. Un resultado como “87 % de probabilidad de contenido generado por IA” debe registrarse como un indicador automatizado, no como una conclusión definitiva.
        p La interpretación responsable exige contrastar este dato con procedencia, metadatos, fuentes, credenciales y otros mecanismos disponibles (Chandra et al., 2024).























</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
