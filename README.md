## Hi @lanngoz!
To test the app, clone the repository, then run:
```
$ npm i
$ npm run build
$ npm run preview
```
Then open the localhost url provided by the CLI. To see a machine's summary, click on a marker on the displayed map!

As you can see, this is a really crude prototype and there is quite a list of parts missing that would be crucial in a production environment.
These include, but are not limited to:

- Unit testing of hooks, utilities, services, components
- Secure environment variables via eg. github actions
- API communication would ideally happen during SSR, eg. via Next.js getServerSideProps
- Design and layout that accommodate better usability, accessability, mobile responsiveness
- Loading and error state reflected in UI
- Proper logging connected to eg. Sentry
- Component styling encapsulation via eg. css modules + less
- Meta html markup, eg. Favicon, title, SEO related configuration
- Faster lint and format via eg. biome
- CI/CD pipelines, test/build scripts, site deployed

*I focused on getting the core functionality to work but of course I would gladly elaborate about any topics.*

### Thank you for the exciting challenge, I enjoyed it!