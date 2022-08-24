# There are way less parks in NYC than you think.

### About this project:
A 2-week project for the Lede Program 2022—a 10-week intensive data journalism course at Columbia’s J School. 

The prompt for this project was to incorporate small data and mapping in our story. What started out as a curious question on how much park space there is in NYC became a study on how the maps we use to navigate our everyday lives (Google maps, Apple maps, etc.) does not reflect our reality. 

I had heard from an urban planning friend that actually a lot of the 'park space' that is labeled as such on maps, and used in urban planning calculations (whatever that means) is not actually accessible, or even what we think of as traditional park space. This is because parkways, vacant lots, managed sites under construction are all deemed as official [NYC park property](https://nycopendata.socrata.com/Recreation/Parks-Properties/enfh-gkve) and contribute to this notion that NYC actually has a [ton of park space](https://www.tpl.org/city/new-york-new-york) for its residents. I wanted to test this hypothesis out. 

First, I took a look at the big data--the 2,000+ row long CSV file that NYC Open data has on all of the park proerties in New York. Luckily, this dataset includes pretty comprehensive documentation that explains each type of park property. I used pandas to analyze how much park space is actually availble to us for recreational use. 

To bring the data a bit closer to home, I took a look at park properties (as labeled by Google Maps) around my neighborhood. What I found was that out of the 20+ park properties I visited, only 2 had green space and were open to the public at all times!

Moving forward, I would like to see how ubiquitous this misportrayal is throughout all of the boroughs in NYC and calculate just how much accessible, open green space there is in New York. My hunch is that there is way less. 

## Repository contents
* data analysis: Analysis of total acreage of recreational park spaces in NYC. Data from NYC Open Data. Anaylsis with pandas. 
* ai-files: raw illustrator files of the visuals included in the story
* ai2html-outputs: ai2html outputs to add interactivity. 
