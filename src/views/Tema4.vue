<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Credenciales de contenido y C2PA

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-12
        img(src='@/assets/curso/temas/t4/img01.png', alt='')

    p Las firmas digitales protegen declaraciones concretas, pero la procedencia de contenidos multimedia exige representar creación, modificaciones, herramientas, ingredientes y relaciones entre versiones. La Coalition for Content Provenance and Authenticity (C2PA) desarrolla un estándar orientado a almacenar y validar información criptográficamente verificable sobre la procedencia de contenidos. La especificación 2.4 organiza esa información mediante afirmaciones, declaraciones firmadas, manifiestos y mecanismos de vinculación con el activo (C2PA, 2026a).
    p C2PA no debe interpretarse como un detector de verdad. Su propósito es permitir comprobar la estructura, asociación e integridad de los datos de procedencia y facilitar que el usuario conozca qué información está respaldada técnicamente. La veracidad contextual de una escena o afirmación sigue requiriendo otros métodos y fuentes.


    separador
    #t_4_1.titulo-segundo.mb-0(data-aos="zoom-in-left")
      h2 4.1  Manifiestos, declaraciones y afirmaciones

    .fondo01.mb-3.p-4.p-lg-5.p-md-5(data-aos="zoom-in-left")
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-8.mb-3
          p.bg2.p-4 Una afirmación (#[em assertion]) representa información acerca del activo, como acciones, metadatos, ingredientes, dispositivos o elementos relacionados con inteligencia artificial (IA). La declaración (#[em claim]) agrupa referencias a afirmaciones y contiene la información necesaria para describir la vinculación con el activo; esta declaración se firma digitalmente. El manifiesto integra afirmaciones, declaración, firma y mecanismos de vinculación. El término #[em Content Credential] o credencial de contenido se utiliza como expresión orientada al usuario para este conjunto verificable de procedencia.
          p Una fotografía capturada por un dispositivo compatible puede incorporar datos sobre creación, dispositivo, acciones y vinculación mediante #[em hash]. Si posteriormente se edita con una herramienta compatible, puede generarse un nuevo manifiesto que conserve relación con la procedencia anterior y agregue nuevas acciones. Así, la procedencia se convierte en una historia acumulativa de transformaciones registradas. 
        .col-lg-4.col-md-7.col-10
          img(src='@/assets/curso/temas/t4/img02.png', alt='')

    separador
    #t_4_2.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 4.2  Acciones, ingredientes y fuentes digitales

    .bloque-texto-g.bg5.p-3.p-sm-4.p-md-5(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img03.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las acciones describen operaciones relevantes sobre el activo, como creación, edición, transcodificación, aplicación de filtros o generación mediante sistemas automatizados. Los ingredientes representan activos incorporados para producir otro contenido. Una pieza gráfica que integra una fotografía, un logotipo y una ilustración puede conservar información de procedencia de esos componentes; un video puede relacionar grabación, música, animación y recursos generados mediante IA. Esta estructura aporta más información que una declaración genérica como “el contenido fue editado”. 
          br
     
    separador
    #t_4_3.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 4.3  Vinculaciones fuertes y flexibles

    .row.justify-content-center.align-items-center.mb-0.fondo02.p-4(data-aos="zoom-in-left")
      .col-lg-6.mb-3 
        P Dentro de las credenciales C2PA, la vinculación fuerte prioriza la exactitud criptográfica y la flexible prioriza la capacidad de reconocimiento después de transformaciones. Un #[em hash] puede dejar de coincidir tras redimensionar una imagen o recomprimir un video, mientras que una huella perceptual puede conservar una relación útil. Sin embargo, la huella perceptual no ofrece la misma garantía de identidad binaria. El analista debe reconocer qué mecanismo se aplicó y qué tipo de afirmación permite sustentar.a
      .col-lg-5.col-md-9
        img(src='@/assets/curso/temas/t4/img04.png', alt='')

    separador
    #t_4_4.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 4.4  Estados de validación y confianza


    .bloque-texto-g.bloque-texto-g--inverso.bg3.p-3.p-sm-4.p-md-5.mb-3(data-aos="zoom-in-left") 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img05.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La validación C2PA no debería reducirse a un único indicador visual. El proceso puede incluir localización del manifiesto activo, validación de la declaración, firma, sello de tiempo, revocación, afirmaciones, ingredientes y contenido. Por ello, pueden existir validaciones satisfactorias, advertencias, fallos o ausencia de credenciales. La ausencia de C2PA no demuestra falsedad, ya que la tecnología es optativa y no todos los dispositivos, aplicaciones o plataformas la implementan.
          br





</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
