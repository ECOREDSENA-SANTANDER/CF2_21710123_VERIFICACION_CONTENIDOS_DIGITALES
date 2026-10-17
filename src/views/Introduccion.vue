<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-3.bg1.g-0(data-aos="fade-down-left")
      .col-lg-5.p-0
        img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/intro/img01.png', alt='')
      .col-lg-7
        .row.mb-0.p-5
          .col-lg-2.mb-3.col-4.col-md-3
            img.wid15(src='@/assets/curso/temas/intro/img02.svg', alt='')
          .col-lg-12
            p.mb-0.text-white La identificación inicial de la procedencia permite conocer qué información acompaña a un contenido digital, cuáles son sus posibles fuentes, qué metadatos conserva y qué recorrido puede reconstruirse a partir de las evidencias disponibles. Sin embargo, identificar una evidencia no significa todavía comprobarla. El componente formativo Verificación de integridad y autenticidad de procedencia profundiza en métodos que permiten contrastar características técnicas, calcular huellas digitales, comparar versiones, revisar firmas y certificados, recuperar credenciales de contenido e interpretar los resultados obtenidos. Esta progresión da continuidad al componente formativo Caracterización de contenidos digitales y mecanismos de procedencia, en el que el aprendiz preservó, identificó, extrajo, clasificó y registró evidencias iniciales.

    p El aprendizaje se desarrolla mediante situaciones aplicadas en las que imágenes, audios, videos y documentos se examinan sin asumir de antemano que son auténticos, falsos, originales o manipulados. Se integran métodos manuales, automatizados y combinados; comprobaciones de integridad mediante funciones hash; firmas digitales y certificados; credenciales de contenido basadas en el estándar de la Coalition for Content Provenance and Authenticity (C2PA); mecanismos asociados con contenido sintético; y criterios para consolidar los resultados en un informe técnico. Así, el componente articula dos capacidades complementarias: verificar técnicamente el contenido y comunicar responsablemente aquello que las evidencias permiten concluir, en contextos educativos, empresariales, comunicacionales y administrativos.
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
