<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Resultados de la verificación y niveles de confianza técnica

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-12
        img(src='@/assets/curso/temas/t7/img01.png', alt='')

    p La aplicación de metadatos, #[em hashes], comparación de versiones, firmas, certificados, credenciales y mecanismos de detección genera múltiples resultados. Una colección de datos aislados todavía no constituye una conclusión. La información debe consolidarse, clasificarse e interpretarse diferenciando evidencia confirmada, información declarada, datos ausentes, inconsistencias y aspectos no verificables. Tres preguntas orientan esta etapa: ¿qué se comprobó?, ¿con qué evidencia se comprobó?, ¿hasta dónde permite llegar esa evidencia?

    separador
    #t_7_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 7.1  Evidencia confirmada, información declarada e inconsistencias 

    .row.justify-content-center.align-items-center.mb-4.fondo02.p-4(data-aos="zoom-in-left")
      .col-lg-6.mb-3 
        P La evidencia confirmada es aquella que superó una comprobación técnica definida, como una huella coincidente, una firma válida o una vinculación satisfactoria. La información declarada aparece en metadatos, credenciales o registros, pero no ha sido comprobada independientemente. Los datos ausentes, como EXIF inexistente o falta de C2PA, deben registrarse sin traducirse automáticamente como irregularidad. Una inconsistencia surge cuando dos evidencias presentan información que no puede conciliarse de inmediato, por ejemplo, una fecha de captura posterior a una publicación oficial. En ese caso se documenta la diferencia y, cuando es pertinente, se realiza verificación adicional.
      .col-lg-5.col-md-9
        img(src='@/assets/curso/temas/t7/img02.png', alt='')

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-down-left")
      .col-lg-12.mb-3
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 4.
          span Clasificación de resultados de verificación
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th.w-25.text-izq Categoría
                th.text-izq Característica
                th.text-izq Ejemplo
            tbody
              tr
                td Evidencia confirmada
                td Superó una comprobación técnica definida
                td Huella coincidente con referencia
              tr
                td Información declarada
                td Está presente, pero no fue comprobada independientemente
                td Autor indicado en XMP
              tr
                td Dato ausente
                td La información esperada no está disponible
                td No existe credencial C2PA
              tr
                td Inconsistencia
                td Dos evidencias presentan diferencias relevantes
                td Fechas incompatibles
              tr
                td No verificable
                td No hay elementos suficientes para completar la comprobación
                td No existe archivo de referencia
              tr
                td Limitación
                td Condición que restringe el alcance
                td Servicio externo no disponible

    separador
    #t_7_2.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 7.2  Suficiencia, consistencia, trazabilidad y validez

    p Para interpretar los resultados de la verificación es necesario considerar criterios que permitan establecer hasta qué punto las evidencias respaldan una conclusión.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t1/pc.svg")
          h3.bg1.py-1.w-card-text.text-white Criterios para interpretar los resultados de la verificación

    .row.mb-3(data-aos="zoom-in-left")
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton1.color-acento-contenido.p-4.h-100.text-white.tarjeta-01
          .row.justify-content-center.mb-3
            .col-7.col-lg-5
              figure
                img(src='@/assets/curso/temas/t7/1.png')
          h4.text-center Suficiencia
          p.text-center Determina si las evidencias respaldan la conclusión.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton1.color-acento-contenido.p-4.h-100.text-white.tarjeta-02
          .row.justify-content-center.mb-3
            .col-7.col-lg-5
              figure
                img(src='@/assets/curso/temas/t7/2.png')
          h4.text-center Consistencia
          p.text-center Analiza si los resultados se apoyan entre sí o presentan contradicciones.

      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta--boton1.color-acento-contenido.text-white--hover.p-4.h-100.text-white.tarjeta-03
          .row.justify-content-center.mb-3
            .col-7.col-lg-5
              figure
                img(src='@/assets/curso/temas/t7/3.png')
          h4.text-center Trazabilidad
          p.text-center Determina si puede reconstruirse el recorrido del contenido.
      
      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta--boton1.color-acento-contenido.text-white--hover.p-4.h-100.text-white.tarjeta-04
          .row.justify-content-center.mb-3
            .col-7.col-lg-5
              figure
                img(src='@/assets/curso/temas/t7/3.png')
          h4.text-center Validez
          p.text-center Establece si las comprobaciones técnicas se realizaron satisfactoriamente.

    p Varias evidencias débiles no equivalen necesariamente a una evidencia sólida: una publicación original respaldada por repositorio y registros puede aportar más valor que múltiples republicaciones secundarias. C2PA distingue entre condiciones de validez técnica y confianza. Un manifiesto puede superar verificaciones estructurales y criptográficas, mientras que la confianza en la identidad del firmante depende de la política y de las anclas reconocidas. Esta diferencia evita equiparar “válido” con “confiable” en todos los contextos (C2PA, 2026b).

    separador
    #t_7_3.titulo-segundo.mb-3(data-aos="zoom-in-left")
      h2 7.3  Incertidumbre y no verificabilidad

    .fondo01.mb-3.p-4.p-lg-5.p-md-5(data-aos="zoom-in-left")
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-4.col-md-7.col-10.mb-3
          img(src='@/assets/curso/temas/t7/img03.png', alt='')
        .col-lg-8
          p.bg2.p-4 No siempre es posible alcanzar una conclusión definitiva. Un contenido puede quedar no verificable cuando no existe archivo original, se eliminaron metadatos, no hay credenciales, solo se dispone de una captura de pantalla, predominan fuentes secundarias o se realizaron múltiples transformaciones no documentadas. En estas circunstancias, la formulación “no fue posible establecer la procedencia inicial con las evidencias disponibles” es más rigurosa que afirmar que el contenido es falso.
          p Con fines pedagógicos puede utilizarse una escala cualitativa de confianza técnica: alta, media, baja y no verificable. Esta escala no es una clasificación oficial de C2PA ni de NIST; sirve para comunicar el grado de respaldo de una conclusión considerando suficiencia, consistencia, trazabilidad, validez e incertidumbre. El nivel siempre debe acompañarse de una justificación escrita.
        
    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-down-left")
      .col-lg-8.mb-3
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 5.
          span Criterios orientadores para el nivel de confianza técnica
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th.w-25.text-izq Criterio
                th.text-izq Pregunta orientadora
            tbody
              tr
                td Suficiencia
                td ¿Las evidencias disponibles respaldan la conclusión?
              tr
                td Consistencia
                td ¿Los resultados coinciden o presentan contradicciones relevantes?
              tr
                td Trazabilidad
                td ¿Puede reconstruirse el recorrido del contenido?
              tr
                td Validez
                td ¿Las comprobaciones técnicas fueron satisfactorias?
              tr
                td Independencia
                td ¿Existen fuentes o mecanismos distintos que apoyen el resultado?
              tr
                td Incertidumbre
                td ¿Qué aspectos continúan sin comprobarse?
      .col-lg-4.col-10.col-md-7
        img(src='@/assets/curso/temas/t7/img04.png', alt='')

    p Amplíe esta reflexión explorando el siguiente pódcast, en el que se analiza por qué un contenido no verificable no debe interpretarse automáticamente como falso y cómo formular conclusiones proporcionales a la evidencia disponible.

    img(src='@/assets/curso/temas/t7/podcast.svg', alt='')
    .row.justify-content-center.g-0(data-aos="fade-right")
      .col-lg-12
        .tarjeta.clr--pink.p-4.rounded-0.h-100.color-primario
          .tarjeta.bg-white.p-4
            TarjetaAudio.color-acento-botones.mb-0.p-3(
            texto="Pódcast: ¿No verificable significa falso?"
            :audio="require_src('@/assets/curso/temas/t7/podcast.svg')"
        )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            





































</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
