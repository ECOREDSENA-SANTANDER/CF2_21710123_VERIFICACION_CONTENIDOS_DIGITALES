<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Verificación de integridad y autenticidad de procedencia',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la comprensión de los métodos de verificación, la integridad digital, las firmas y certificados, las credenciales C2PA, la verificación de contenidos sintéticos, la normativa y el tratamiento responsable de la información, la valoración de resultados y la elaboración del informe técnico de verificación.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué caracteriza al método combinado en la verificación de contenidos digitales?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se limita a observar el contenido sin utilizar herramientas técnicas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Utiliza herramientas para calcular o validar y complementa los resultados con interpretación, contraste y documentación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Reemplaza el análisis humano por una decisión automática de verdadero o falso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Consiste únicamente en consultar la fecha de creación registrada en el archivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué información debe documentarse para favorecer la repetibilidad de un proceso de verificación?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el nombre del archivo y la conclusión final.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El activo analizado, la copia empleada, el método, la herramienta, la operación, el resultado, la evidencia que sustenta la interpretación y las limitaciones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Únicamente las capturas de pantalla generadas por la herramienta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo la fecha en que se realizó la verificación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'Si dos archivos procesados con el mismo algoritmo SHA-256 producen la misma huella digital, ¿qué puede afirmarse?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que los dos contenidos son verdaderos en su contexto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Que ambos archivos fueron creados por la misma persona.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que existe evidencia fuerte de que contienen la misma secuencia de datos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Que ninguno de los archivos ha sido editado desde su creación original.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'Dos fotografías se observan visualmente iguales, pero sus <i>hashes</i> son diferentes. ¿Cuál es la interpretación más adecuada?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una de las fotografías necesariamente es falsa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Existe una diferencia digital que puede deberse a compresión, metadatos, dimensiones, formato u otra transformación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El algoritmo <i>hash</i> no funciona para imágenes digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las fotografías deben tener exactamente el mismo origen.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es el propósito principal de una vinculación fuerte o <i>hard binding</i> en C2PA?',
          imagen: '@/assets/actividad/imagen05.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Comprobar la correspondencia criptográfica exacta entre el activo y la información de procedencia protegida.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Identificar únicamente similitudes visuales entre imágenes redimensionadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Determinar si el contenido presentado es verdadero.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Clasificar automáticamente el contenido como sintético o natural.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Qué característica distingue a una vinculación flexible o <i>soft binding</i>?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Garantiza que dos archivos tengan exactamente los mismos <i>bytes</i>.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Solo funciona cuando el contenido nunca ha sido transformado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituye la necesidad de registrar procedencia y versiones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Puede relacionar contenidos perceptualmente similares después de determinadas transformaciones.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué permite establecer una firma digital válida dentro del alcance de una verificación técnica?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que todas las afirmaciones del contenido son verdaderas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que la comprobación criptográfica fue satisfactoria para los datos firmados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Que el contenido nunca fue publicado anteriormente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Que el archivo no contiene datos personales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Qué aspecto debe revisarse además de la fecha de vencimiento de un certificado digital?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El tamaño visual del documento firmado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El nombre del archivo donde se encuentra la firma.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Su estado de revocación y la cadena de confianza asociada.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La resolución de pantalla del equipo utilizado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es la función principal de un sello de tiempo en un proceso de verificación?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aportar evidencia verificable sobre la existencia o firma de determinados datos en un momento específico.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reemplazar la firma digital del contenido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Modificar automáticamente la fecha de creación de los metadatos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Confirmar que el contenido representado corresponde con hechos reales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Cuál secuencia representa correctamente una cadena de confianza simplificada?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Archivo → metadato → detector de IA → usuario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Hash → imagen → publicación → repositorio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sello de tiempo → archivo → editor → plataforma.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Certificado del firmante → autoridad intermedia → autoridad raíz confiable.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'Dentro de una credencial C2PA, ¿qué representa una afirmación o <i>assertion</i>?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una decisión definitiva sobre la veracidad del contenido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una copia obligatoria del archivo original.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Información acerca del activo, como acciones, metadatos, ingredientes o dispositivos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Un certificado raíz utilizado exclusivamente para cifrar el contenido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué se entiende por ingrediente dentro de una credencial de contenido?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un activo incorporado para producir o transformar otro contenido.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Un algoritmo utilizado exclusivamente para calcular un <i>hash</i>.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una autoridad encargada de emitir certificados digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un nivel de confianza asignado al informe técnico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Qué debe concluirse cuando una herramienta no encuentra una credencial C2PA asociada a un contenido?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que el contenido es necesariamente falso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que no se localizó una credencial disponible y deben considerarse otras evidencias de verificación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Que el archivo fue generado obligatoriamente por inteligencia artificial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Que la firma digital del contenido fue revocada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'Una herramienta indica 87 % de probabilidad de que una imagen sea generada por inteligencia artificial. ¿Cómo debe interpretarse este resultado?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Como una prueba definitiva de generación sintética.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Como una validación equivalente a una firma digital.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Como evidencia suficiente para descartar todas las demás fuentes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Como un indicador automatizado que debe contrastarse con procedencia, metadatos, credenciales y otras evidencias.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Qué práctica responde al tratamiento responsable de datos personales durante una verificación?',
          imagen: '@/assets/actividad/imagen05.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Publicar todos los metadatos encontrados para aumentar la transparencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Conservar indefinidamente toda la información obtenida, aunque no sea necesaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Utilizar la evidencia necesaria y proteger los datos personales o confidenciales que no deban divulgarse.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Compartir la copia de trabajo con cualquier persona que solicite revisarla.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Cuál de los siguientes casos corresponde a una evidencia confirmada?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una huella digital que coincide con la referencia después de una comprobación técnica.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Un nombre de autor presente en XMP sin verificación independiente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La ausencia de metadatos EXIF en una fotografía.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una fecha mencionada en una publicación secundaria sin soporte adicional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Cuándo resulta apropiado clasificar un contenido como no verificable?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cuando existe una firma digital válida y una referencia coincidente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Cuando la evidencia disponible no permite completar la comprobación ni sustentar una conclusión responsable.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cuando el archivo contiene metadatos técnicos completos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cuando todas las fuentes y resultados son consistentes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué criterios orientan la asignación pedagógica de un nivel de confianza técnica?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Popularidad, extensión, formato y número de descargas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Autoría declarada, tamaño, nombre y color del archivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Antigüedad, resolución, ubicación y tipo de dispositivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Suficiencia, consistencia, trazabilidad, validez e incertidumbre de las evidencias.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Cuál de las siguientes estructuras corresponde al informe técnico de verificación propuesto en el componente?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Portada, publicidad, redes sociales, anexos y conclusiones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificación del análisis, propósito, alcance, metodología, evidencias, hallazgos y resultados, nivel de confianza, conclusiones, limitaciones y recomendaciones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Título, opinión personal, resumen de internet y decisión automática.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Metadatos, fotografías, contraseña, firma manuscrita y archivo comprimido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'Si durante una verificación se identifican inconsistencias relevantes entre las evidencias, ¿qué acción es la más adecuada?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Realizar verificación adicional antes de formular una conclusión definitiva.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Publicar inmediatamente el contenido porque la inconsistencia no es importante.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar las evidencias que presenten diferencias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Asignar automáticamente un nivel de confianza técnica alto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
