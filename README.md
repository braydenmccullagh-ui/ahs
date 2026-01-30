# Audy's Home Services - Website Guide

Welcome! This guide will help you get your website online and show you how to make simple updates to your content. Don't worry if you're not technical - I made this as simple as possible.

---

## Table of Contents

<details>
<summary><strong>Part 1: Getting Your Website Online</strong></summary>

| Step                                                   | Description                            |
| ------------------------------------------------------ | -------------------------------------- |
| [Step 1](#step-1-create-a-vercel-account-free-hosting) | Create a Vercel Account (Free Hosting) |
| [Step 2](#step-2-upload-your-website-to-github)        | Upload Your Website to GitHub          |
| [Step 3](#step-3-connect-vercel-to-your-website)       | Connect Vercel to Your Website         |
| [Step 4](#step-4-connect-your-custom-domain)           | Connect Your Custom Domain             |

</details>

<details>
<summary><strong>Part 2: Updating Your Website Content</strong></summary>

#### Contact Information

| What to Change     | Link                                 |
| ------------------ | ------------------------------------ |
| Phone Number       | [Go to section](#phone-number)       |
| Email Address      | [Go to section](#email-address)      |
| Business Hours     | [Go to section](#business-hours)     |
| Social Media Links | [Go to section](#social-media-links) |

#### Website Sections

| What to Change   | Link                                                      |
| ---------------- | --------------------------------------------------------- |
| Main Headline    | [Go to section](#updating-the-main-headline-hero-section) |
| Hero Description | [Go to section](#hero-description)                        |
| Services         | [Go to section](#updating-services)                       |
| Why Choose Us    | [Go to section](#updating-why-choose-us-section)          |
| Customer Reviews | [Go to section](#updating-customer-reviews)               |

#### SEO & Technical

| What to Change             | Link                                                      |
| -------------------------- | --------------------------------------------------------- |
| SEO Keywords & Description | [Go to section](#updating-seo-search-engine-optimization) |
| Domain Settings            | [Go to section](#updating-your-domain-in-the-code)        |

</details>

<details>
<summary><strong>Part 3: Quick Reference</strong></summary>

| Resource               | Link                                         |
| ---------------------- | -------------------------------------------- |
| File Locations Summary | [Go to section](#file-locations-summary)     |
| Common Symbols in Code | [Go to section](#common-symbols-in-the-code) |
| Need Help?             | [Go to section](#need-help)                  |
| Tips for Success       | [Go to section](#tips-for-success)           |

</details>

---

# Part 1: Getting Your Website Online

## Step 1: Create a Vercel Account (Free Hosting)

Vercel is a free service that will host your website and keep it online 24/7.

1. Go to **[vercel.com](https://vercel.com)**
2. Click **"Sign Up"** in the top right corner
3. Choose **"Continue with GitHub"** (recommended) or **"Continue with Email"**
4. If using GitHub, you'll need to create a GitHub account first at [github.com](https://github.com)
5. Follow the prompts to complete your account setup

## Step 2: Upload Your Website to GitHub

GitHub is where your website files will be stored. Vercel will read from here.

1. Go to **[github.com](https://github.com)** and sign in
2. Click the **"+"** button in the top right corner
3. Select **"New repository"**
4. Name it: `audys-home-services`
5. Keep it **Private** (or Public if you prefer)
6. Click **"Create repository"**
7. Follow the instructions shown to upload your website files

## Step 3: Connect Vercel to Your Website

1. Go to **[vercel.com](https://vercel.com)** and sign in
2. Click **"Add New Project"**
3. Find your `audys-home-services` repository and click **"Import"**
4. Leave all settings as default
5. Click **"Deploy"**
6. Wait 1-2 minutes for your website to build
7. **Done!** You'll see a link like `audys-home-services.vercel.app` - this is your live website!

## Step 4: Connect Your Custom Domain

To use your own domain (like `audyshomeservices.ca`) instead of the Vercel link:

### If You Already Own a Domain:

1. In Vercel, go to your project
2. Click **"Settings"** at the top
3. Click **"Domains"** in the left sidebar
4. Type your domain (e.g., `audyshomeservices.ca`) and click **"Add"**
5. Vercel will show you DNS settings to update

### Updating Your Domain Settings:

You'll need to log into wherever you bought your domain (GoDaddy, Namecheap, Google Domains, etc.) and update the DNS settings:

**Option A - Recommended (Nameservers):**
Change your nameservers to:

```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

**Option B - DNS Records:**
Add these records:

- Type: `A` | Name: `@` | Value: `76.76.21.21`
- Type: `CNAME` | Name: `www` | Value: `cname.vercel-dns.com`

> **Note:** DNS changes can take up to 24-48 hours to take effect, but usually happen within a few hours.

### If You Need to Buy a Domain:

Popular places to buy domains:

- **[Namecheap](https://namecheap.com)** - Usually cheapest
- **[Google Domains](https://domains.google)** - Simple and reliable
- **[GoDaddy](https://godaddy.com)** - Well-known option

Search for your desired domain name (like `audyshomeservices.ca`) and follow their purchase process.

---

# Part 2: Updating Your Website Content

All your website content is stored in simple text files. Here's how to update the most common things.

## How to Edit Files

**Option 1: Edit on GitHub (Easiest)**

1. Go to your repository on GitHub
2. Navigate to the file you want to edit
3. Click the **pencil icon** (Edit) in the top right of the file
4. Make your changes
5. Scroll down and click **"Commit changes"**
6. Your website will automatically update in 1-2 minutes!

**Option 2: Edit Locally**
If you have the files on your computer, edit them with any text editor (like Notepad), then push the changes to GitHub.

---

## Updating Contact Information

### Phone Number

**File:** `src/components/Button.tsx`

Find this line (around line 4):

```
text = "(289) 501-1977",
```

Change the phone number to your new number.

Also find (around line 5):

```
href = "tel:+12895011977",
```

Change this to your new number (no spaces or dashes, with country code 1).

---

### Email Address

**File:** `src/components/Footer.tsx`

Find this line (around line 125):

```
mattaudy@hotmail.com
```

Change it to your new email address.

---

### Business Hours

**File:** `src/components/Footer.tsx`

Find this line (around line 144):

```
<span>Mon - Fri: 8am - 5pm | Sat: 8am - 12pm</span>
```

Change the hours to match your schedule.

---

### Social Media Links

**File:** `src/components/Footer.tsx`

**Facebook** (around line 35):

```
href="https://www.facebook.com/profile.php?id=61584620647194"
```

**Instagram** (around line 49):

```
href="https://www.instagram.com/matt.audy/"
```

Replace these URLs with your own social media profile links.

---

## Updating the Main Headline (Hero Section)

**File:** `src/components/Hero.tsx`

Find these lines (around line 28-32):

```
Fixing What&apos;s Broken
<br />
Fast, Affordable
<br />& Done Right
```

Change this text to your new headline.

> **Note:** `&apos;` is how we write an apostrophe (') in the code. So `What&apos;s` displays as `What's`.

---

### Hero Description

In the same file, find (around line 37):

```
Fast, honest repairs for appliances, heating, and fixtures.
Trusted across the Niagara Region with a 5-star reputation
```

Change this to your new description.

---

## Updating Services

**File:** `src/components/Services.tsx`

Each service has this structure (starting around line 27):

```javascript
{
  id: "refrigerators",
  title: "Refrigerators & Freezers",
  description: "Don't let your groceries go to waste. We offer same-day diagnostics...",
  items: [
    "Fridge not cooling or freezer icing over",
    "Water leaks and ice maker failures",
    "Loud or unusual compressor noises",
    "Seal replacement and calibration",
  ],
},
```

**To change a service:**

- `title` - The service name shown as the heading
- `description` - The short paragraph below the title
- `items` - The bullet point list (add or remove lines as needed)

**The 6 services are:**

1. Refrigerators & Freezers
2. Dishwashers
3. Ovens, Stoves & Ranges
4. Washers & Dryers
5. Furnaces & Fireplaces
6. Taps & Fixtures

---

## Updating "Why Choose Us" Section

**File:** `src/components/WhyUs.tsx`

Find the `reasons` section (around line 28):

```javascript
{
  id: "pricing",
  title: "Upfront & Honest Pricing",
  description: "No hidden fees or surprise bills. You get a clear, honest quote...",
},
```

Change the `title` and `description` for each of the 3 reasons.

---

## Updating Customer Reviews

**File:** `src/components/Reviews.tsx`

Find the reviews section (around line 34):

```javascript
{
  id: 1,
  name: "Sally Dollar",
  location: "Niagara Region",
  rating: 5,
  review: "Matt was at my house within 2 hours of my call...",
},
```

**To change a review:**

- `name` - Customer's name
- `location` - Where they're from
- `rating` - Number of stars (1-5)
- `review` - Their review text

You can add more reviews by copying an entire block and pasting it below, or remove reviews by deleting a block.

---

## Updating SEO (Search Engine Optimization)

This helps your website show up in Google searches.

**File:** `src/app/layout.tsx`

### Business Description (around line 8):

```javascript
description:
  "Professional appliance repair, furnace repair, and plumbing services in the Niagara Region...",
```

### Keywords (around line 47):

```javascript
keywords: [
  "appliance repair Niagara",
  "appliance repair St Catharines",
  ...
],
```

Add or change keywords that people might search for to find your business.

### Service Areas (around line 31):

```javascript
serviceAreas: [
  "St. Catharines",
  "Niagara Falls",
  "Welland",
  ...
],
```

Update this list with the cities/areas you serve.

---

## Updating Your Domain in the Code

**Important:** After you have your domain, update it in these files:

**File:** `src/app/layout.tsx`
Find (around line 7):

```
url: "https://audyshomeservices.com",
```

Change to your actual domain.

**File:** `src/app/sitemap.ts`
Find (around line 4):

```
const baseUrl = "https://audyshomeservices.com";
```

Change to your actual domain.

**File:** `src/app/robots.ts`
Find (around line 4):

```
const baseUrl = "https://audyshomeservices.com";
```

Change to your actual domain.

---

# Part 3: Quick Reference

## File Locations Summary

| What to Update     | File Location                                                   |
| ------------------ | --------------------------------------------------------------- |
| Phone Number       | `src/components/Button.tsx`                                     |
| Email Address      | `src/components/Footer.tsx`                                     |
| Business Hours     | `src/components/Footer.tsx`                                     |
| Social Media Links | `src/components/Footer.tsx`                                     |
| Main Headline      | `src/components/Hero.tsx`                                       |
| Services           | `src/components/Services.tsx`                                   |
| Why Choose Us      | `src/components/WhyUs.tsx`                                      |
| Customer Reviews   | `src/components/Reviews.tsx`                                    |
| SEO & Keywords     | `src/app/layout.tsx`                                            |
| Domain/URL         | `src/app/layout.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts` |

---

## Common Symbols in the Code

| What You See | What It Means         |
| ------------ | --------------------- |
| `&apos;`     | Apostrophe (')        |
| `&quot;`     | Quotation mark (")    |
| `&amp;`      | Ampersand (&)         |
| `<br />`     | Line break (new line) |

---

## Need Help?

If you get stuck or something breaks:

1. **Don't panic!** - Vercel keeps your old versions, so nothing is permanently lost
2. **Check for typos** - Make sure you didn't accidentally delete a comma, quote, or bracket
3. **Undo changes** - On GitHub, you can view the file history and restore an old version
4. **Contact me** - If you're really stuck, feel free to reach out for help

---

## Tips for Success

1. **Make one change at a time** - This makes it easier to find problems if something goes wrong
2. **Wait for the build** - After making changes, wait 1-2 minutes for the website to update
3. **Keep backups** - Before making big changes, copy the original text somewhere safe
4. **Test on your phone** - Always check how changes look on mobile devices too

---

_This guide was created to help you manage your website independently. Good luck!_
