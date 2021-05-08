# Priest - rebuild

I need a backup and netlify build until I get back to where I was and further ahead

#### Image is the main rebuild needed

#### Google font

#### sitemap

#### gatsby-remark-responsive-iframe



The website for https://priestsheetmetal.co.nz



## Built on

- Strapi
- Gatsby



## Development

First get /priest-strapi running
``` yarn develop``` 



``` npm run develop ```



## Strapi Content Types

this needs way more documentation

### Services

- user, default setup
- page
- service
- sliderone
- nextslider, this should get renamed
- featured
- gallery
- videos



### Meta 

https://www.gatsbyjs.org/docs/add-page-metadata/

# Issues

- when coming from a service where I dont have video it shows as null which breaks things as opposed to being empty [] which is fine
- firefox ios doesnt handle the form input
- some of the strapi API has capital letters where it would be nicer to be camelCase no underscores, hypens or whatever else
- footer links dont fill the space
- on develop or build of Gatsby ERROR (node:9401) [DEP0066] DeprecationWarning: OutgoingMessage.prototype._headers is deprecated
- .htaccess - there was a file for this but I'm really not sure it was useful
- headercontact.js has been renamed header-contact.js
- smallmenu.js has been renamed small-menu.js
- summitcontact.js has been renamed summit-contact.js
- SEO in general

### Workarounds 

- hasVideo | hasGallery etc I was having problems with booleans so I used numbers with 0 and 1 instead - test some booleans on a new build and implement them where I can
- The Uploads are not coming across properly manually copy the uploads dir from /backend/public/uploads/ to /frontend/public/uploads this also has to happen on upload where the directory is moved to .com/uploads this all needs to be done better but for right now i'll get through



## To Do

- Other services link at the bottom of each service page
- add a nice quote mark to the testimonials
- There are some really old class names from Foundation which I haven't used for years so just check into if they are the best ways
- can I compress the vimeo player script?
- Divide the scss to atomic design and rebuild the patternlab with the new things
- I should be able to remove the logo from the src/images but need to be checked
- Package.json keywords?
- copyright year needs to be dynamic
- theres a large amount of services on the index page that would be nice to simplify
- testimonials on the home page needs a quote mark going the right direction
- test on a screen reader

## Naming

Summit is the new naming for hero.

As I currently have both I can go back to hero once the original design is completly deprecated



## Layout

[Math for sizes](https://docs.google.com/spreadsheets/d/1mmnTlSNv-L8dyHRb33eE_pM3qVv-a5hz3q9WfTDlI4c/edit#gid=0)

I think these might need to be a little bigger for more spacing

| small             |      |                           |
| ----------------- | ---- | ------------------------- |
| medium            | 40   |                           |
| medium__half-step | 54   | minor change              |
| large             | 80   |                           |
| large__half-step  | 105  | minor change              |
| full              | 144  | start floating everything |

## Styling

### SCSS

using scss for nesting, colors, etc

### Naming

I like the naming of BEM but im not 100% on it so I'm using a modified version of this I should document this with my style guide

.block__elem--mod { }

### Print

Have I done anything with this? or get rid of anything for it