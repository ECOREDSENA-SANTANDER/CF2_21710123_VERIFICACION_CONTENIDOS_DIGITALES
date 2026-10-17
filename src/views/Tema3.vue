<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Firmas digitales, certificados y cadena de confianza

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-12
        img(src='@/assets/curso/temas/t3/img01.png', alt='')

    p Cuando se requiere comprobar quién o qué sistema suscribió técnicamente una declaración, el análisis incorpora firmas digitales, certificados, sellos de tiempo y cadenas de confianza. Estos mecanismos utilizan criptografía de clave pública: una clave privada genera la firma y una clave pública permite comprobarla. Así, la autenticidad técnica no depende solamente de una etiqueta de autor que pueda modificarse, sino de relaciones criptográficas verificables.

    .bloque-texto-g.bloque-texto-g--inverso.bg3.p-3.p-sm-4.p-md-5.mb-3 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/img02.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La Ley 527 de 1999 constituye un referente colombiano para mensajes de datos y firma digital. En el contexto del componente, su relevancia radica en la relación entre firma, integridad y posibilidad de verificar cambios posteriores. Debe mantenerse una distinción central: una firma válida aporta evidencia sobre integridad e identidad técnica dentro del alcance del mecanismo, pero no convierte en verdaderas todas las afirmaciones contenidas en el activo.
          br
       
    separador
    #t_3_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 3.1  Firma digital y comprobación criptográfica
    
    p De forma simplificada, el proceso de firma parte del contenido, calcula un resumen digital y aplica un algoritmo con la clave privada del firmante. Durante la verificación se utiliza la clave pública asociada para comprobar si la firma corresponde a los datos evaluados. Si el contenido protegido cambia después de la firma, la validación debe detectar la inconsistencia. NIST formaliza estos principios en el Digital Signature Standard (DSS) FIPS 186-5 (NIST, 2023). 


    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-down-left")
      .col-lg-12.mb-3
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 3.
          span Interpretación básica de resultados de firma
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th.w-25.text-izq Resultado
                th.text-izq Interpretación inicial
            tbody
              tr
                td Firma válida
                td La comprobación criptográfica fue satisfactoria para los datos firmados.
              tr
                td Firma no válida
                td La comprobación criptográfica no fue satisfactoria.
              tr
                td Firma válida con certificado no confiable
                td La firma puede ser correcta, pero la confianza en la credencial es limitada.
              tr
                td Firma no verificable
                td Faltan elementos o condiciones para completar la validación.

    .cajon.color-secundario.p-4.mb-0(data-aos="fade-down-left")
      .h5 No válido y no verificable no son sinónimos
      p.mb-0 Una firma puede quedar sin verificación por falta de información externa, incompatibilidad del formato o indisponibilidad de servicios. La responsabilidad del analista consiste en registrar la condición exacta, no traducirla automáticamente como “firma falsa”.

    separador
    #t_3_2.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 3.2  Certificados, vigencia y revocación

    p El certificado digital relaciona una clave pública con una identidad técnica dentro de una infraestructura de confianza. Suele contener información sobre titular, emisor, periodo de validez y uso previsto. Durante la verificación deben considerarse tres preguntas: ¿el certificado era válido en el momento relevante?, ¿forma parte de una cadena de confianza reconocida?, ¿había sido revocado? La revocación puede ocurrir antes del vencimiento por compromiso de la clave, errores de emisión o cambios en la relación de confianza.

    .titulo-sexto.color-acento-botones(data-aos='fade-right')
      h5 Figura 1.
      span  Cadena de confianza en la verificación de certificados digitales

    .bg4.mb-4.p-4
      .row.justify-content-center.align-items-center
        .col-lg-4.col-md-9
          img(src='@/assets/curso/temas/t3/fig1.svg', alt='Diagrama de cadena de confianza: certificado del firmante, autoridad intermedia y autoridad raíz confiable.')

    p Una firma criptográficamente válida no implica, por sí sola, que el firmante sea confiable según una política determinada. C2PA 2.4 contempla listas de confianza, información de revocación y comprobaciones de certificados dentro de su modelo de validación (C2PA, 2026a).

    separador
    #t_3_3.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 3.3  Sellos de tiempo e identidad técnica del firmante

    p El sello de tiempo aporta evidencia verificable sobre la existencia o firma de determinados datos en un momento específico. 

    .cajon.color-secundario.p-4.mb-4(data-aos="fade-down-left")
      .h5 Sello de tiempo ≠ fecha declarada en metadatos
      p.mb-0 Debe diferenciarse de una fecha escrita en metadatos, que puede ser simplemente declarativa. Un sello confiable puede ser relevante cuando un certificado está vencido en el presente, pero la firma ocurrió durante su periodo de validez. La secuencia de análisis comprende validar la firma, examinar la credencial, revisar vigencia y revocación, validar el sello de tiempo cuando exista y documentar la cadena de confianza.













</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
