<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Métodos para la verificación de contenidos digitales

      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down-left")
        .col-lg-12
          img(src='@/assets/curso/temas/t1/img01.png', alt='')

      p La verificación de un contenido digital es un proceso sistemático orientado a comprobar propiedades específicas mediante evidencias observables y reproducibles. Su finalidad no es encontrar una herramienta que entregue automáticamente una respuesta de “verdadero” o “falso”, sino formular preguntas técnicas delimitadas: ¿los metadatos son coherentes con el archivo?, ¿la copia coincide con una versión de referencia?, ¿existe una credencial de procedencia?, ¿puede validarse su firma?, ¿el certificado mantiene una cadena de confianza?, ¿se registran transformaciones posteriores? Cada pregunta exige un método distinto; por ello, la verificación debe entenderse como una secuencia de contrastes y no como una prueba única. 
      
      separador
      #t_1_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
        h2 1.1  Análisis manual, automatizado y combinado
        
      p Los métodos de análisis pueden diferenciarse según el papel que cumplen la persona y las herramientas durante el proceso de verificación. A continuación, se presentan las características del análisis manual, automatizado y combinado.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/pc.svg")
            h3.bg1.py-1.w-card-text.text-white Métodos para verificar contenidos digitales
      
      TabsC.color-primario(data-aos="fade-down-left")
        .py-3.py-md-4(titulo="Análisis manual")
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-3.col-10.col-md-8
              img(src='@/assets/curso/temas/t1/img02.png', alt='')
            .col-lg-6
              p El análisis manual se apoya en la observación, comparación e interpretación realizada por la persona que examina el activo. Puede comprender la revisión de metadatos, fechas, fuentes, versiones y resultados de certificados o credenciales. Por ejemplo, si una imagen declara fecha de captura el 12 de agosto, modificación el 14 y publicación institucional el 15, existe una secuencia temporal plausible, pero esos datos no demuestran por sí solos qué transformación se realizó ni si tuvo intención engañosa.
        .py-3.py-md-4(titulo="Análisis automatizado")
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-3.col-10.col-md-8
              img(src='@/assets/curso/temas/t1/img03.png', alt='')
            .col-lg-6
              p El análisis automatizado utiliza aplicaciones, bibliotecas o servicios capaces de ejecutar operaciones técnicas de forma consistente, como extraer metadatos, calcular #[em hashes], comparar estructuras, validar firmas o recuperar manifiestos C2PA. Su principal ventaja es la rapidez y repetibilidad; su principal límite es que el resultado solo responde al método aplicado. Un mensaje como “no se encontraron credenciales de contenido” no significa “el contenido es falso”; indica únicamente que el mecanismo consultado no localizó una credencial disponible.
        .py-3.py-md-4(titulo="Método combinado")
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-3.col-10.col-md-8
              img(src='@/assets/curso/temas/t1/img04.png', alt='')
            .col-lg-6
              p El método combinado integra ambas perspectivas: la herramienta realiza cálculos o validaciones y la persona interpreta, contrasta y documenta. Este enfoque es el más pertinente para el componente porque la competencia no se reduce al uso de aplicaciones, sino a comprender qué prueba cada procedimiento y cuáles son sus límites. Ante un video institucional, por ejemplo, puede combinarse extracción de metadatos, cálculo de #[em hash], comparación con repositorio, búsqueda de credenciales y contraste con registros de publicación para producir una conclusión proporcionada a la evidencia (Chandra et al., 2024).

      separador
      #t_1_2.titulo-segundo.mb-4(data-aos="zoom-in-left")
        h2 1.2  Repetibilidad y registro del proceso de verificación

      .row.justify-content-center.align-items-center.mb-3(data-aos="fade-down-left")
        .col-lg-12
          p Un procedimiento técnico adquiere mayor valor cuando puede comprenderse y repetirse. La repetibilidad exige documentar el activo analizado, la copia empleada, el método, la herramienta, la operación, el resultado, la evidencia que sustenta la interpretación y las limitaciones. Esta práctica evita afirmaciones vagas como “el archivo fue verificado” y permite reconstruir la lógica del análisis.

      .row.justify-content-center.align-items-center.mb-3(data-aos="fade-down-left")
        .col-lg-8.mb-3
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 1.
            span Ejemplo de registro de una comprobación de integridad
          .tabla-a.color-acento-contenido
            table
              thead
                tr
                  th.w-25.text-izq Elemento
                  th.text-izq Registro
              tbody
                tr
                  td Activo
                  td VID-001.mp4
                tr
                  td Operación
                  td Cálculo de huella digital
                tr
                  td Método
                  td SHA-256
                tr
                  td Referencia
                  td VID-001-REPOSITORIO.mp4
                tr
                  td Resultado
                  td Coincidencia de huellas
                tr
                  td Interpretación
                  td Los archivos contienen la misma secuencia de #[em bytes]
                tr
                  td Limitación
                  td La coincidencia no determina por sí sola el contexto real de la grabación
        .col-lg-4.col-10.col-md-7
          img(src='@/assets/curso/temas/t1/img05.png', alt='')

      p La tabla evidencia una distinción que debe mantenerse durante todo el componente: resultado e interpretación no son equivalentes. La herramienta produce un dato técnico; el analista explica qué permite afirmar ese dato y qué aspectos siguen fuera de su alcance.

      separador
      #t_1_3.titulo-segundo.mb-4(data-aos="zoom-in-left")
        h2 1.3  Manejo de evidencias durante la verificación

      p La verificación debe conservar los criterios de preservación establecidos en el componente anterior. Si una herramienta requiere convertir un archivo, debe mantenerse clara la relación entre el activo recibido, la copia preservada, la copia de trabajo y cualquier archivo derivado utilizado por la aplicación. La existencia de derivados no constituye un problema cuando está documentada; el riesgo aparece cuando se confunden con la evidencia original.

      .cajon.color-secundario.p-4.mb-4(data-aos="fade-down-left")
        .h5 Comparar archivos equivalentes
        p.mb-0 Un ejemplo frecuente ocurre al convertir una fotografía JPEG a PNG antes de calcular una huella. Las huellas serán diferentes porque los archivos ya no contienen la misma secuencia de datos. El error no está en la función #[em hash], sino en comparar objetos que no deberían esperarse como idénticos. La práctica adecuada consiste en comparar archivos que deban coincidir exactamente o, si se examinan versiones diferentes, interpretar la diferencia como parte de la relación entre versiones.




















  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
