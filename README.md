# Expreso Andino - Technical Test


## Descripción

Aplicación para la gestión y seguimiento del ciclo de vida de envíos.

La solución permite:

- Consultar envíos.
- Filtrar por estado.
- Buscar por número de guía.
- Consultar historial de seguimiento.


## Arquitectura

La solución está dividida en:


### Backend

Tecnologías:

- Python
- Django
- Django REST Framework
- SQLite


Responsabilidades:

- Gestión del modelo de envíos.
- Exposición de API REST.
- Administración del historial de tracking.


### Frontend

Tecnologías:

- React
- Vite
- Axios
- React Router


Responsabilidades:

- Interfaz para operarios.
- Consulta de información.
- Visualización de estados.


## Ejecución


### Backend

Crear entorno virtual:

```bash
python -m venv .venv
```

## Documentación

La documentación técnica se encuentra en:

- `docs/database-design.md`
- `docs/executive-report/executive-report.md`
- `docs/technical-report/technical-report.md`

## Informe ejecutivo

El informe ejecutivo solicitado para la prueba se encuentra en:

- `executive-report/executive-report.md`
