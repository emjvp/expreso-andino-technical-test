# Diseño de Base de Datos

## Modelo conceptual

El sistema se basa principalmente en dos entidades:

* Shipment: representa un envío.
* TrackingEvent: representa los eventos históricos asociados al envío.

Relación:

```
Shipment
    |
    | 1:N
    |
TrackingEvent
```

---

## Tabla: Shipment

Representa la información principal del envío.

| Campo        | Tipo     | Descripción              |
| ------------ | -------- | ------------------------ |
| id           | Integer  | Identificador único      |
| guide_number | String   | Número de guía del envío |
| customer     | String   | Cliente asociado         |
| origin       | String   | Ciudad de origen         |
| destination  | String   | Ciudad destino           |
| status       | String   | Estado actual del envío  |
| created_at   | DateTime | Fecha de creación        |

Estados principales:

* CREATED.
* IN_TRANSIT.
* OUT_FOR_DELIVERY.
* DELIVERED.

---

## Tabla: TrackingEvent

Almacena el historial de movimientos del envío.

| Campo       | Tipo        | Descripción           |
| ----------- | ----------- | --------------------- |
| id          | Integer     | Identificador único   |
| shipment_id | Foreign Key | Relación con Shipment |
| status      | String      | Estado registrado     |
| location    | String      | Ubicación del evento  |
| created_at  | DateTime    | Fecha del evento      |

---

## Consideraciones futuras

Para ambientes productivos se recomienda:

* Migración a PostgreSQL.
* Índices sobre número de guía y estado.
* Auditoría de cambios.
* Separación de usuarios y permisos.
* Integración con servicios externos de geolocalización.
