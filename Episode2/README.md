Whats NPM?
-> NPM is a site where all sort of node packages are maintained and the abbrevation for npm is not node package manager , it is simply known as npm.

Whats PARCEL/WEBPACK?
-> Parcel or web pack are the types of bundlers which provide strength to our project by bundling and adding super powers to our project like some of the optimisation of the parcel and webpack is that the code splitting, image optimisation etc

What is parcel-cache?
it is the cache memory created by parcel to handle the faster builds and the part of data is stored in the parcel-cache to track record the data and behaviour of the developer.

What is npx?
Npx is the package runner which is used to execute the packages which are available to us in our node modules or the npm.

Difference between dependencies and devDependancies?
Dependancies provide normal dependancies which can be used on production.
devDependancies are the ones which are used by developers.

Whats tree shaking?
It is kind of removing unnecessary code which is called or written by the developer but never used in any cases like the imports are added but none lines are related to the imports those code lines is automatically removed is known as tree shaking and this feature is supported by parcel

Whats hot module replacement?
hot module replacement is automatic upload of changes done into our local on just click of save and the update is on the local server.

5 super powers of parcel?

1. it bundles the code.
2. tree shaking
3. hmr - hot module replacement
4. local server
5. debugging diagnostics (Error handling)

6.gitignore?
it is a file created to uncheck the unnecessary files while pushing our code to git repo. we need to add the files which cannot be generated on the server side and avoid or skip adding the files which can be generated on the server side. example node_modules , parcel-cache, dist.

7. Package.json and package-lock.json?
   Package.json is a config file for our npm and holds the versions of dependancies and package-lock.json is a file which has all the track of exact versions which are used in our dependancies and this is required in production to verify as the versions which are present in our local is similar to the packages which are on production

not modify package-lock.json?
because the versions are exact versions which are included in our project

What is node_modules?good idea to push to git?
Node_modules are the packages which we get while we run npm install and we cannot push it to git as it can be generated from server side.

what is dist folder?
while we run parcel the code gets minified and kept in dist folder.

What is browserlist?
this is the dependancy which is used to say like which versions of the browsers out website should support.
