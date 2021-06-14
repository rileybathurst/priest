# Priest

The website for https://priestsheetmetal.co.nz

## Gallery Cache issue.
I've got some problems with netlify / strapi / gatsby dealing with the massive image galleries
So maybe I just pull that in from AWS and deal with it all in code and then strapi the most.

I could do something with specific galleries to each but with this many images everything keeps breaking

## Built on

- Strapi
- Gatsby

## Development

First get /priest-cms running this is hosted on Linode

``` npm run develop ```

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
- should I still have something of a dropdown on the services?
- testimonials line height is fixed on profile not on sheetmetal

## Naming

Summit is the new naming for hero.

As I currently have both I can go back to hero once the original design is completly deprecated
