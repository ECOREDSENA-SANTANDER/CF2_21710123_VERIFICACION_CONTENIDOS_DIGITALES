<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Integridad de contenidos digitales

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-12
        img(src='@/assets/curso/temas/t2/img01.png', alt='')

    p La integridad se refiere a la conservación de los datos respecto de un estado tomado como referencia. No significa que un contenido sea verdadero, correcto o legítimo. Un documento con información equivocada puede conservar íntegramente sus datos, y una fotografía legítima puede perder identidad binaria al ser redimensionada sin que su escena se vuelva engañosa. La pregunta adecuada es siempre: ¿respecto de qué referencia se está comprobando la integridad?
    
    separador
    #t_2_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 2.1  Funciones #[em hash] y huellas digitales
        
    p Una función #[em hash] criptográfica transforma los datos de entrada en un valor de longitud determinada que funciona como huella digital. Si dos archivos procesados con el mismo algoritmo producen la misma huella, existe evidencia fuerte de que contienen la misma secuencia de datos; si los valores difieren, los archivos no son digitalmente idénticos. Las funciones #[em hash] se utilizan para comprobar copias, controlar versiones, detectar modificaciones, preservar referencias y vincular activos con información de procedencia.
    
    .cajon.color-secundario.p-4.mb-4(data-aos="fade-down-left")
      .h5 La huella trabaja sobre datos, no sobre significado
      p.mb-0 Dos fotografías visualmente iguales pueden tener #[em hashes] diferentes si cambia la compresión, los metadatos, las dimensiones, el formato o el perfil de color. Por ello, una diferencia de hash demuestra una diferencia digital, no necesariamente una manipulación engañosa. C2PA utiliza hashes criptográficos en las denominadas vinculaciones fuertes, que asocian un manifiesto con un activo o con regiones específicas de este (C2PA, 2026a).

    separador
    #t_2_2.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 2.2  Alteraciones y comparación de versiones

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-4.mb-3.col-md-7.col-10
        img(src='@/assets/curso/temas/t2/img02.png', alt='')
      .col-lg-8 
        p.bg2.p-4 Los contenidos digitales se transforman durante la creación, el almacenamiento, la edición, la publicación, la distribución y la reutilización. Una versión puede ser redimensionada, recortada, convertida, comprimida, corregida o anonimizada de manera legítima. Por ello, encontrar versiones diferentes no equivale a detectar una irregularidad; la verificación debe determinar qué relación existe entre ellas.
        p La comparación técnica puede considerar tamaño, dimensiones, duración, códecs, metadatos, fechas, hashes, estructura interna y elementos visuales o auditivos. La comparación contextual incorpora fuente, orden temporal, propósito de publicación y documentación asociada. Si una fotografía de 4032 × 3024 píxeles se publica después en 1920 × 1440 y luego en 1080 × 1080, sus hashes pueden ser distintos y, aun así, existir una cadena legítima de derivación. La conclusión debe describir la transformación identificada y la evidencia que sustenta la relación entre versiones.

    separador
    #t_2_3.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 2.3  Vinculación entre el activo digital y su información de procedencia

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-12
        img(src='@/assets/curso/temas/t2/img03.png', alt='')

    p Uno de los desafíos centrales consiste en garantizar que la información de procedencia corresponda al contenido examinado. C2PA utiliza el concepto de content binding para asociar un activo con un manifiesto. Las vinculaciones fuertes emplean hashes criptográficos para comprobar la correspondencia exacta de los datos protegidos; las vinculaciones flexibles pueden apoyarse en huellas perceptuales o marcas de agua capaces de mantener relaciones útiles después de determinadas transformaciones (C2PA, 2026a).


    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-12.mb-3
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 2.
          span Diferencia entre vinculaciones fuertes y flexibles
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th.w-25.text-izq Tipo
                th.text-izq Propósito principal
                th.text-izq Interpretación
            tbody
              tr
                td Fuerte (#[em hard binding])
                td Comprobar correspondencia criptográfica exacta
                td Es sensible a cambios en los datos protegidos.
              tr
                td Flexible (#[em soft binding])
                td Relacionar contenidos perceptualmente similares
                td Puede conservar utilidad después de redimensionamiento, recodificación u otras transformaciones.

    p Una vinculación flexible no equivale a una prueba criptográfica de igualdad. Su valor reside en ayudar a recuperar o relacionar la procedencia cuando el activo ha cambiado. Esta diferencia prepara el análisis de credenciales de contenido, donde los hashes, las firmas, los ingredientes y las acciones se integran en una estructura más amplia.



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
