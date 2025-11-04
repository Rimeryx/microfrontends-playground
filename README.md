````markdown
# 🧩 Microfrontends Playground

Bienvenue dans mon **environnement complet de micro-frontends** !  
Ce projet permet d’apprendre, comparer et faire cohabiter **4 technos front** :

| Framework | Technologie | Port |
|----------|-------------|-----|
| ⚛️ React | SPA moderne | 8080 |
| 🟩 Vue 3 | Composition API | 8081 |
| 🅰️ Angular | App standalone + Single-Spa | 4200 |
| 📦 Vanilla + jQuery | Web classique | 8082 |
| 🧠 Root-config | Shell Single-Spa | 9000 |

---

## ⭐ Objectifs du projet

✅ Comprendre **les micro-frontends**  
✅ Travailler plusieurs **frameworks en simultané**  
✅ Centraliser l’intégration via **Single-Spa**  
✅ Avoir un **playground** d’apprentissage et d’essais

---

## 🗺️ Architecture du Playground

```text
microfrontends-playground/
  ├─ root-config/         → Le Shell micro-frontends (Single-SPA)
  ├─ mfe-react/           → Micro-app React
  ├─ mfe-vue/             → Micro-app Vue 3
  ├─ mfe-angular/         → Micro-app Angular
  ├─ mfe-vanilla/         → Micro-app HTML + CSS + jQuery
  └─ pnpm-workspace.yaml  → Workspace monorepo
````

---

## 🧩 Schéma visuel

```text
                ┌─────────────────────┐
                │  Root Config (9000) │
                │  Single-Spa Shell   │
                └─────────┬──────────┘
     ┌──────────────┬─────┼──────┬────────────────┐
     │              │     │      │                │
┌────▼────┐   ┌─────▼───┐ │ ┌────▼─────┐   ┌──────▼─────┐
│ React   │   │ Vue 3   │ │ │ Angular  │   │ Vanilla +   │
│ (8080)  │   │ (8081)  │ │ │ (4200)   │   │ jQuery 8082│
└─────────┘   └─────────┘ │ └──────────┘   └────────────┘
                          │
                          └── Micro-frontends Views
```

---

## 🚀 Installation & Dev

> ⚠️ Nécessite Node 18+ et pnpm installé globalement

```sh
pnpm install
pnpm dev
```

Puis ouvrir :

➡️ [http://localhost:9000](http://localhost:9000)

---

## 🎛️ Scripts utiles

| Commande                    | Action                                       |
| --------------------------- | -------------------------------------------- |
| `pnpm dev`                  | Lance **tous** les micro-fronts en parallèle |
| `pnpm --filter <app> start` | Lance un micro-front en particulier          |
| `git checkout -b dev`       | Branche de développement recommandée         |

---

## 🛠️ Technologies

* **single-spa**
* **Webpack 5**
* **PNPM workspaces**
* **React 18**
* **Vue 3**
* **Angular 17**
* **Vanilla + jQuery**

---

## 👤 Auteur

**Made with ❤️ by [Rimeryx](https://github.com/Rimeryx)**
→ Passionné par les micro-frontends et l’apprentissage multi-framework 💡

---

## 📜 Licence

Libre d’utilisation pour apprentissage / expérimentation ✅
