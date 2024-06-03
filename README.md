# Mobile Bottom Navigation Component

The mobile bottom navigation (Tailwind) component is built to provide the user easy access to most utilized features on an e-commerce website on mobile like the menu drawer, cart drawer, search, account page and more! This section has in-built functionalities to open the cart and menu drawer, open the search dropdown, open the account page and redirection option!

**Live Preview Link**: https://fozail-ahmad-store.myshopify.com/?preview_theme_id=136163754165

**Customizer Link:** https://admin.shopify.com/store/fozail-ahmad-store/themes/136163754165/editor


## Features

 - Feature 1 Option to show/hide the text under the icon
 - Feature 2 Block options to have mobile navigation block title and svg
 - Feature 3 Block option to choose the in-built mobile navigation block functionality from open the menu drawer, open the cart drawer, open search, open account page, redirection or none!
 - Feature 4 Block option to provide a redirection link if the functionality choosen is redirection.


## Dependencies

 - Dependency 1 Tailwind CSS (v3.4.3)


## Implementation Steps

 - ### Step 1: 
   Add a new section file under the sections folder and copy/paste the code from 'mobile-bottom-navigation.liquid'
   
  - ### Step 2:
    Add a new snippet file under the snippets folder and copy/paste the code from 'skeleton-icons.liquid' for respective placeholder svgs

  - ### Step 3:
    Add a new js file under the assets folder and copy/paste the code from 'mobile-bottom-navigation.js'

 - ### Step 4:
    Add a new section file under the sections folder and copy/paste the code from 'mob-nav-cart-icon-bubble.liquid' (This section is for the dynamic cart icon bubble using section rendering api when a product gets added to cart)

 - ### Step 5:
    global.js - Add line no. 490 in your HeaderDrawer custom element (inside the constructor) present in your dawn/skeleton global.js file! (This is done for the open menu drawer functionality)

 - ### Step 6:
    cart-drawer.js - Only add the lines with comments to your existing dawn/skeleton's CartDrawer custom element! specifically line 14, line 30 to 33, line 112 to 114, line 143 to 147. (This is done for the open cart drawer functionality and dynamic cart icon bubble)
   
 - ### Step 7:
    Ensure that tailwind css has been installed in your theme for this version of mobile bottom navigation to works!

# Important Notes

>  - The component employs its own styling for the grid system. For further optimization, consider using the classes provided by the
> theme.
