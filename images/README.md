# Images

The site currently uses placeholder photos from Unsplash. To use your own:

1. Put your photos in this folder, e.g. `images/red-gown.jpg`.
   - Portrait photos (about 4:5) look best for products.
   - Keep each file under ~500 KB. Resize to about 1200px wide first (squoosh.app is free).
2. In `js/products.js`, change a product's `image` to `"images/red-gown.jpg"`.
3. For hero, banner, and about photos, search the `.html` files for `images.unsplash.com`
   and replace each URL with your file path.
4. To use a real logo, swap the `LOGO` SVG in `js/main.js` for `<img src="images/logo.png" alt="">`,
   and replace `images/favicon.svg`.
