export default {
  global: {
    Name: 'Verificación de integridad y autenticidad de procedencia',
    Description:
      'El componente Verificación de integridad y autenticidad de procedencia desarrolla capacidades para analizar contenidos digitales, comprobar su integridad y establecer evidencias sobre su origen y modificaciones. Promueve la aplicación de técnicas, herramientas y criterios de verificación que permitan identificar alteraciones, validar la procedencia y fortalecer la confianza en la información utilizada en contextos organizacionales y digitales.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Métodos para la verificación de contenidos digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Análisis manual, automatizado y combinado',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Repetibilidad y registro del proceso de verificación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Manejo de evidencias durante la verificación',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Integridad de contenidos digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Funciones hash y huellas digitales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Alteraciones y comparación de versiones',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Vinculación entre el activo digital y su información de procedencia',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Firmas digitales, certificados y cadena de confianza',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Firma digital y comprobación criptográfica',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Certificados, vigencia y revocación',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Sellos de tiempo e identidad técnica del firmante',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Credenciales de contenido y C2PA',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Manifiestos, declaraciones y afirmaciones',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Acciones, ingredientes y fuentes digitales',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Vinculaciones fuertes y flexibles',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Estados de validación y confianza',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Verificación de contenidos sintéticos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Normativa y responsabilidad en la verificación de contenidos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Resultados de la verificación y niveles de confianza técnica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo:
              'Evidencia confirmada, información declarada e inconsistencias',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Suficiencia, consistencia, trazabilidad y validez',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Incertidumbre y no verificabilidad',
            hash: 't_7_3',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Elaboración del informe técnico de verificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Propósito, alcance y metodología',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Evidencias, hallazgos y resultados',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Conclusiones, limitaciones y recomendaciones',
            hash: 't_8_3',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Gestión de evidencias y toma de decisiones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '9.1',
            titulo: 'Organización, custodia y protección de evidencias',
            hash: 't_9_1',
          },
          {
            numero: '9.2',
            titulo:
              'Criterios de publicación, conservación y verificación adicional',
            hash: 't_9_2',
          },
          {
            numero: '9.3',
            titulo: 'Escalamiento y tratamiento responsable del contenido',
            hash: 't_9_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Afirmación',
      significado:
        'estructura de información de una credencial de contenido que representa datos sobre acciones, metadatos, ingredientes u otras características de procedencia.',
    },
    {
      termino: 'Cadena de confianza',
      significado:
        'relación jerárquica mediante la cual un certificado se verifica desde el firmante hasta una autoridad o ancla considerada confiable.',
    },
    {
      termino: 'Certificado digital',
      significado:
        'credencial electrónica que relaciona una clave pública con una identidad técnica e incorpora emisor, vigencia y condiciones de uso.',
    },
    {
      termino: 'Credencial de contenido',
      significado:
        'conjunto estructurado de información verificable de procedencia que puede incluir manifiesto, afirmaciones, firma y mecanismos de vinculación.',
    },
    {
      termino: 'Evidencia confirmada',
      significado:
        'información que superó una comprobación técnica definida y sustenta una conclusión dentro de ese alcance.',
    },
    {
      termino: 'Firma digital',
      significado:
        'mecanismo criptográfico para comprobar relaciones entre datos firmados, una clave y la identidad técnica asociada.',
    },
    {
      termino: 'Función <i>hash</i>',
      significado:
        'función matemática que transforma datos en un valor de longitud determinada utilizado para comprobaciones de integridad.',
    },
    {
      termino: 'Huella digital',
      significado:
        'valor obtenido mediante una función <i>hash</i> que representa el estado digital de un archivo para efectos de comparación.',
    },
    {
      termino: 'Huella perceptual',
      significado:
        'representación calculada a partir de características perceptibles que permite relacionar versiones semejantes, aunque sus <i>bytes</i> difieran.',
    },
    {
      termino: 'Ingrediente',
      significado:
        'activo utilizado como parte de la creación o transformación de otro contenido y que puede conservar relación de procedencia.',
    },
    {
      termino: 'Integridad digital',
      significado:
        'conservación de los datos respecto de un estado tomado como referencia.',
    },
    {
      termino: 'Manifiesto C2PA',
      significado:
        'estructura que integra afirmaciones, declaración firmada y mecanismos de vinculación con un activo digital.',
    },
    {
      termino: 'Marca de agua digital',
      significado:
        'información visible o invisible incorporada a un contenido para identificación, atribución, seguimiento o detección de transformaciones.',
    },
    {
      termino: 'Nivel de confianza técnica',
      significado:
        'valoración razonada del respaldo de las evidencias según suficiencia, consistencia, trazabilidad, validez e incertidumbre.',
    },
    {
      termino: 'No verificabilidad',
      significado:
        'condición en la que la evidencia disponible no permite completar una comprobación ni sustentar una conclusión responsable.',
    },
    {
      termino: 'Revocación',
      significado:
        'proceso por el cual una credencial deja de considerarse válida antes de su fecha prevista de expiración.',
    },
    {
      termino: 'Sello de tiempo',
      significado:
        'mecanismo que aporta evidencia verificable sobre la existencia o firma de datos en un momento específico.',
    },
    {
      termino: 'Vinculación flexible',
      significado:
        'mecanismo para relacionar contenidos mediante características perceptuales u otros métodos tolerantes a determinadas transformaciones.',
    },
    {
      termino: 'Vinculación fuerte',
      significado:
        'asociación criptográfica entre un activo y su procedencia mediante <i>hashes</i> que permiten comprobar correspondencia exacta.',
    },
    {
      termino: 'Verificación técnica',
      significado:
        'proceso sistemático de aplicación de métodos, herramientas y criterios para comprobar propiedades de procedencia, integridad o autenticidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Chandra, B., Dunietz, J., Roberts, K., Lee, Y., Fontana, P., & Awad, G. (2024). Reducing risks posed by synthetic content: An overview of technical approaches to digital content transparency (NIST AI 100-4). National Institute of Standards and Technology.',
    },
    {
      referencia:
        'Coalition for Content Provenance and Authenticity. (2026a). Content Credentials: C2PA Technical Specification (Version 2.4).',
    },
    {
      referencia:
        'Coalition for Content Provenance and Authenticity. (2026b). C2PA Security Considerations (Version 2.4).',
    },
    {
      referencia:
        'Coalition for Content Provenance and Authenticity. (2026c). C2PA Implementation Guidance (Version 2.4).',
    },
    {
      referencia:
        'International Organization for Standardization. (2022). Information security, cybersecurity and privacy protection - Information security management systems – Requirements (ISO/IEC 27001:2022).',
    },
    {
      referencia:
        'National Institute of Standards and Technology. (2023). Digital Signature Standard (DSS) (FIPS PUB 186-5). U.S. Department of Commerce.',
    },
    {
      referencia:
        'Temoshok, D., Proud-Madruga, D., Choong, Y. Y., Galluzzo, R., Gupta, S., LaSalle, C., Lefkovitz, N., & Regenscheid, A. (2025). Digital identity guidelines (NIST Special Publication 800-63-4). National Institute of Standards and Technology.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional grado 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Andrés Bonza Reyes',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Angélica Varón Quintero',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodríguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Liliana Cristancho Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
