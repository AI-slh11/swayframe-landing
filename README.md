# Swayframe landing page

A self-contained static landing page for Swayframe, an AI creative agent for business teams creating carousels and motion graphics.

## Preview locally

Open `index.html` in a browser, or serve this directory with any static web server.

## Application delivery

Before launch, set `APPLICATION_EMAIL` near the top of `script.js` to the inbox that should receive applications. The form opens a prefilled email for the applicant to review and send; it does not transmit or store application details on the site. Replace this with a hosted form or CRM integration if direct submission and conversion tracking are needed.

## Offer language

- Swayframe: $299 one-time purchase.
- Free trial available; duration and eligibility were not supplied, so the page does not state them.
- Claude is separate; its free tier has usage limits and paid plans are billed separately.

## Deployment

Import the repository into Vercel as a static site. No build command is needed; the output directory is the project root.