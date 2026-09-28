# Zee Fashion Palace — Website

A fast, mobile-friendly brand website for a bespoke fashion house.
It's plain HTML/CSS/JS with no build step and no server needed.

## Pages
| File | What it is |
|---|---|
| `index.html` | Home: hero, featured pieces, how custom orders work, testimonials |
| `collections.html` | All products with category filters and an "Order on WhatsApp" pop-up |
| `custom-order.html` | Made-to-measure form that sends the request to WhatsApp |
| `about.html` | Designer story, values, process |
| `contact.html` | WhatsApp, phone, email, socials, address, hours, map |

## Editing (no coding knowledge needed)
- **Contact details, WhatsApp number, socials, hours, map** → `js/config.js`
  The WhatsApp number must be digits only, in international format, e.g. `2348012345678`.
- **Products** (add, remove, change price or photo) → `js/products.js`
  Copy an existing `{ ... },` block and change the values. Set `featured: true` to show it on the home page.
- **Photos** → see `images/README.md`
- **Testimonials, About story, stats** → edit the text directly in `index.html` / `about.html`
  (look for `TODO` comments).

## Preview locally
```bash
npx serve .          # or: python3 -m http.server 8000
```
Then open the address it prints.

## Put it online (free)
- **Netlify:** drag this whole folder onto https://app.netlify.com/drop
- **GitHub Pages:** push to a repo → Settings → Pages → deploy from the `main` branch.
- Then connect a custom domain like `zeefashionpalace.com` in the host's settings.
