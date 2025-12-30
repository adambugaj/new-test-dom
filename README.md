# Dom Jakości - Portal Budowlany (Astro Static Site)

## 🚀 Jak uruchomić lokalnie

1.  Zainstaluj zależności:
    ```bash
    npm install
    ```

2.  Uruchom serwer deweloperski:
    ```bash
    npm run dev
    ```
    Strona będzie dostępna pod adresem `http://localhost:4321`.

3.  Zbuduj wersję produkcyjną (lokalnie):
    ```bash
    npm run build
    ```
    Pliki zostaną wygenerowane w folderze `dist/`.

4.  Podgląd wersji zbudowanej:
    ```bash
    npm run preview
    ```

## ☁️ Jak wdrożyć na Cloudflare Pages

Projekt jest skonfigurowany do bezpośredniego wdrożenia jako statyczna strona (SSG).

1.  Zaloguj się do Cloudflare Dashboard.
2.  Przejdź do **Workers & Pages** -> **Create Application** -> **Pages** -> **Connect to Git**.
3.  Wybierz repozytorium z tym kodem.
4.  Skonfiguruj ustawienia budowania (Build Settings):
    *   **Framework preset:** `Astro`
    *   **Build command:** `npm run build`
    *   **Build output directory:** `dist`
5.  Kliknij **Save and Deploy**.

Cloudflare automatycznie zainstaluje zależności, zbuduje stronę i udostępni ją w swojej sieci CDN.

## 🛠 Struktura Projektu

*   `src/pages/` - Trasy (routes) aplikacji.
*   `src/components/` - Komponenty UI (Header, Footer, itp.).
*   `src/layouts/` - Główny układ strony (BaseLayout).
*   `src/utils/` - Funkcje pomocnicze (SEO).
*   `public/` - Zasoby statyczne (favicon).
*   `astro.config.mjs` - Konfiguracja Astro (Output: Static).
