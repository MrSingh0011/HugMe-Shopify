# HugMe Fashion – Vercel Frontend

## 🚀 Deploy to Vercel

### Option 1: Vercel CLI (fastest)
```bash
npm i -g vercel
cd hugme
vercel
# Follow prompts → your site goes live instantly
```

### Option 2: Vercel Dashboard (drag & drop)
1. Go to https://vercel.com/new
2. Drag the `hugme/` folder into the upload zone
3. Click **Deploy** — done!

### Option 3: GitHub Auto-deploy
1. Push this folder to a GitHub repo
2. Import repo at https://vercel.com/import
3. Every `git push` auto-deploys

---

## 📁 Project Structure
```
hugme/
├── index.html      # Full single-page storefront
├── vercel.json     # Routing + headers config
└── README.md
```

---

## ✅ Features Implemented

### 🌍 Multi-Currency
- **India** → INR (₹) by default
- **International** → USD base, auto-converted to MYR, JPY, GBP, EUR, AED
- Currency switcher in top bar

### 🔍 Search & Filters
- Autocomplete search (color + style)
- Color-based filters (Black, Brown, Tan, Cognac, Burgundy, Olive)
- Product type filters (Jackets, Bags, Accessories)

### 🛍️ Product Pages (PDP)
- Full popup modal with all required sections
- Title, Reviews, MRP, Sale Price, SALE tag
- "30 sold in last 18 hours" urgency
- "30 customers viewing" social proof
- Color & Size selection
- Add to Cart / Buy It Now / Wishlist
- Mumbai store pickup availability
- India (3–6d) & International (12–26d) delivery info
- Vendor / Type / SKU metadata
- Social sharing links
- Safe checkout badge
- Tabs: Description, Shipping, Reward Points, Reviews, FAQs

### 🛒 Cart
- Slide-in cart drawer
- Quantity controls
- Coupon code field
- Special instructions for seller
- "You're saving ₹X" display
- Free shipping indicator

### 💌 Subscribe Popup
- Auto-shows after 3.5s (once per session)
- 10% off incentive
- Email capture

### 🍪 Cookie Banner
- GDPR-compliant consent banner
- Accept / Decline

### 💬 WhatsApp
- Floating WhatsApp button (bottom-right)
- Links to WhatsApp chat

### 🎁 Loyalty & Rewards
- Earn Points, Gift Vouchers, Credit Notes section

### 🔗 URL Structure
- `/` → India (INR)
- `/en-us` → International (USD)
- hreflang tags for SEO

### 🎨 Design
- Video-style animated hero banner
- 3-panel category banners
- Premium dark leather aesthetic
- Mobile-first responsive
- Cormorant Garamond (display) + Outfit (body)

---

## 🛠️ Next Steps (Shopify Integration)
When connecting to actual Shopify:
1. Replace product data with Shopify Storefront API
2. Connect real currency exchange API (e.g. exchangerate-api.com)
3. Wire cart to Shopify checkout
4. Enable Google Merchant Center structured data feeds
5. Add real video to hero section








# HugMe-Shopify
