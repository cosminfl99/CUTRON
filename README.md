# CUTRON Premium Industrial Website

Website multipage pentru CUTRON, parte din ecosistemul UZINEX.

## Pagini

- `index.html`
- `products.html`
- `company.html`
- `support.html`
- `showcase.html`
- `laser-cutting.html`
- `press-brake.html`
- `shearing-machine.html`
- `hydraulic-press.html`
- `punching-machine.html`
- `rolling-machine.html`
- `v-grooving-machine.html`
- `panel-bender.html`
- `automation.html`
- `smart-factory.html`
- `service-support.html`
- `about.html`
- `contact.html`

## Structura

- `src/data.js` - continut, pagini, produse, metrici si case studies
- `src/i18n.js` - detectie limba, mapare country/timezone si traduceri RO/EN/DE/PL/BG
- `src/components.js` - componente UI randate modular
- `src/site.js` - initializare pagina, animatii, meniu mobil, formular
- `src/styles.css` - design system luxury industrial
- `public/assets/` - logo-uri CUTRON si imagini industriale optimizate WebP

## Rulare locala

```bash
python -m http.server 4173
```

Apoi deschide:

```text
http://localhost:4173/index.html
```

## Verificare

Site-ul a fost verificat cu Playwright pe desktop si mobile pentru:

- incarcare pagini
- erori JavaScript
- overflow orizontal
- meniu mobil
- screenshot-uri vizuale
