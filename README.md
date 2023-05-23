# debug_imanSan

1. multipleWords shouldAlways be *camelCased.* thisIsCamelCase  
^ weatherapiurl -> weatherApiUrl, searchHistory, currentDay, etc.

2. Check for spelling on variables (Download the VSCode extension "Code Spell Checker")  
^ Switched forcast to forecast

3. Pseudocoding is the technique you plan to use to solve a problem with code. (Line 1)

4. Repo files should be neatly organized, ideally with a separation of concerns. (See assets folder structure).

5. HTML file is missing a couple < /div > tags.

6. Random </ link > on line 7 in HTML.

7. You need to add the CDN for Bootstrap Icons in order to load icons. Adding Bootstrap and adding Bootstrap Icons are two independent downloads. Since we are not using Node to install Bootstrap or Bootstrap Icons, you will navigate to this page and copy/paste the svg inside the button tag.  
https://icons.getbootstrap.com/icons/search/

8. In JS, you are calling the function *searchVal* onClick, (line 16). There is no parameter you're passing in. Then on line 18, you're requiring a parameter. These things should agree. When you call a function, you use the parenthesis to pass in whatever data is necessary for that function to run.

9. In the function searchVal, searchForm and fetchCity should be wrapped in an else block.

10. In your HTML, #search's placeholder should provide instructions to users. Change "Denver..."

11. In fetchCity function, not sure what savedCity (searchForm) is for.
