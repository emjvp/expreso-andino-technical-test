# Informe Técnico

## Introducción

Este documento describe la solución implementada para la prueba técnica de Expreso Andino. El objetivo fue desarrollar una plataforma para la gestión y seguimiento de envíos utilizando una arquitectura desacoplada basada en una API REST y un cliente web desarrollado en React.

Las decisiones de diseño priorizaron simplicidad, mantenibilidad y facilidad de evolución, permitiendo que la solución pueda crecer hacia una plataforma de producción sin modificar significativamente la arquitectura inicial.

---

# Sección 1: API REST y Backend

## 1. Diseño de la API REST y consumo desde React

### Arquitectura implementada

La solución se desarrolló siguiendo una arquitectura cliente-servidor donde el frontend consume una API REST independiente del backend.

```text
React + Vite
      │
HTTP (JSON)
      │
Django REST Framework
      │
Django ORM
      │
SQLite
```

Esta separación permite desacoplar la interfaz de usuario de la lógica de negocio y facilita la incorporación de nuevos clientes, como aplicaciones móviles o integraciones con sistemas externos.

### Backend

Se utilizó **Django REST Framework** por las siguientes razones:

* Desarrollo rápido de APIs REST.
* Integración nativa con Django ORM.
* Facilidad para crear serializadores y validaciones.
* Arquitectura ampliamente utilizada y mantenida.
* Escalabilidad hacia autenticación, permisos y versionado de APIs.

La solución implementa un módulo de envíos encargado de administrar el ciclo de vida de cada orden.

### Modelo de datos

Se definieron dos entidades principales:

**Shipment**

Representa un envío e incluye información como:

* Número de guía.
* Cliente.
* Ciudad de origen.
* Ciudad destino.
* Estado actual.

**TrackingEvent**

Representa el historial de eventos del envío, permitiendo mantener trazabilidad sobre cada cambio de estado.

La relación entre ambas entidades es de uno a muchos.

### API REST

La API expone endpoints para consultar la información de los envíos.

Principales servicios implementados:

* Obtener listado de envíos.
* Obtener detalle de un envío.
* Consultar historial de seguimiento.

La comunicación entre frontend y backend se realiza utilizando JSON.

### Frontend

El frontend fue desarrollado utilizando React y Vite.

Se implementaron componentes reutilizables para:

* Dashboard principal.
* Tabla de envíos.
* Indicadores operativos.
* Visualización del estado del envío.
* Historial de seguimiento.

La comunicación con el backend se realiza mediante Axios utilizando solicitudes HTTP hacia la API REST.

Además, se implementaron funcionalidades orientadas al operario como:

* Consulta de envíos.
* Búsqueda por número de guía.
* Filtro por estado.
* Consulta del detalle de cada envío.

---

## 2. Consumo de la API desde React y Flutter

Durante la prueba se implementó el consumo de la API desde React utilizando Axios.

Esta decisión permite centralizar toda la comunicación con el backend y facilita el mantenimiento de la aplicación mediante una única capa responsable de realizar las solicitudes HTTP.

La API fue diseñada siguiendo principios REST, por lo que cualquier cliente HTTP puede consumir los mismos servicios.

En un escenario futuro, una aplicación desarrollada en Flutter podría consumir exactamente los mismos endpoints utilizando librerías como `http` o `dio`, reutilizando completamente la lógica implementada en el backend.

De esta forma se evita duplicar reglas de negocio y se mantiene una única fuente de información para todos los clientes de la plataforma.

---

## 3. Infraestructura para soportar 50.000 órdenes diarias

Aunque la solución desarrollada corresponde a un prototipo funcional, la arquitectura permite evolucionar hacia una infraestructura preparada para altos volúmenes de operación.

Se propone la siguiente arquitectura:

```text
Internet
      │
CDN / WAF
      │
Load Balancer
      │
API Django REST
      │
Redis (Cache)
      │
PostgreSQL
      │
Object Storage
```

### Componentes

**Frontend**

El cliente React puede desplegarse en plataformas como Vercel o mediante un CDN para distribuir contenido estático.

**Backend**

La API puede ejecutarse en múltiples instancias detrás de un balanceador de carga para distribuir el tráfico durante horas pico.

**Base de datos**

Se recomienda migrar a PostgreSQL en producción, aprovechando sus capacidades de concurrencia, replicación y respaldo.

**Cache**

Redis puede utilizarse para almacenar consultas frecuentes, reduciendo carga sobre la base de datos.

**Almacenamiento**

Archivos y evidencias de entrega pueden almacenarse en servicios como Amazon S3 o Azure Blob Storage.

**Monitoreo**

La plataforma debería incorporar monitoreo, centralización de logs y alertas para detectar incidentes rápidamente.

### Estrategia de escalamiento

El crecimiento debe realizarse de forma progresiva.

Inicialmente se recomienda mantener una arquitectura monolítica modular.

A medida que aumente el volumen de operación podrán desacoplarse componentes específicos, como notificaciones, seguimiento o procesamiento de eventos, únicamente cuando exista una necesidad real de escalamiento.

Esta estrategia reduce la complejidad operativa y facilita el mantenimiento durante las primeras etapas del producto.

---

# Conclusiones

La solución implementada cumple con los requerimientos planteados para la prueba técnica mediante una arquitectura desacoplada entre frontend y backend, utilizando tecnologías ampliamente adoptadas en la industria.

La propuesta prioriza rapidez de desarrollo, mantenibilidad y posibilidad de evolución, permitiendo incorporar nuevas funcionalidades e incrementar la capacidad operativa sin realizar cambios significativos en la arquitectura base.
