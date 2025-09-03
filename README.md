# POC Microfrontend Application

## Descripción de la prueba

Esta aplicación es una prueba de concepto (POC) para demostrar la implementación de **microfrontends** utilizando un **monorepositorio**. La aplicación está compuesta por tres microfrontends:

1. **Contenedor (Container):** Orquestador principal que integra los microfrontends.
2. **Marketing:** Componente de la interfaz de usuario para mostrar contenido destacado, carruseles y secciones de información.
3. **Login/Auth:** Microfrontend encargado de la autenticación de usuarios (SignIn / SignUp).

Aunque se podría haber implementado cada microfrontend en repositorios independientes, se optó por un monorepositorio para simplificar la prueba de concepto.

---

## Objetivo(s) de la prueba

El objetivo principal de esta prueba fue **explorar y aprender conceptos de arquitectura de software aplicados a microfrontends**, evaluando su viabilidad en un entorno realista. En particular:  

- **Entender la tecnología de microfrontends:** cómo dividir una aplicación monolítica en módulos independientes que puedan evolucionar de manera desacoplada.  
- **Evaluar la integración con Webpack Module Federation:** aprender cómo compartir dependencias, exponer componentes y consumirlos dinámicamente entre aplicaciones.  
- **Permitir ejecución independiente en desarrollo:** garantizar que cada microfrontend pueda ejecutarse por separado, facilitando la productividad de los equipos y reduciendo dependencias innecesarias en etapas tempranas.  
- **Facilitar escalabilidad y mantenimiento:** adoptar un enfoque de arquitectura orientado a dominios funcionales, donde cada microfrontend asuma una responsabilidad clara, reduciendo la complejidad a medida que la aplicación crece.  

### 📚 Aprendizajes de arquitectura  

- Manejo de la **autonomía de despliegue** sin perder coherencia en la aplicación final.  
- Retos de **compartición de librerías comunes** (React, estilos, utilidades) evitando duplicación de bundles.  
- Estrategias para mantener **contratos claros entre microfrontends** y minimizar acoplamiento.  
- Validación del impacto en la **experiencia de desarrollo** (hot reload, debugging, testing).  

---

## Pasos implementados para llevar a cabo la prueba

1. Configuración de **Webpack Module Federation** en cada microfrontend.
2. Exposición de módulos (`AuthApp`, `MarketingApp`) desde los microfrontends para que el contenedor los consuma.
3. Creación de un **host container** que integra los microfrontends y gestiona la navegación.
4. Implementación de rutas con **React Router v5** para navegación dentro del contenedor.
5. Creación de componentes UI con **Material-UI**.
6. Configuración de scripts de desarrollo y build independientes para cada microfrontend:
   - `npm install` para instalar dependencias.
   - `npm start` para levantar la aplicación en modo desarrollo.
   - `npm run build` para generar un bundle de producción.
7. Configuración de **despliegue automático** independiente por cada microfrontend usando **GitHub Actions**, **Amazon S3** y **CloudFront**. Cada vez que se hace merge a `main`, los cambios se despliegan automáticamente al bucket de S3 correspondiente y se crea una invalidación en CloudFront para actualizar los archivos en caché.

## Ejecución en producción

URL de la aplicación: https://d1m4f3owvjn23j.cloudfront.net/

## Ejecución local

Cada microfrontend se ejecuta en un puerto diferente:

| Microfrontend | Ruta / URL local                                                       |
| ------------- | ---------------------------------------------------------------------- |
| Container     | [http://localhost:8080](http://localhost:8080)                         |
| Marketing     | [http://localhost:8081](http://localhost:8081)                         |
| Auth / Login  | [http://localhost:8082](http://localhost:8082)                         |
| SignUp        | [http://localhost:8082/auth/signup](http://localhost:8082/auth/signup) |
| SignIn        | [http://localhost:8082/auth/signin](http://localhost:8082/auth/signin) |
| Home Page     | [http://localhost:8081/](http://localhost:8081/)                       |
| Pricing       | [http://localhost:8081/pricing](http://localhost:8081/pricing)         |

---

## Estructura de las carpetas principales:

- /container
  - src/
  - config/
  - package.json
- /marketing
  - src/
  - config/
  - package.json
- /auth
  - src/
  - config/
  - package.json
- /.github
  - auth.yml
  - container.yml
  - marketing.yml


## Tecnologías usadas en la prueba

**Lenguajes:**

- JavaScript (ES6+)
- JSX (React)

**Librerías y frameworks:**

- React 17
- React DOM
- React Router DOM v5
- Material-UI v4
- react-material-ui-carousel
- Webpack 5 + Dev Server
- Babel (presets para React y ESNext)
- ESLint

**Dependencias de desarrollo:**

- babel-loader, html-webpack-plugin, style-loader, css-loader, clean-webpack-plugin, webpack-cli, webpack-merge

---

## Resultados

- Los microfrontends se ejecutan de manera independiente en modo desarrollo.
- El contenedor integra correctamente los microfrontends de Marketing y Auth.
- Se logró navegar entre los microfrontends utilizando React Router y los módulos expuestos.
- Se implementó un carrusel genérico para la página de inicio (Marketing) con Material-UI.

---

## Conclusiones
- **Webpack Module Federation** facilita la integración de microfrontends manteniendo independencia de despliegue.  
- Un **monorepositorio** simplifica la coordinación inicial, pero en un escenario real los microfrontends podrían vivir en repositorios separados.  
- La arquitectura permite **escalar** y añadir nuevos microfrontends sin afectar el contenedor ni los módulos existentes.  
- Es una solución **viable** para proyectos que requieren modularidad y despliegues independientes por equipo o dominio.  

### Ventajas  

- Autonomía de despliegue y desarrollo por cada equipo.  
- Posibilidad de reutilizar componentes y librerías comunes.  
- Escalabilidad: fácil incorporación de nuevos microfrontends.  
- Reducción del acoplamiento entre módulos.  
- Favorece la organización por dominios funcionales.  

### Desventajas  

- Mayor complejidad en la configuración inicial (Webpack, routing, comunicación entre microfrontends).  
- Potenciales problemas de rendimiento si no se gestionan bien las dependencias compartidas.  
- Riesgo de inconsistencias en librerías comunes si no se controlan versiones.  
- Testing y debugging pueden ser más complejos que en un monolito tradicional. 
---

## Instrucciones de ejecución

Para cada microfrontend:

```bash
# Instalar dependencias
npm install

# Levantar la aplicación en desarrollo
npm start
```
